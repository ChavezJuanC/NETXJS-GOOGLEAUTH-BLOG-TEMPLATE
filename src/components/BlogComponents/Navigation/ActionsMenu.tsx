import Link from "next/link";
import { signOut } from "next-auth/react";

const ActionsMenu = () => {
  return (
    <div className='w-32 bg-slate-200 text-black text-center right-0 fixed rounded-bl-lg'>
      <ul>
        <li
          className='p-2 text-md font-light hover:cursor-pointer active:-translate-y-1
        transition-transform duration-100'
        >
          <Link href={"/blog/myblog"}>My Blog</Link>
        </li>
        <li
          className='p-2 text-md font-light hover:cursor-pointer active:-translate-y-1
        transition-transform duration-100'
        >
          <Link href={"/blog/blog-settings"}>Settings</Link>
        </li>
        <li
          className='p-2 text-md font-light hover:cursor-pointer active:-translate-y-1
        transition-transform duration-100'
        >
          <Link href={"/about"}>About</Link>
        </li>
        <li
          className='p-2 text-md font-light hover:cursor-pointer active:-translate-y-1
        transition-transform duration-100 text-red-600'
        >
          <div onClick={() => signOut({callbackUrl: "/login"})}>Log Out</div>
        </li>
      </ul>
    </div>
  );
};

export default ActionsMenu;
