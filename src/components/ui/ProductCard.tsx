import { Shop } from "@/types";
import Image from "next/image";
import { FC, useState } from "react";
import { Button } from "./Button";
import { Icons } from "../Icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectShop } from "@/redux/features/shopSlice";
import { HandleAddToCart, HandleWishlist, cn } from "@/lib/utils";

interface ProductCardProps extends Shop.ProductType {}

const ProductCard: FC<ProductCardProps> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { cart, wishlist } = useSelector(selectShop);
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);

  return (
    <div className="relative  flex flex-col gap-2 bg-slate-50 rounded-xl overflow-hidden p-4 w-56 ">
      <Button
        variant="subtle"
        className={cn(
          "rounded-full z-[1] absolute top-2 right-2 flex justify-center w-fit h-fit p-2 group ",
          wishlist.some(
            (wishlistItem: Shop.AddToCartReq) =>
              wishlistItem.productId === props?.id
          )
            ? "hover:bg-red-200 bg-red-100"
            : "hover:bg-red-100"
        )}
        onClick={() => {
          HandleWishlist(wishlist, props?.id.toString(), dispatch);
        }}
      >
        <Icons.heart
          className={cn(
            "h-5 w-5",
            wishlist.some(
              (wishlistItem: Shop.AddToCartReq) =>
                wishlistItem.productId === props?.id
            )
              ? "fill-red-500 text-red-500"
              : "text-zinc-600 group-hover:text-red-300"
          )}
        />
      </Button>
      <Link href={`/product/${props.id}`} passHref className="cursor-pointer">
        <div className="bg-white p-2 rounded-xl overflow-hidden flex justify-center relative mb-2">
          <div className="w-36 sm:w-44 aspect-square relative bg-white">
            <Image src={props.image} fill alt={props.title} />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-between mt-2">
          <span className="truncate text-sm">{props.title}</span>
          <span className="text-[12px] font-semibold shrink-0">
            $ {props.price}
          </span>
        </div>
        <div className="line-clamp-1 text-[13px] text-zinc-500 mt-2">
          {props.description}
        </div>
      </Link>
      <Button
        variant="outline"
        className="mt-2"
        onClick={() => {
          setIsAddingToCart(true);
          setTimeout(() => {
            HandleAddToCart(cart, props?.id.toString(), dispatch, 1);
            setIsAddingToCart(false);
          }, 1000);
        }}
        isLoading={isAddingToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
