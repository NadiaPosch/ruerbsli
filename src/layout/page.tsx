import React, { FC } from "react";
import { Header } from "./header";

export const Page: FC = ({ children }) => (
  <div className="flex flex-col gap-12 min-h-screen bg-gradient-to-br from-blue-900 to-blue-700">
    <Header />
    <main className="flex justify-center">{children}</main>
  </div>
);
