import React from "react";
import TrialRun from "./Section/TrialRun";
type HeaderProps = { children: React.ReactNode };
const Header = (props: HeaderProps) => {
  const [openMenu, setOpenMenu] = React.useState(true);
  const MenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="relative flex flex-col">
      <TrialRun />
      <div className="hidden sm:flex justify-between p-4 bg-black text-white">
        <div className="text-2xl sm:text-4xl">Personal Trainer</div>
        <div className="flex gap-4 items-center justify-center">
          <button className="text-2xl hover:text-blue-500 ">Home</button>
          <button className="text-2xl hover:text-blue-500 ">
            Consultation
          </button>
          <button className="text-2xl hover:text-blue-500 ">
            Personalized Training
          </button>
          <button className="text-2xl hover:text-blue-500 ">Account</button>
        </div>
      </div>

      <div className="sticky inset-0 flex flex-row-reverse sm:hidden justify-between p-4 bg-black text-white">
        <button className="" onClick={MenuClick}>
          {openMenu ? "Open" : "Close"}
        </button>
        <div className="text-2xl">Personal Trainer</div>
      </div>
      <div
        className={
          openMenu
            ? `fixed h-screen w-full flex flex-col gap-4 items-center justify-center -translate-x-[100%] ease-in duration-300`
            : `fixed overflow-y-hidden h-screen w-full flex flex-col items-center justify-center gap-4 bg-black text-white translate-x-0 ease-in duration-300 z-[9999]`
        }
      >
        <button className="" onClick={MenuClick}>
          {openMenu ? "Open" : "Close"}
        </button>{" "}
        <button className="text-2xl hover:text-blue-500 p-4">Home</button>
        <button className="text-2xl hover:text-blue-500 p-4">
          Consultation
        </button>
        <button className="text-2xl hover:text-blue-500 p-4">
          Personalized Training
        </button>
        <button className="text-2xl hover:text-blue-500 p-4">Account</button>
      </div>
      {openMenu ? (
        <main>{props.children}</main>
      ) : (
        <div className="h-screen bg-black"></div>
      )}
    </div>
  );
};

export default Header;
