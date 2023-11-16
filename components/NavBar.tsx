import React from "react";
import Link from "next/link";
import { ConnectWallet } from '@/components/ConnectWallet';
import Image from 'next/image'
import logo from '@/assets/images/logo.gif'

export const NavBar = () => {
  return (
    <>
      <div className="w-full h-20 bg-slate-950 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="flex gap-x-6 text-white items-center">
              <li>
                <Link href="/home">
                <Image
                    src={logo}
                    width={60}
                    height={60}
                    alt="Picture of the author"
                />
                </Link>
              </li>
              <li>
                <Link href="/nft">
                  <p>NFT</p>
                </Link>
              </li>
              <li>
                <Link href="/dao">
                  <p>DAO</p>
                </Link>
              </li>
            </ul>
            <ConnectWallet/>
          </div>
        </div>
      </div>
    </>
  );
};
