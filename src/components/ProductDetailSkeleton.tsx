import { FC } from "react";
import { Skeleton } from "./ui/Skeleton";

interface ProductDetailSkeletonProps {}

const ProductDetailSkeleton: FC<ProductDetailSkeletonProps> = ({}) => {
  return (
    <div className="w-full flex flex-wrap gap-6 md:gap-8 lg:gap-12">
      <Skeleton className="w-full shrink-0 md:basis-[45%] aspect-square rounded-xl" />
      <div className="w-full grow md:basis-[45%]">
        <div className="">
          <Skeleton className="h-5 w-full mb-4" />
          <Skeleton className="h-[14px] w-full mb-4 sm:mb-8" />
          <div className="mb-4 sm:mb-8 flex gap-2 items-center">
            <div className="flex gap-4 items-center">
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <Skeleton key={idx} className="h-4 w-4 rounded-full" />
              ))}
            </div>
          </div>
          <hr className="w-full h-[1px] bg-zinc-200 my-4" />
          <Skeleton className="h-[18px] w-4 my-4" />
          <hr className="w-full h-[1px] bg-zinc-200 my-4 mb-4 sm:mb-8" />

          {/* quantity */}
          <Skeleton className="rounded-[100vw] w-20 py-4 px-2 mb-4 sm:mb-8" />

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Skeleton className="rounded-[100vw] h-10 w-24 px-4 py-2" />
            <Skeleton className="rounded-[100vw] h-10 w-24 px-4 py-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
