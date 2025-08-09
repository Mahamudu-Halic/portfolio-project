"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <section className="container h-[calc(100vh-100px)] flex items-center justify-center flex-col">
      <div>
        <Image
          src="/assets/images/404.png"
          alt="404"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      <button
        className="bg-[#CC3F02] hover:bg-[#CC3F02]/80 transition-all text-white px-6 py-2 rounded-md cursor-pointer"
        onClick={() => router.replace("/")}
      >
        Go Back
      </button>
    </section>
  );
};

export default NotFound;
