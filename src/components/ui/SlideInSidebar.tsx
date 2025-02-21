import { FC } from "react";

interface SlideInSidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const SlideInSidebar: FC<SlideInSidebarProps> = ({ children, isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "bg-black/10 absolute w-full h-screen top-0 left-0"
          : "opacity-0"
      }
      style={{ backdropFilter: isOpen ? "blur(4px)" : "" }}
    >
      <div
        className={`fixed h-full w-full sm:w-[31rem] top-0 right-0 bg-white transition-all ease-linear duration-300 origin-right overflow-y-auto ${
          isOpen ? "scale-x-100" : "scale-x-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideInSidebar;
