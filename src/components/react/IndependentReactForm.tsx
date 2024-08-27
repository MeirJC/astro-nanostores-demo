import React from 'react';
import { useStore } from '@nanostores/react';
import { reactFormState } from '@stores/isoFormStore';

export function IndependentReactForm() {
  const $form = useStore(reactFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    reactFormState.set({
      ...$form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('React Form Submitted:', $form);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-react-100 p-4 text-black shadow-md">
      <h2 className="mb-4 text-center text-2xl font-bold text-react-800">Independent React Form</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="react-iso-firstName" className="block text-sm font-medium text-react-700">
            First Name
          </label>
          <input
            type="text"
            id="react-iso-firstName"
            name="firstName"
            value={$form.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-react-300 shadow-sm focus:border-react-500 focus:ring focus:ring-react-200"
          />
        </div>
        <div>
          <label htmlFor="react-iso-lastName" className="block text-sm font-medium text-react-700">
            Last Name
          </label>
          <input
            type="text"
            id="react-iso-lastName"
            name="lastName"
            value={$form.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-react-300 shadow-sm focus:border-react-500 focus:ring focus:ring-react-200"
          />
        </div>
        <div>
          <label htmlFor="react-iso-email" className="block text-sm font-medium text-react-700">
            Email
          </label>
          <input
            type="email"
            id="react-iso-email"
            name="email"
            value={$form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-react-300 shadow-sm focus:border-react-500 focus:ring focus:ring-react-200"
          />
        </div>
        <div>
          <label htmlFor="react-iso-password" className="block text-sm font-medium text-react-700">
            Password
          </label>
          <input
            type="password"
            id="react-iso-password"
            name="password"
            value={$form.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-react-300 shadow-sm focus:border-react-500 focus:ring focus:ring-react-200"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="react-iso-agreeTerms"
            name="agreeTerms"
            checked={$form.agreeTerms}
            onChange={handleChange}
            className="h-4 w-4 rounded border-react-300 text-react-600 focus:ring-react-500"
          />
          <label htmlFor="react-iso-agreeTerms" className="ml-2 block text-sm text-react-700">
            I agree to the terms and conditions
          </label>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full rounded bg-react-500 px-4 py-2 text-white transition-colors hover:bg-react-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
