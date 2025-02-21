"use client";

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { buttonVariants } from "./ui/Button";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

interface SortByMenuProps {}

const SortByMenu: FC<SortByMenuProps> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={cn(
            buttonVariants({ variant: "default" }),
            "hidden md:flex text-[10px] items-center md:text-xs capitalize py-1 px-2 md:px-4 md:py-2"
          )}
        >
          sort by
          <Icons.chevronDown className="ml-2 h-4 w-4 text-zinc-100 " />
        </div>
        <div
          className={cn(
            buttonVariants({ variant: "default", size: "xs" }),
            "md:hidden text-[10px] flex items-center md:text-xs capitalize py-1 px-2 md:px-4 md:py-2"
          )}
        >
          sort by
          <Icons.chevronDown className="ml-2 h-3 w-3 md:h-4 md:w-4 text-zinc-100 " />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white" align="end">
        <DropdownMenuItem asChild>
          <p className="w-[200px] truncate text-sm text-zinc-900">Oldest</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <p className="w-[200px] truncate text-sm text-zinc-900">Latest</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortByMenu;
