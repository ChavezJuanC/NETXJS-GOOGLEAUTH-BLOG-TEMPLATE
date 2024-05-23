import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login in",
  description: "Log in page for blogin.com",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
