import { atom } from "nanostores";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreeTerms: boolean;
}

const createFormStore = () => {
  const store = atom<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  return store;
};

export const reactFormState = createFormStore();
export const svelteFormState = createFormStore();
export const astroFormState = createFormStore();
export const vueFormState = createFormStore();
