import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const NavBar = () => {
  const {
    activeMenu,
    setActiveMenu,
    clicked,
    setClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between md:mx-6 relative">
      <NavButton
        title={"menu"}
        customFunc={() => setActiveMenu((prevActive) => !prevActive)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title={"cart"}
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"chat"}
          dotColor={"#03c9D7"}
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title={"notifications"}
          dotColor={"#03c9D7"}
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content={"Profile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 rounded-lg p-3 hover:bg-light-gray"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">Joe</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {clicked.cart && <Cart />}
        {clicked.chat && <Chat />}
        {clicked.notification && <Notification />}
        {clicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
