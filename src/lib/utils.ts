import { toast } from "@/hooks/use-toast";
import { setCart, setWishlist } from "@/redux/features/shopSlice";
import { Shop } from "@/types";
import { AnyAction } from "@reduxjs/toolkit";
import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/Button";
import { useCustomToast } from "@/hooks/use-custom-toast";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateToString(date: Date) {
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
  const day = String(formattedDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function HandleAddToCart(
  cart: Shop.AddToCartReq[],
  id: string,
  dispatch: React.Dispatch<AnyAction>,
  quantity: number = 1
) {
  const { addedToCartToast } = useCustomToast(dispatch);
  // Check if the product already exists in the cart
  const existingProductIndex = cart?.findIndex(
    (item: Shop.AddToCartReq) => item.productId === parseInt(id)
  );

  if (existingProductIndex !== -1) {
    const updatedCart = cart?.map((item: Shop.AddToCartReq, index: number) => {
      if (index === existingProductIndex) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    dispatch(setCart(updatedCart));
  } else {
    const newCartItem: Shop.AddToCartReq = {
      productId: parseInt(id),
      quantity: quantity,
    };
    dispatch(setCart([...cart, newCartItem]));
  }
  addedToCartToast();
}

export function HandleWishlist(
  wishlist: Shop.AddToCartReq[],
  id: string,
  dispatch: React.Dispatch<AnyAction>
) {
  const { addedToWishlistToast, removedFromWishlistToast } =
    useCustomToast(dispatch);
  // Check if the product already exists in the cart
  const existingProductIndex = wishlist?.findIndex(
    (item: Shop.AddToCartReq) => item.productId === parseInt(id)
  );

  if (existingProductIndex !== -1) {
    // remove product if already exists
    const updatedWishlist = wishlist?.filter(
      (item: Shop.AddToCartReq) => item.productId !== parseInt(id)
    );
    dispatch(setWishlist(updatedWishlist));

    removedFromWishlistToast();
  } else {
    const newWishlistItem: Shop.AddToCartReq = {
      productId: parseInt(id),
      quantity: 1,
    };
    dispatch(setWishlist([...wishlist, newWishlistItem]));
    addedToWishlistToast();
  }
}
