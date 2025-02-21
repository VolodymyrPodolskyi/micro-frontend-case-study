"use client";

import { selectShop, setShowCart } from "@/redux/features/shopSlice";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import SlideInSidebar from "./ui/SlideInSidebar";
import Close from "./Close";
import CartItem from "./CartItem";
import { Shop } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

interface MyCartProps {}

const MyCart: FC<MyCartProps> = ({}) => {
  const { showCart, cart, products } = useSelector(selectShop);
  const dispatch = useDispatch();

  return (
    <SlideInSidebar isOpen={showCart}>
      <div className="w-full h-full z-[10]">
        <Close onClose={() => dispatch(setShowCart())} />
        <div className="p-8 border-b border-b-gray-400">
          <h2 className="text-5xl font-neue text-center">
            Shopping Bag {cart?.length ? <>({cart?.length})</> : null}
          </h2>
        </div>
        {!cart?.length ? (
          <div className="p-4 flex h-[calc(100vh_-_113px_-_157px)] justify-center items-center">
            Your Shopping Bag is Empty :(
          </div>
        ) : (
          <div className="flex h-[calc(100vh_-_113px_-_157px)] flex-col gap-6 p-4 overflow-y-auto">
            {cart?.map((item: Shop.AddToCartReq, idx: number) => (
              <div
                className={cn(
                  idx < cart?.length - 1 ? "border-b border-b-zinc-200" : ""
                )}
                key={idx}
              >
                <CartItem
                  {...products[item.productId - 1]}
                  quantity={item.quantity}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="fixed bottom-0 right-0 w-full h-fit bg-white border-t border-t-zinc-200 py-4 px-4">
        <div className="flex w-full justify-between gap-4">
          <h3 className="text-lg font-semibold text-primary">SUBTOTAL</h3>
          <h3 className="text-lg font-semibold text-primary">
            ${" "}
            {parseFloat(
              cart.reduce(
                (acc: any, cartItem: Shop.AddToCartReq) =>
                  acc + products[cartItem.productId - 1].price,
                0
              )
            )}
          </h3>
        </div>
        <h3 className="text-base text-zinc-400 my-4">
          Shiiping and taxes included at checkout
        </h3>
        <Button className="w-full">Checkout</Button>
      </div>
    </SlideInSidebar>
  );
};

export default MyCart;
