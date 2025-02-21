import { FC } from "react";
import ProductCard from "./ui/ProductCard";
import { useSelector } from "react-redux";
import { selectShop } from "@/redux/features/shopSlice";
import { Shop } from "@/types";

interface RecommendationsProps {
  category?: string;
  id?: string;
}

const Recommendations: FC<RecommendationsProps> = ({ category, id }) => {
  const { products } = useSelector(selectShop);

  const filteredProducts = products?.filter(
    (product: Shop.ProductType) =>
      product.id !== parseInt(id!!) && product.category === category
  );

  return (
    <div className="container pt-20 pb-12">
      <h2 className="text-xl md:text-4xl font-bold text-primary w-full text-center mb-8">
        You might also like
      </h2>
      <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
        {filteredProducts?.map((item: any, idx: number) => (
          <div key={idx}>
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
