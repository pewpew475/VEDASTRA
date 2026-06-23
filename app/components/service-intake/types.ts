export type ServiceKey =
  | "tarot"
  | "vastu"
  | "numerology"
  | "astrology"
  | "healing";

export type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  question: string;
  focusArea: string;
  currentFeeling: string;
  propertyType: string;
  layoutLink: string;
  facingDirection: string;
  mainIssues: string[];
  problemDescription: string;
  dateOfBirth: string;
  nickname: string;
  exactBirthTime: string;
  birthPlace: string;
  mainConcern: string;
  currentIssue: string;
  issueTypes: string[];
  sessionType: string;
  timeSlot: string;
};

export type Option = {
  label: string;
  value: string;
};

type BaseField = {
  name: keyof FormValues;
  label: string;
  helperText?: string;
  required?: boolean;
};

export type FieldConfig =
  | (BaseField & {
      type: "text" | "date" | "time";
      placeholder?: string;
    })
  | (BaseField & {
      type: "textarea";
      placeholder?: string;
      rows?: number;
    })
  | (BaseField & {
      type: "select";
      placeholder?: string;
      options: Option[];
    })
  | (BaseField & {
      type: "checkbox-group";
      options: Option[];
    })
  | (BaseField & {
      type: "radio-group";
      options: Option[];
    })
  | (BaseField & {
      type: "file";
      accept?: string;
    });

export type ServiceDefinition = {
  key: ServiceKey;
  title: string;
  shortTitle: string;
  icon: string;
  accent: string;
  description: string;
  microcopy: string;
  confidentialityNote: string;
  price: number;
  currency: string;
  calendlyUrl: string;
  steps: {
    title: string;
    description: string;
    fields: FieldConfig[];
  }[];
};
