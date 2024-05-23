"use client";
import React, { useEffect } from "react";
import LoginScreen from "@/components/AuthenticationComponents/LoginScreen";
import Link from "next/link";
import Footer from "@/components/AuthenticationComponents/Footer";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.replace("/blog");
    }
  }, [session, router]);

  return (
    <div>
      <div className='m-6 text-right'>
        <Link
          href={"/about"}
          className='hidden md:inline border-2 border-slate-300 shadow-lg p-8 py-2 text-lg font-semibold rounded-md hover:border-slate-400
          active:-translate-y-1 transition-transform duration-150 hover:shadow-xl'
        >
          About
        </Link>
      </div>
      <LoginScreen />
      <Footer />
    </div>
  );
};

export default LoginPage;
