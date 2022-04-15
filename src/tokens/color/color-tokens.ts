interface PrimaryBrandTokens {
  "$color-brand-primary-regular": string;
  "$color-brand-primary-darkest": string;
  "$color-brand-primary-dark": string;
  "$color-brand-primary-light": string;
  "$color-brand-primary-lightest": string;
  "$color-brand-primary-gradient": string[];
}

interface SecondaryBrandTokens {
  "$color-brand-secondary-regular": string;
  "$color-brand-secondary-darkest": string;
  "$color-brand-secondary-dark": string;
  "$color-brand-secondary-light": string;
  "$color-brand-secondary-lightest": string;
  "$color-brand-secondary-gradient": string[];
}

interface NeutralTokens {
  "$color-neutral-darkest": string;
  "$color-neutral-darker": string;
  "$color-neutral-dark": string;
  "$color-neutral-medium": string;
  "$color-neutral-light": string;
  "$color-neutral-lighter": string;
  "$color-neutral-lightest": string;
}

interface ErrorTokens {
  "$color-feedback-error-darkest": string;
  "$color-feedback-error-dark": string;
  "$color-feedback-error-medium": string;
  "$color-feedback-error-light": string;
  "$color-feedback-error-lightest": string;
}

interface SuccessTokens {
  "$color-feedback-success-darkest": string;
  "$color-feedback-success-dark": string;
  "$color-feedback-success-medium": string;
  "$color-feedback-success-light": string;
  "$color-feedback-success-lightest": string;
}

interface WarningTokens {
  "$color-feedback-attention-darkest": string;
  "$color-feedback-attention-dark": string;
  "$color-feedback-attention-medium": string;
  "$color-feedback-attention-light": string;
  "$color-feedback-attention-lightest": string;
}

interface InfoTokens {
  "$color-feedback-info-darkest": string;
  "$color-feedback-info-dark": string;
  "$color-feedback-info-medium": string;
  "$color-feedback-info-light": string;
  "$color-feedback-info-lightest": string;
}

export interface ColorTokens {
  palette: {
    primary: PrimaryBrandTokens;
    secondary: SecondaryBrandTokens;
    neutral: NeutralTokens;
    error: ErrorTokens;
    success: SuccessTokens;
    warning: WarningTokens;
    info: InfoTokens;
  };
}
