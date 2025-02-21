"use client";

import {
  useListProductByIDQuery,
  useListProductsQuery,
} from "@/redux/api/shopAPISlice";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Icons } from "./Icons";
import { Button } from "./ui/Button";
import Recommendations from "./Recommendations";
import { useDispatch, useSelector } from "react-redux";
import { selectShop } from "@/redux/features/shopSlice";
import { Shop } from "@/types";
import { HandleAddToCart, HandleWishlist, cn } from "@/lib/utils";
import ProductDetailSkeleton from "./ProductDetailSkeleton";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: prods } = useListProductsQuery();
  const { data, isLoading } = useListProductByIDQuery({ id: id as string });

  const [quantity, setQuantity] = useState<number>(1);
  const { cart, wishlist } = useSelector(selectShop);
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);

  const roundedRating = Math.round(data?.rating?.rate);

  return (
    <>
      {isLoading ? (
        <ProductDetailSkeleton />
      ) : (
        <>
          <div className="w-full flex flex-wrap gap-6 md:gap-8 lg:gap-12 relative">
            <Button
              variant="subtle"
              className={cn(
                "rounded-full z-[1] absolute top-0 right-2 flex justify-center w-fit h-fit p-2 group ",
                wishlist.some(
                  (wishlistItem: Shop.AddToCartReq) =>
                    wishlistItem.productId === parseInt(id as string)
                )
                  ? "hover:bg-red-200 bg-red-100"
                  : "hover:bg-red-100"
              )}
              onClick={() => {
                HandleWishlist(wishlist, id as string, dispatch);
              }}
            >
              <Icons.heart
                className={cn(
                  "h-5 w-5",
                  wishlist.some(
                    (wishlistItem: Shop.AddToCartReq) =>
                      wishlistItem.productId === parseInt(id as string)
                  )
                    ? "fill-red-500 text-red-500"
                    : "text-zinc-600 group-hover:text-red-300"
                )}
              />
            </Button>
            <div className="w-full shrink-0 md:basis-[45%]">
              <div className="bg-white p-4 w-full aspect-square rounded-xl  sm:p-8 overflow-hidden">
                <div className=" relative w-full h-full">
                  <Image src={data?.image} alt={data?.title} fill />
                </div>
              </div>
            </div>
            <div className="w-full grow md:basis-[45%]">
              <div className="">
                <h1 className="text-xl font-bold text-primary mb-4 sm:mb-8">
                  {data?.title}
                </h1>
                <h4 className="text-sm text-zinc-500 font-normal mb-4 sm:mb-8">
                  {data?.description}
                </h4>
                <div className="mb-4 sm:mb-8 flex gap-2 items-center">
                  <div className="flex gap-4 items-center">
                    {Array(roundedRating)
                      .fill(0)
                      .map((_, index) => (
                        <Icons.star
                          key={index}
                          className="h-4 w-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}

                    {Array(5 - roundedRating)
                      .fill(0)
                      .map((_, index) => (
                        <Icons.star
                          key={index}
                          className="h-4 w-4 text-zinc-300 fill-accent"
                        />
                      ))}
                  </div>
                  <span className="text-[12px] text-zinc-400">
                    ({data?.rating?.count})
                  </span>
                </div>
                <hr className="w-full h-[1px] bg-zinc-200 my-4" />
                <h2 className="text-lg font-semibold text-primary my-4">
                  $ {data?.price}
                </h2>
                <hr className="w-full h-[1px] bg-zinc-200 my-4 mb-4 sm:mb-8" />

                {/* quantity */}
                <div className="flex gap-4 items-center mb-4 sm:mb-8">
                  <div className="rounded-[100vw] bg-zinc-100 py-2 px-4 flex items-center gap-4">
                    <button
                      className="appearnce-none cursor-pointer"
                      onClick={() =>
                        quantity > 1
                          ? setQuantity((prev: number) => prev - 1)
                          : {}
                      }
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="text-primary font-semibold">
                      {quantity}
                    </span>
                    <button
                      className="appearnce-none cursor-pointer"
                      onClick={() => setQuantity((prev: number) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-[12px] text-zinc-400 font-semibold">
                    Only <span className=" text-orange-500"> 12 Items </span>
                    left!
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <Button>Buy Now</Button>
                  <Button
                    variant="outline"
                    isLoading={isAddingToCart}
                    onClick={() => {
                      setIsAddingToCart(true);
                      setTimeout(() => {
                        HandleAddToCart(cart, id as string, dispatch, quantity);
                        setIsAddingToCart(false);
                      }, 1000);
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Recommendations category={data?.category} id={id as string} />
        </>
      )}
    </>
  );
};

export default ProductDetail;
