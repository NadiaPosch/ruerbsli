import React, { FC } from "react";

export const Page: FC = ({ children }) => (
  <div
    className="flex flex-col gap-8 md:gap-12 min-h-screen pb-12"
    style={{ backgroundImage: `url("/images/chalkboard.jpg")` }}
  >
    <main className="flex flex-col justify-center max-w-lg mx-auto px-8">
      {children}
    </main>
  </div>
);
