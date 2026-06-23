"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle2, Lock, Sparkles } from "lucide-react";
import { defaultValues, serviceDefinitions } from "./formConfig";
import { FieldConfig, FormValues, ServiceKey } from "./types";
import {
  CheckboxGroupField,
  FileUploadField,
  InputField,
  RadioGroupField,
  SelectField,
  TextareaField,
} from "./FormFields";
import PaymentCheckout from "./PaymentCheckout";
import CalendlyBooking from "./CalendlyBooking";

const reviewStepTitle = "Review";

const stepTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

function renderField(field: FieldConfig, methods: ReturnType<typeof useForm<FormValues>>) {
  const commonProps = { errors: methods.formState.errors };

  switch (field.type) {
    case "text":
    case "date":
    case "time":
      return <InputField key={field.name} field={field} register={methods.register} {...commonProps} />;
    case "textarea":
      return <TextareaField key={field.name} field={field} register={methods.register} {...commonProps} />;
    case "select":
      return <SelectField key={field.name} field={field} register={methods.register} {...commonProps} />;
    case "checkbox-group":
      return <CheckboxGroupField key={field.name} field={field} control={methods.control} {...commonProps} />;
    case "radio-group":
      return <RadioGroupField key={field.name} field={field} control={methods.control} {...commonProps} />;
    case "file":
      return <FileUploadField key={field.name} field={field} control={methods.control} {...commonProps} />;
    default:
      return null;
  }
}

function formatReviewValue(value: unknown) {
  if (Array.isArray(value)) {
    if (value.length === 0) return "Not provided";
    if (value[0] instanceof File) return value.map((file) => file.name).join(", ");
    return value.join(", ");
  }

  if (!value) return "Not provided";
  return String(value);
}

