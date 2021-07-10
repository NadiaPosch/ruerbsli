import { FC } from "react";

export const Card: FC<{ className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm
    rounded-md border border-white border-opacity-20 shadow-lg text-white ${className}`}
  >
    {children}
  </div>
);
