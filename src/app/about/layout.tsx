import React from "react";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "About",
  description: "About section for blogin.com",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
