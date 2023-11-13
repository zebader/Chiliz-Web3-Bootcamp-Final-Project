import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <div className="w-full h-20 bg-slate-950 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/home">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/nft">
                  <p>NFT</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
