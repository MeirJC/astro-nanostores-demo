import { atom } from 'nanostores';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreeTerms: boolean;
}

export const formState = atom<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agreeTerms: false,
});
