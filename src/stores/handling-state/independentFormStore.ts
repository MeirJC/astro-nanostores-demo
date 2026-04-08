import { map } from "nanostores";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreeTerms: boolean;
}

const defaultForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  agreeTerms: false,
};

export const $reactFormState = map<FormData>({ ...defaultForm });
export const $svelteFormState = map<FormData>({ ...defaultForm });
export const $astroFormState = map<FormData>({ ...defaultForm });
export const $vueFormState = map<FormData>({ ...defaultForm });
