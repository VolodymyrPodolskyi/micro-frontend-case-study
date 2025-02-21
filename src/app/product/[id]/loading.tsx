import ProductDetailSkeleton from "@/components/ProductDetailSkeleton";
import { Skeleton } from "@/components/ui/Skeleton";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return <ProductDetailSkeleton />;
};

export default loading;
