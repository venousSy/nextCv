"use client";
import Link from "next/link";
import Image from "next/image";
export function Hero() {
  return (
    <section className=" bg-[url('/lightBg.jpg')] bg-cover bg-center bg-no-repeat text-gray-900 bg-blend-multiply dark:bg-[url('/darkBg.jpg')] dark:text-white ">
      <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl">
          We invest in the world’s potential
        </h1>
        <p className="mb-8 text-lg font-normal  sm:px-16 lg:px-48 lg:text-xl">
          Here at Flowbite you can Make your profecinal CV for free. <br /> what
          are you waiting for.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="ms-2 size-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-center text-base font-medium  hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-400 dark:border-white sm:ms-4 "
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
