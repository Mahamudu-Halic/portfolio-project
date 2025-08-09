import { Github, Linkedin, Whatsapp } from "@/components/icons";
import { email, githubUrl, linkedinUrl, whatsappUrl } from "@/constants";
import Link from "next/link";
import ContactForm from "./contact-form";
import DownloadResumeButton from "./download-resume-button";

const Footer = () => {
  return (
    <section className="border-t border-gray-500 py-10" id="contact">
      <footer className="flex lg:flex-row flex-col gap-6 lg:gap-4 justify-between container">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-bebas-neue">
            Let&apos;s connect
          </h2>
          <p className="text-gray-400 text-sm lg:text-base">
            Say hello at{" "}
            <Link
              className="text-white border-b border-green-400"
              aria-label="Send email"
              href={`mailto:${email}`}
            >
              {email}
            </Link>
          </p>
          <p className="text-gray-400 text-sm lg:text-base">
            For more info, here&apos;s my{" "}
            <DownloadResumeButton
              className="text-white border-b border-green-400"
              text="resume"
            />
          </p>

          <div className="flex gap-4 items-center">
            <Link href={linkedinUrl} target="_blank" aria-label="Linkedin">
              <Linkedin />
            </Link>
            <Link href={githubUrl} target="_blank" aria-label="Github">
              <Github />
            </Link>
            <Link href={whatsappUrl} target="_blank" aria-label="Whatsapp">
              <Whatsapp />
            </Link>
          </div>
          <p className="text-gray-400 mt-auto hidden lg:block text-sm lg:text-base">
            &copy; 2025 Halic Mahamudu. All rights reserved.
          </p>
        </div>

        <ContactForm />
        <p className="text-gray-400 mt-auto lg:hidden text-sm lg:text-base">
          © 2025 Halic Mahamudu. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Footer;
