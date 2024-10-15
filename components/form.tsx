"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Form() {
  return (
    <form>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-900 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-900 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Flowbite"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-900 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Website URL
          </label>
          <input
            type="url"
            id="website"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-900 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="visitors"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Unique visitors (per month)
          </label>
          <input
            type="number"
            id="visitors"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-900 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="test"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-900 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-900 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirm_password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="confirm_password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-900 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>
      <div className="mb-6 flex items-start"></div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        next
      </button>
    </form>
  );
}
