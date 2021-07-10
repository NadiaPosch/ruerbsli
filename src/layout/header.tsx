import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <>
      <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg p-4 border-b border-white border-opacity-20">
        <Link href="/">
          <a className="inline-block hover:opacity-80 transition-opacity"></a>
        </Link>
      </div>
    </>
  );
};
