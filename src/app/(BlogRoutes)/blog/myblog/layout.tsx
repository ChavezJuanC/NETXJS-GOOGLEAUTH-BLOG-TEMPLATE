import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My blog",
  description: "Blog Peer User",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
