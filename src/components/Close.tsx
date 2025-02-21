"use client";

import { FC } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";

interface CloseProps {
  onClose: () => void;
}

const Close: FC<CloseProps> = ({ onClose }) => {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      className="h-6 w-6 p-0 rounded-full absolute top-4 right-4"
      onClick={onClose}
      aria-label="close modal"
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default Close;