export default function ServiceIntakeFlow({ selectedService }: { selectedService: ServiceKey }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [submittedService, setSubmittedService] = useState<ServiceKey | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [isFinalSuccess, setIsFinalSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);
  const methods = useForm<FormValues>({ defaultValues, mode: "onChange" });

  const service = serviceDefinitions[selectedService];
  const totalSteps = service.steps.length + 1;
  const isReviewStep = currentStep === service.steps.length;
  const progress = showPayment ? 100 : ((currentStep + 1) / totalSteps) * 100;
  const stepFields = service.steps[currentStep]?.fields ?? [];
  const values = methods.watch();

  const reviewItems = useMemo(
    () =>
      service.steps.flatMap((step) =>
        step.fields.map((field) => ({
          label: field.label,
          value: values[field.name],
        })),
      ),
    [service.steps, values],
  );

  const isCurrentStepReady = useMemo(() => {
    if (isReviewStep) return true;

    return stepFields
      .filter((field) => field.required)
      .every((field) => {
        const value = values[field.name];
        if (Array.isArray(value)) return value.length > 0;
        return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
      });
  }, [isReviewStep, stepFields, values]);

  useEffect(() => {
    methods.reset(defaultValues);
    setCurrentStep(0);
    setSubmittedService(null);
    setShowPayment(false);
    setShowBooking(false);
    setIsFinalSuccess(false);
  }, [methods, selectedService]);

  const onNext = async () => {
    const valid = await methods.trigger(stepFields.map((field) => field.name));
    if (valid) setCurrentStep((step) => Math.min(step + 1, totalSteps - 1));
  };

  const onSubmit = methods.handleSubmit(() => {
    setShowBooking(true);
  });

  const onBookingSuccess = async () => {
    // Submit intake details to our server as soon as the event is scheduled
    try {
      await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: service.title,
          customer: {
            name: values.fullName,
            email: values.email,
            phone: values.phone,
          },
          intakeDetails: getCalendlyNotes(),
          status: "scheduled",
        }),
      });
    } catch (error) {
      console.error("Failed to submit intake backup:", error);
    }

    setShowBooking(false);
    setShowPayment(true);
  };

  const onPaymentSuccess = async () => {
    // Update intake status to paid
    try {
      await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: service.title,
          customer: {
            name: values.fullName,
            email: values.email,
            phone: values.phone,
          },
          intakeDetails: getCalendlyNotes(),
          status: "paid",
        }),
      });
    } catch (error) {
      console.error("Failed to update intake status:", error);
    }

    setShowPayment(false);
    setIsFinalSuccess(true);
    setSubmittedService(selectedService);
  };

  const getCalendlyNotes = () => {
    const lines: string[] = [];
    lines.push(`Service: ${service.title}`);
    lines.push("");

    service.steps.forEach((step) => {
      lines.push(`--- ${step.title} ---`);
      step.fields.forEach((field) => {
        const val = values[field.name];
        if (val) {
          let displayVal = "";
          if (Array.isArray(val)) {
            if (val.length > 0 && (val[0] as unknown) instanceof File) {
              displayVal = (val as unknown as File[]).map((f: File) => f.name).join(", ");
            } else {
              displayVal = val.join(", ");
            }
          } else if ((val as unknown) instanceof FileList) {
            displayVal = Array.from(val as unknown as FileList).map(f => f.name).join(", ");
          } else {
            displayVal = String(val);
          }
          lines.push(`${field.label}: ${displayVal}`);
        }
      });
      lines.push("");
    });

    return lines.join("\n");
  };

  return (
    <div
      ref={formRef}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/75 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.75)] backdrop-blur-xl"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent}`} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      <div className="relative z-10 p-5 sm:p-8 lg:p-10">
        {isFinalSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-[var(--font-playfair)] text-4xl text-white">Session Booked!</h3>
            <p className="mt-4 max-w-md text-lg text-slate-300">
              Thank you for choosing VedAstraa. Your {service.shortTitle.toLowerCase()} session has been successfully
              booked and your intake details have been shared with our expert.
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-widest text-amber-200">What happens next?</p>
              <ul className="mt-4 space-y-3 text-left text-slate-300">
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400">
                    1
                  </span>
                  Check your email for the Google Meet link.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400">
                    2
                  </span>
                  Add the event to your calendar.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400">
                    3
                  </span>
                  Our expert will see you at the scheduled time.
                </li>
              </ul>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-10 rounded-full border border-white/10 px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white/10"
            >
              Back to Home
            </button>
          </div>
        ) : showBooking ? (
          <CalendlyBooking
            url={service.calendlyUrl}
            onBack={() => setShowBooking(false)}
            prefill={{
              name: values.fullName,
              email: values.email,
              phone: values.phone,
              notes: getCalendlyNotes(),
            }}
            onEventScheduled={onBookingSuccess}
          />
        ) : !showPayment ? (
          <>
            <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm uppercase tracking-[0.22em] text-slate-300">
                  <span className="text-amber-200">{service.icon}</span>
                  Intake Form
                </div>
                <h3 className="font-[var(--font-playfair)] text-3xl text-white sm:text-4xl">{service.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">{service.description}</p>
              </div>

              <div className="grid gap-3 sm:min-w-72">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-200">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  {service.microcopy}
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-200/15 bg-emerald-200/10 px-4 py-3 text-base text-emerald-50">
                  <Lock className="h-4 w-4 text-emerald-200" />
                  {service.confidentialityNote}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-slate-400">
                <span>{isReviewStep ? reviewStepTitle : `Step ${currentStep + 1}`}</span>
                <span>{currentStep + 1} / {totalSteps}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-200 via-rose-200 to-violet-200 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[...service.steps.map((step) => step.title), reviewStepTitle].map((label, index) => (
                  <div
                    key={label}
                    className={`rounded-2xl border px-4 py-3 text-base transition ${
                      index === currentStep
                        ? "border-amber-200/40 bg-amber-100/10 text-white"
                        : index < currentStep
                          ? "border-emerald-200/25 bg-emerald-200/10 text-emerald-50"
                          : "border-white/10 bg-white/5 text-slate-400"
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={onSubmit} className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div key={`${selectedService}-${currentStep}`} {...stepTransition}>
                  {!isReviewStep ? (
                    <div className="grid gap-6">
                      <div>
                        <h4 className="font-[var(--font-playfair)] text-2xl text-white">
                          {service.steps[currentStep].title}
                        </h4>
                        <p className="mt-2 text-base leading-7 text-slate-300">
                          {service.steps[currentStep].description}
                        </p>
                      </div>

                      <div className="grid gap-5 lg:grid-cols-2">
                        {stepFields.map((field) => (
                          <div
                            key={field.name}
                            className={field.type === "textarea" || field.type === "checkbox-group" ? "lg:col-span-2" : ""}
                          >
                            {renderField(field, methods)}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-[var(--font-playfair)] text-2xl text-white">Review Your Details</h4>
                        <p className="mt-2 text-base leading-7 text-slate-300">
                          Give everything a final look before continuing to payment.
                        </p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        {reviewItems.map((item) => (
                          <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                            <p className="mt-2 text-base leading-7 text-slate-100">{formatReviewValue(item.value)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-base text-slate-400">Required fields are validated before you move ahead.</div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
                    disabled={currentStep === 0}
                    className="rounded-full border border-white/10 px-5 py-3 text-base font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Back
                  </button>

                  {!isReviewStep ? (
                    <button
                      type="button"
                      onClick={onNext}
                      disabled={!isCurrentStepReady}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-violet-300 px-6 py-3 text-base font-bold text-slate-900 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(252,211,77,0.3)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-violet-300 px-6 py-3 text-base font-bold text-slate-900 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(252,211,77,0.3)]"
                    >
                      Continue to Payment
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <PaymentCheckout
              service={service}
              onBack={() => {
                setShowPayment(false);
                setShowBooking(true);
              }}
              onPaymentSuccess={onPaymentSuccess}
              prefill={{
                name: values.fullName,
                email: values.email,
                phone: values.phone,
                notes: getCalendlyNotes(),
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
