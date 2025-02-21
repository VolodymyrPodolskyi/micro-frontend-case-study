import { removeFromCart } from "@/redux/features/shopSlice";
import { Shop } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/Button";
import { Trash2 } from "lucide-react";
import { useCustomToast } from "@/hooks/use-custom-toast";

interface CartItemProps extends Shop.ProductType {
  quantity?: number;
}

const CartItem: FC<CartItemProps> = ({ ...props }) => {
  const dispatch = useDispatch();

  const { removedFromCartToast } = useCustomToast(dispatch);

  function handleRemoveItemFromCart() {
    dispatch(removeFromCart(props?.id));
    removedFromCartToast();
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
        <Button className="mt-2" onClick={handleRemoveItemFromCart}>
          <Trash2 className="h-4 w-4 mr-2" />
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
