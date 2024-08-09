import React from 'react';
import { useStore } from '@nanostores/react';
import { formState } from '@stores/formStore';

export function ReactForm() {
  const $form = useStore(formState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    formState.set({
      ...$form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <form className="space-y-4 rounded-lg bg-blue-100 p-6 text-slate-800 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-blue-800">React Form (Shared State)</h2>
      <div>
        <label htmlFor="react-firstName" className="block text-sm font-medium text-blue-700">
          First Name
        </label>
        <input
          type="text"
          id="react-firstName"
          name="firstName"
          value={$form.firstName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label htmlFor="react-lastName" className="block text-sm font-medium text-blue-700">
          Last Name
        </label>
        <input
          type="text"
          id="react-lastName"
          name="lastName"
          value={$form.lastName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label htmlFor="react-email" className="block text-sm font-medium text-blue-700">
          Email
        </label>
        <input
          type="email"
          id="react-email"
          name="email"
          value={$form.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label htmlFor="react-password" className="block text-sm font-medium text-blue-700">
          Password
        </label>
        <input
          type="password"
          id="react-password"
          name="password"
          value={$form.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="react-agreeTerms"
          name="agreeTerms"
          checked={$form.agreeTerms}
          onChange={handleChange}
          className="h-4 w-4 rounded border-blue-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="react-agreeTerms" className="ml-2 block text-sm text-blue-700">
          I agree to the terms and conditions
        </label>
      </div>
    </form>
  );
}
