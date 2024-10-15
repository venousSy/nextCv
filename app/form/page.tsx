"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Form from "@/components/form";
export default function form() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8  lg:gap-8 lg:py-16 xl:gap-2">
        <Form />
      </div>
    </section>
  );
}
