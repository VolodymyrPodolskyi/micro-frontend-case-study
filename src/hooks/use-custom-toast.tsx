import { toast } from "./use-toast";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/Button";
import { useDispatch } from "react-redux";
import {
  closeCart,
  closeWishlist,
  setShowCart,
  setShowWishlist,
} from "@/redux/features/shopSlice";
import { AnyAction } from "@reduxjs/toolkit";

export const useCustomToast = (dispatch: React.Dispatch<AnyAction>) => {
  const addedToWishlistToast = () => {
    const { dismiss } = toast({
      title: "Item Added to Wishlist.",
      description: "Your item has been to wishlist!",
      variant: "default",
      action: (
        <Button
          onClick={() => {
            dispatch(closeCart());
            dispatch(setShowWishlist());
            dismiss();
          }}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "text-[12px] w-fit"
          )}
        >
          View Wishlist
        </Button>
      ),
    });
  };

  const removedFromWishlistToast = () => {
    const { dismiss } = toast({
      title: "Item removed from Wishlist.",
      description: "Your item has been removed from wishlist!",
      variant: "default",
      action: (
        <Button
          onClick={() => {
            dispatch(closeCart());
            dispatch(setShowWishlist());
            dismiss();
          }}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "text-[12px] w-fit"
          )}
        >
          View Wishlist
        </Button>
      ),
    });
  };

  const addedToCartToast = () => {
    const { dismiss } = toast({
      title: "Item Added to Cart.",
      description: "Your item has been to cart!",
      variant: "default",
      action: (
        <Button
          onClick={() => {
            dispatch(closeWishlist());
            dispatch(setShowCart());
            dismiss();
          }}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          View Cart
        </Button>
      ),
    });
  };

  const removedFromCartToast = () => {
    const { dismiss } = toast({
      title: "Item removed from Cart.",
      description: "Your item has been removed from cart!",
      variant: "default",
      action: (
        <Button
          onClick={() => {
            dispatch(closeWishlist());
            dispatch(setShowCart());
            dismiss();
          }}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "text-[12px] w-fit"
          )}
        >
          View Cart
        </Button>
      ),
    });
  };

  return {
    addedToWishlistToast,
    removedFromWishlistToast,
    addedToCartToast,
    removedFromCartToast,
  };
};
