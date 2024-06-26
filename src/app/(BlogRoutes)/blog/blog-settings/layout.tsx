import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Blog Settings Page",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
