"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/caribe");
    }, 2000);
  }, []);

  return (
    <section className="w-full h-[100vh] flex gap-5 flex-col justify-center items-center bg-[#0F1B27] ">
      <div className="animate-pulse">
        <Image width={250} height={250} alt="" src="/images/colombia.png" />
      </div>
      <div className="animate-pulse">
        <Image
          width={200}
          height={200}
          alt=""
          src="/images/Logo sono sur.png"
        />
      </div>
    </section>
  );
}
