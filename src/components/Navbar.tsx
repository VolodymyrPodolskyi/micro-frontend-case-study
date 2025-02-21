"use client";

import Link from "next/link";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShop,
  setShowCart,
  setShowWishlist,
} from "@/redux/features/shopSlice";
import MyCart from "./MyCart";
import Wishlist from "./Wishlist";
import { Icons } from "./Icons";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { showCart } = useSelector(selectShop);
  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 inset-x-0 h-fit  bg-slate-50 border- borde-zinc-300 z-[10] py-4">
      <nav className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        
        {/* search bar */}

        <div className="flex justify-around items-center gap-2 sm:gap-6 text-base font-[300]">
          <div
            className={cn(
              buttonVariants({ variant: "link" }),
              "group flex gap-4 items-center cursor-pointer hover:text-yellow-700 transition-all ease-linear duration-100 text-sm pointer-events-none p-0 sm:px-4 sm:py-2"
            )}
          >
            <div className="p-1 rounded-full group-hover:bg-yellow-300/50">
              <Icons.user className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-900 group-hover:text-yellow-700" />
            </div>
            <span className="hidden sm:block font-[300]">Account</span>
          </div>
          <div
            className={cn(
              buttonVariants({ variant: "link" }),
              "group flex gap-4 items-center cursor-pointer hover:text-red-700 transition-all ease-linear duration-100 text-sm p-0 sm:px-4 sm:py-2"
            )}
            onClick={() => dispatch(setShowWishlist())}
          >
            <div className="p-1 rounded-full group-hover:bg-red-300/50">
              <Icons.heart className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-900 group-hover:text-red-700" />
            </div>
            <span className="hidden sm:block font-[300]">Wish list</span>
          </div>
          <div
            className={cn(
              buttonVariants({ variant: "link" }),
              "group flex gap-4 items-center cursor-pointer hover:text-blue-700 transition-all ease-linear duration-100 text-sm p-0 sm:px-4 sm:py-2"
            )}
            onClick={() => dispatch(setShowCart())}
          >
            <div className="p-1 rounded-full group-hover:bg-blue-300/50">
              <Icons.cart className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-900 group-hover:text-blue-700" />
            </div>
            <span className="hidden sm:block font-[300]">My cart</span>
          </div>
        </div>
      </nav>
      <MyCart />
      <Wishlist />
    </div>
  );
};

export default Navbar;
