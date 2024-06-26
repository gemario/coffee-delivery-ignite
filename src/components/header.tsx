import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffeeIgnite from "../assets/logo-coffee-delivery.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "../location/useLocation";

export function Header() {
  const { city, uf } = useLocation();

  return (
    <header className="flex items-center justify-between py-8">
      <img src={LogoCoffeeIgnite} />
      <nav className="flex items-center justify-center gap-3">
        <div className="bg-purple-light w-40 h-9 flex items-center justify-center rounded-md">
          <span className="text-purple">
            <MapPin weight="fill" size={22} />
          </span>
          <span className="text-purple-dark text-sm font-bold font-roboto">
            {city} {uf}
          </span>
        </div>
        <NavLink to={"/checkout"}>
          <button className="w-9 h-9 bg-yellow-light text-yellow-dark rounded-md flex items-center justify-center relative">
            <ShoppingCart weight="fill" size={22} />
            <span className="bg-yellow-dark text-white text-xs font-roboto font-bold w-5 h-5 absolute bottom-6 left-6 rounded-full flex items-center justify-center ">
              3
            </span>
          </button>
        </NavLink>
      </nav>
    </header>
  );
}
