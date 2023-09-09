import React from "react";
import TrialRun from "./Section/TrialRun";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
type HeaderProps = { children: React.ReactNode };
const Header = (props: HeaderProps) => {
  const [openMenu, setOpenMenu] = React.useState(true);
  const MenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="relative flex flex-col w-full m-0 p-0 bg-white">
      <TrialRun />
      {/*Desktop Menu */}
      <div className=" hidden sm:flex justify-between p-4 bg-black text-white">
        <div className="text-2xl sm:text-4xl">East Star</div>
        <div className="flex gap-6 items-center justify-center">
          <button
            onClick={() => document.getElementById("home")?.scrollIntoView()}
            className="text-2xl hover:text-blue-500 "
          >
            Home
          </button>
          <button className="text-2xl hover:text-blue-500 ">
            Personal Training
          </button>
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView()}
            className="text-2xl hover:text-blue-500 "
          >
            Pricing
          </button>
          <button
            onClick={() => document.getElementById("footer")?.scrollIntoView()}
            className="text-2xl hover:text-blue-500 "
          >
            Contact
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="sticky z-[9999] top-0 left-0 right-0 flex flex-row-reverse sm:hidden justify-between p-4 bg-black text-white">
        <button className="" onClick={MenuClick}>
          {openMenu ? <GiHamburgerMenu /> : <GiHamburgerMenu />}
        </button>{" "}
        <div className="text-2xl">East Star</div>
      </div>

      <div
        className={
          openMenu
            ? `fixed h-screen w-full flex flex-col gap-4 items-center justify-center -translate-x-[100%] ease-in duration-300`
            : `fixed overflow-y-hidden h-screen w-full flex flex-col items-center justify-center gap-4 bg-black text-white translate-x-0 ease-in duration-300 z-[9999]`
        }
      >
        <button className="" onClick={MenuClick}>
          {openMenu ? <AiOutlineClose /> : <AiOutlineClose />}
        </button>{" "}
        <button
          onClick={() => {
            document.getElementById("home")?.scrollIntoView();
            setOpenMenu(!openMenu);
          }}
          className="text-2xl hover:text-blue-500 "
        >
          Home
        </button>
        <button className="text-2xl hover:text-blue-500 ">
          Personal Training
        </button>
        <button
          onClick={() => {
            document.getElementById("pricing")?.scrollIntoView();
            setOpenMenu(!openMenu);
          }}
          className="text-2xl hover:text-blue-500 "
        >
          Pricing
        </button>
        <button
          onClick={() => {
            document.getElementById("footer")?.scrollIntoView();
            setOpenMenu(!openMenu);
          }}
          className="text-2xl hover:text-blue-500 "
        >
          Contact
        </button>
      </div>
      <main className="w-[100%] m-0 p-0">{props.children}</main>
    </div>
  );
};

export default Header;
