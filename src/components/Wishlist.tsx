import { FC } from "react";
import SlideInSidebar from "./ui/SlideInSidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectShop, setShowWishlist } from "@/redux/features/shopSlice";
import Close from "./Close";
import { Shop } from "@/types";
import { cn } from "@/lib/utils";
import WishlistItem from "./WishlistItem";

interface WishlistProps {}

const Wishlist: FC<WishlistProps> = ({}) => {
  const dispatch = useDispatch();

  const { showWishlist, wishlist, products } = useSelector(selectShop);

  return (
    <SlideInSidebar isOpen={showWishlist}>
      <div className="w-full h-full">
        <Close onClose={() => dispatch(setShowWishlist())} />
        <div className="p-8 border-b border-b-gray-400">
          <h2 className="text-5xl font-neue text-center">
            Wishlist {wishlist?.length ? <>({wishlist?.length})</> : null}
          </h2>
        </div>
        {!wishlist?.length ? (
          <div className="p-4 flex h-[calc(100vh_-_113px)] justify-center items-center">
            Your Wishlist is Empty :(
          </div>
        ) : (
          <div className="flex h-[calc(100vh_-_113px)] flex-col gap-6 p-4 overflow-y-auto">
            {wishlist?.map((item: Shop.AddToCartReq, idx: number) => (
              <div
                className={cn(
                  idx < wishlist?.length - 1 ? "border-b border-b-zinc-200" : ""
                )}
                key={idx}
              >
                <WishlistItem
                  {...products[item.productId - 1]}
                  quantity={item.quantity}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </SlideInSidebar>
  );
};

export default Wishlist;
