import { useStore } from "@nanostores/react";
import { $formState } from "@stores/handling-state/sharedFormStore";

export function ReactFormShared() {
  const form = useStore($formState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    $formState.setKey(name as keyof typeof form, type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("React Form Submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-react-100 rounded-lg p-4 text-black shadow-md">
      <h2 className="text-react-800 mb-4 text-center text-2xl font-bold">
        React Form (Shared State)
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="react-firstName" className="text-react-700 block text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="react-firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="border-react-300 focus:border-react-500 focus:ring-react-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
          />
        </div>
        <div>
          <label htmlFor="react-lastName" className="text-react-700 block text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="react-lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="border-react-300 focus:border-react-500 focus:ring-react-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
          />
        </div>
        <div>
          <label htmlFor="react-email" className="text-react-700 block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="react-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border-react-300 focus:border-react-500 focus:ring-react-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
          />
        </div>
        <div>
          <label htmlFor="react-password" className="text-react-700 block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="react-password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border-react-300 focus:border-react-500 focus:ring-react-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="react-agreeTerms"
            name="agreeTerms"
            checked={form.agreeTerms}
            onChange={handleChange}
            className="border-react-300 text-react-600 focus:ring-react-500 h-4 w-4 rounded"
          />
          <label htmlFor="react-agreeTerms" className="text-react-700 ml-2 block text-sm">
            I agree to the terms and conditions
          </label>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="bg-react-500 hover:bg-react-600 w-full rounded px-4 py-2 text-white transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
