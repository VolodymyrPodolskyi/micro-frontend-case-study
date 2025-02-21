import ProductDetail from "@/components/ProductDetail";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-full bg-slate-50">
      <div className="container ">
        <ProductDetail />
      </div>
    </div>
  );
};

export default page;
