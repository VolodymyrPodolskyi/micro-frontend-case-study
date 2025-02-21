import {
  removeFromWishlist,
  selectShop,
  setCart,
  setShowCart,
  setShowWishlist,
} from "@/redux/features/shopSlice";
import { Shop } from "@/types";
import Image from "next/image";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, buttonVariants } from "./ui/Button";
import { PlusCircle, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { HandleAddToCart, cn } from "@/lib/utils";
import { useCustomToast } from "@/hooks/use-custom-toast";

interface WishlistItemProps extends Shop.ProductType {
  quantity?: number;
}

const WishlistItem: FC<WishlistItemProps> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(selectShop);

  const { removedFromWishlistToast } = useCustomToast(dispatch);

  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);

  function handleRemoveItemFromWishlist() {
    dispatch(removeFromWishlist(props?.id));
    removedFromWishlistToast();
  }

  return (
    <div className="w-full flex gap-4 justify-between py-4">
      <div className="w-full shrink-0 aspect-square bg-white p-4 rounded-lg overflow-hidden basis-[30%] border border-slate-50">
        <div className="w-full h-full relative">
          <Image src={props?.image} alt={props?.title} fill />
        </div>
      </div>
      <div className="grow">
        <h3 className="font-semibold text-primary">{props?.title}</h3>
        <h4 className="text-[13px] text-zinc-400 my-2">
          QTY: {props?.quantity}
        </h4>
        <h4 className="font-semibold text-primary">$ {props?.price}</h4>
        <div className="flex gap-4">
          <Button className="mt-2" onClick={handleRemoveItemFromWishlist}>
            <Trash2 className="h-4 w-4 mr-2" />
            Remove
          </Button>
          <Button
            className="mt-2"
            isLoading={isAddingToCart}
            onClick={() => {
              setIsAddingToCart(true);
              setTimeout(() => {
                HandleAddToCart(cart, props?.id.toString(), dispatch, 1);
                setIsAddingToCart(false);
              }, 1000);
            }}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
