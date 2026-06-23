"use client";

import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form";
import { AlertCircle, Check, ChevronDown, FileText } from "lucide-react";
import { FieldConfig, FormValues, Option } from "./types";

type SharedProps = {
  label: string;
  helperText?: string;
  error?: string;
  required?: boolean;
};

function FieldShell({
  label,
  helperText,
  error,
  required,
  children,
}: React.PropsWithChildren<SharedProps>) {
  return (
    <label className="block space-y-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-base font-medium tracking-[0.02em] text-slate-100">
          {label}
          {required ? <span className="ml-1 text-purple-300">*</span> : null}
        </span>
        {helperText ? <span className="text-sm text-slate-400">{helperText}</span> : null}
      </div>
      {children}
      {error ? (
        <span className="flex items-center gap-2 text-sm text-rose-300">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </span>
      ) : null}
    </label>
  );
}

const baseFieldClassName =
  "w-full rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-base text-slate-50 placeholder:text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition duration-200 focus:border-purple-300/50 focus:bg-slate-900/80 focus:ring-2 focus:ring-purple-300/20 backdrop-blur-sm";

export function InputField({
  field,
  register,
  errors,
}: {
  field: Extract<FieldConfig, { type: "text" | "date" | "time" }>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}) {
  const error = errors[field.name as keyof FormValues]?.message as string | undefined;

  return (
    <FieldShell label={field.label} helperText={field.helperText} error={error} required={field.required}>
      <input
        type={field.type}
        placeholder={field.placeholder}
        className={baseFieldClassName}
        {...register(field.name, {
          required: field.required ? `${field.label} is required.` : false,
        })}
      />
    </FieldShell>
  );
}

export function TextareaField({
  field,
  register,
  errors,
}: {
  field: Extract<FieldConfig, { type: "textarea" }>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}) {
  const error = errors[field.name as keyof FormValues]?.message as string | undefined;

  return (
    <FieldShell label={field.label} helperText={field.helperText} error={error} required={field.required}>
      <textarea
        rows={field.rows ?? 4}
        placeholder={field.placeholder}
        className={`${baseFieldClassName} resize-none`}
        {...register(field.name, {
          required: field.required ? `${field.label} is required.` : false,
        })}
      />
    </FieldShell>
  );
}

export function SelectField({
  field,
  register,
  errors,
}: {
  field: Extract<FieldConfig, { type: "select" }>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}) {
  const error = errors[field.name as keyof FormValues]?.message as string | undefined;

  return (
    <FieldShell label={field.label} helperText={field.helperText} error={error} required={field.required}>
      <div className="relative">
        <select
          className={`${baseFieldClassName} appearance-none pr-11 cursor-pointer [&>option]:bg-slate-900 [&>option]:text-white`}
          defaultValue=""
          {...register(field.name, {
            required: field.required ? `${field.label} is required.` : false,
          })}
        >
          <option value="" disabled className="bg-slate-900 text-slate-400">
            {field.placeholder ?? "Select an option"}
          </option>
          {field.options.map((option) => (
            <option key={option.value} value={option.value} className="bg-slate-900 text-white">
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </FieldShell>
  );
}

function ChoiceChip({ option, checked }: { option: Option; checked: boolean }) {
  return (
    <span
      className={`inline-flex min-h-12 items-center rounded-2xl border px-4 py-3 text-base transition ${
        checked
          ? "border-purple-300/60 bg-purple-300/15 text-purple-50 shadow-[0_0_24px_rgba(168,85,247,0.18)]"
          : "border-white/10 bg-slate-900/50 text-slate-200 hover:border-white/20 hover:bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      {option.label}
    </span>
  );
}

export function CheckboxGroupField({
  field,
  control,
  errors,
}: {
  field: Extract<FieldConfig, { type: "checkbox-group" }>;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}) {
  const error = errors[field.name as keyof FormValues]?.message as string | undefined;

  return (
    <FieldShell label={field.label} helperText={field.helperText} error={error} required={field.required}>
      <Controller
        name={field.name}
        control={control}
        rules={{
          validate: (value) =>
            !field.required || (Array.isArray(value) && value.length > 0)
              ? true
              : `Select at least one option for ${field.label.toLowerCase()}.`,
        }}
        render={({ field: controllerField }) => {
          const currentValues = (controllerField.value as string[] | undefined) ?? [];

          return (
            <div className="grid gap-3 sm:grid-cols-2">
              {field.options.map((option) => {
                const checked = currentValues.includes(option.value);

                return (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => {
                        const nextValues = checked
                          ? currentValues.filter((value) => value !== option.value)
                          : [...currentValues, option.value];

                        controllerField.onChange(nextValues);
                      }}
                    />
                    <span className="flex items-center justify-between gap-3">
                      <ChoiceChip option={option} checked={checked} />
                      {checked ? <Check className="h-4 w-4 text-purple-200" /> : null}
                    </span>
                  </label>
                );
              })}
            </div>
          );
        }}
      />
    </FieldShell>
  );
}

export function RadioGroupField({
  field,
  control,
  errors,
}: {
  field: Extract<FieldConfig, { type: "radio-group" }>;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}) {
  const error = errors[field.name as keyof FormValues]?.message as string | undefined;

  return (
    <FieldShell label={field.label} helperText={field.helperText} error={error} required={field.required}>
      <Controller
        name={field.name}
        control={control}
        rules={{
          required: field.required ? `${field.label} is required.` : false,
        }}
        render={({ field: controllerField }) => (
          <div className="grid gap-3 sm:grid-cols-2">
            {field.options.map((option) => {
              const checked = controllerField.value === option.value;

              return (
                <label key={option.value} className="cursor-pointer">
                  <input
                    type="radio"
                    className="sr-only"
                    checked={checked}
                    onChange={() => controllerField.onChange(option.value)}
                  />
                  <ChoiceChip option={option} checked={checked} />
                </label>
              );
            })}
          </div>
        )}
      />
    </FieldShell>
  );
}

export function FileUploadField({
  field,
  control,
  errors,
}: {
  field: Extract<FieldConfig, { type: "file" }>;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}) {
  const error = errors[field.name as keyof FormValues]?.message as string | undefined;

  return (
    <FieldShell label={field.label} helperText={field.helperText} error={error} required={field.required}>
      <Controller
        name={field.name}
        control={control}
        rules={{
          validate: (value) =>
            !field.required || ((value as unknown as File[] | undefined)?.length ?? 0) > 0
              ? true
              : `${field.label} is required.`,
        }}
        render={({ field: controllerField }) => {
          const files = (controllerField.value as unknown as File[] | undefined) ?? [];

          return (
            <div className="space-y-3">
              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-white/15 bg-slate-900/50 px-4 py-4 text-sm text-slate-200 transition hover:border-amber-200/45 hover:bg-slate-900/80 backdrop-blur-sm">
                <span className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-amber-200" />
                  Upload image or PDF
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  Browse
                </span>
                <input
                  type="file"
                  accept={field.accept}
                  multiple
                  className="sr-only"
                  onChange={(event) => controllerField.onChange(Array.from(event.target.files ?? []))}
                />
              </label>

              {files.length > 0 ? (
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-slate-300 backdrop-blur-sm">
                  {files.map((file) => file.name).join(", ")}
                </div>
              ) : null}
            </div>
          );
        }}
      />
    </FieldShell>
  );
}

