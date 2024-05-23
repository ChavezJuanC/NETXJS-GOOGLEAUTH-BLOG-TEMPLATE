import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const LoginScreen: React.FC = () => {
  return (
    <div
      className='border-2 rounded-xl w-80 mx-auto mt-16 xl:mt-20 bg-black shadow-xl
      shadow-black'
    >
      <Image
        width={150}
        height={150}
        src={"/logo.png"}
        alt='Logo'
        className='mx-auto py-16'
      />
      <div className='text-slate-100 text-center font-sans font-bold mb-6 mt-10 text-base'>
        <p>Hey there, </p>
        <p>Sign in to start bloging!</p>
      </div>
      <div
        className='text-slate-100 text-center font-sans font-semibold mt-16 mb-24 text-sm
        items-center justify-center border-2 py-1 w-44 rounded m-auto shadow-md shadow-white
        hover:cursor-pointer active:-translate-y-0.5 transition-transform duration-150'
        onClick={() => signIn()}
      >
        <FcGoogle className='inline-block text-2xl' /> Sign In With Google
      </div>
    </div>
  );
};

export default LoginScreen;
