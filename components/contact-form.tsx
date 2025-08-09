"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().nonempty("Subject is required"),
  message: z.string().nonempty("Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      toast.success("Message sent successfully");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message");
    }
  };
  return (
    <FormProvider {...form}>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 flex-1"
      >
        <div className="flex flex-col gap-2 text-sm lg:text-base">
          <label htmlFor="name" className=" font-light">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="bg-gray-500 text-white p-2 lg:p-4 rounded outline-green-500"
          />
          {errors.name && (
            <p className="text-red-500 ">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 text-sm lg:text-base">
          <label htmlFor="email" className="font-light">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="bg-gray-500 text-white p-2 lg:p-4 rounded outline-green-500"
          />
          {errors.email && (
            <p className="text-red-500 ">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 text-sm lg:text-base">
          <label htmlFor="subject" className=" font-light">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className="bg-gray-500 text-white p-2 lg:p-4 rounded outline-green-500"
          />
          {errors.subject && (
            <p className="text-red-500 ">{errors.subject.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 text-sm lg:text-base">
          <label htmlFor="message" className=" font-light">
            Message
          </label>
          <textarea
            placeholder="Message..."
            {...register("message")}
            className="bg-gray-500 text-white p-2 lg:p-4 rounded resize-none min-h-[200px] outline-green-500"
          />
          {errors.message && (
            <p className="text-red-500 ">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-400 text-black-100 py-2 px-4 rounded-full w-fit font-semibold text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
