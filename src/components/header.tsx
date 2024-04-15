import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffeeIgnite from "../assets/logo-coffee-delivery.svg";
import { useState, useEffect } from "react";

export function Header() {
  const [location, setLocation] = useState<{
    city: string;
    state: string;
  } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
            );
            const data = await response.json();
            setLocation({
              city: data.city,
              state: data.principalSubdivisionCode,
            });
          } catch (error) {
            console.error("Error fetching location data:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <header className="flex items-center justify-between py-8">
      <img src={LogoCoffeeIgnite} />
      <nav className="flex items-center justify-center gap-3">
        <div className="bg-purple-light w-40 h-9 flex items-center justify-center rounded-md">
          <span className="text-purple">
            <MapPin weight="fill" size={22} />
          </span>
          <span className="text-purple-dark text-xs font-normal font-sans">
            {location
              ? `${location.city}, ${location.state}`
              : "Loading location..."}
          </span>
        </div>
        <button className="w-9 h-9 bg-yellow-light text-yellow-dark rounded-md flex items-center justify-center">
          <ShoppingCart weight="fill" size={22} />
        </button>
      </nav>
    </header>
  );
}
