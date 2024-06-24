import img from "../images/306930671_3283853568599185_1930342004374579919_n-removebg-preview.png";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
import { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";

const Header = () => {
  const [toogle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toogle);
  };
  const user = { name: "Yasser" };
  const cart = {
    totalecount: 1,
  };
  return (
    <header className="pt-[20px] pb-[20px] bg-zinc-900">
      <div className="flex text-white mx-auto bg-zinc-900 container text-lg items-center justify-between">
        <div className="logo flex items-center gap-[10px]">
          <img width={60} height={60} src={img} alt="logo" />
          <Link className="text-xl font-bold" to="/">
            PimPim
          </Link>
        </div>
        <div className="links hidden lg:flex items-center gap-[20px]">
          <Link to="/">Principale</Link>
          <Link to="/aboutus">A propre de nous</Link>
          <Link to="/menu">Menu</Link>
        </div>
        <div className="login-menu hidden lg:flex items-center gap-[20px]">
          {user ? (
            <h1>{user.name}</h1>
          ) : (
            <Link to="/login">Se connecter / S'inscrire </Link>
          )}
          <div className="w-[1px] h-[25px] bg-slate-200"></div>
          <div className="cart relative">
            <FaCartShopping className="text-3xl cursor-pointer" />
            {cart.totalecount !== 0 ? (
              <div className="absolute top-[-10px] right-[-5px] bg-yellow-500 p-[3px] rounded-full">
                <p className="text-sm text-black">{cart.totalecount}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div onClick={handleClick} className="MobileNav lg:hidden">
          <MdRestaurant className="text-3xl cursor-pointer" />
        </div>
        {toogle && (
          <div className=" absolute top-0 left-0 bg-zinc-900 w-screen p-[30px] h-screen">
            <MdRestaurantMenu
              onClick={handleClick}
              className=" text-3xl cursor-pointer absolute right-[20px]"
            />
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <Link to="/">Principale</Link>
              <Link to="/aboutus">A propre de nous</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/login">Se connecter / S'inscrire </Link>
              <div className="cart relative">
                <FaCartShopping className="text-3xl cursor-pointer" />
                {cart.totalecount !== 0 ? (
                  <div className="absolute top-[-10px] right-[-5px] bg-yellow-500 p-[3px] rounded-full">
                    <p className="text-sm text-black">{cart.totalecount}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
