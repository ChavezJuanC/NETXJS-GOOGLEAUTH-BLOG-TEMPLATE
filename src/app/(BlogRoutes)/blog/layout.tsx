import React from "react";
import NavBar from "@/components/BlogComponents/Navigation/NavBar";
import { Metadata } from "next";

export const metadata : Metadata = {
  title : "Blog Home",
  description : "Main Home Page"
}
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default layout;
