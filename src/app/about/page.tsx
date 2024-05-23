import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <Link href={"/"}>
        <button
          className='border-2 border-slate-300 text-black rounded shadow-lg font-semibold p-8 py-2 text-lg m-3
        hover:cursor-pointer active:-translate-y-1 transition-transform duration-150 hover:shadow-xl
         hover:border-slate-400'
        >
          Back Home
        </button>
      </Link>

      <h1 className='text-2xl md:text-4xl font-bold text-black text-center mt-14 mb-10'>
        About Site
      </h1>
      <p className='w-9/12 text-center mx-auto'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quo
        et eaque exercitationem eum, fugiat recusandae nemo deleniti facere
        quasi repellendus cum, facilis illo inventore eos aperiam debitis animi!
        Tempora! fugiat recusandae nemo deleniti facere quasi repellendus cum,
        facilis illo inventore eos aperiam debitis animi! Tempora! fugiat
        recusandae nemo deleniti facere quasi repellendus cum, facilis illo
        inventore eos aperiam debitis animi! Tempora!
      </p>
    </div>
  );
};

export default AboutPage;
