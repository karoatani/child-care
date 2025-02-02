import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

interface Props {
  menuName: string;
}

export default function DropDown({ menuName }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (menuName === "About") {
      navigate("/about");
    }
    if (menuName === "Services") {
      navigate("/services");
    }
    
    
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          onClick={handleClick}
          className="inline-flex w-full justify-center gap-x-1.5  text-sm font-semibold text-gray-900   hover:bg-gray-50"
        >
          {menuName}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-[#8F36FF]"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1"></div>
      </MenuItems>
    </Menu>
  );
}
