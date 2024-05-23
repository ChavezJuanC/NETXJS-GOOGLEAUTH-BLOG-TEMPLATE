"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import ActionsMenu from "./ActionsMenu";
import Link from "next/link";

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const ImagePath = session?.user?.image;

  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  return (
    <>
      <nav className='flex justify-between items-center bg-black'>
        <Link href={"/blog"}>
          <div
            className='text-2xl m-3 text-slate-100 font-extrabold hover:text-white
        active:-translate-y-0.5 transition-transform'
          >
            BLOGIN
          </div>
        </Link>
        <div className='flex justify-center items-center'>
          <div className='hidden sm:inline-block text-slate-100 '>
            {userName}
          </div>
          <div>
            <img
              src={`${ImagePath}`}
              alt='avatar'
              className='rounded-full w-10 h-10 inline-block m-3 hover:cursor-pointer active:-translate-y-1 transition-transform'
              onClick={() => setActiveMenu(!activeMenu)}
            />
          </div>
        </div>
      </nav>
      <div
        className={activeMenu ? "fixed" : "hidden"}
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <ActionsMenu />
      </div>
    </>
  );
};

export default NavBar;
