import { ShoppingCartSimple } from "phosphor-react";
import { InputQuantityCounter } from "./inputQuantityCounter";

interface CoffeeCardProps {
  id: number;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
}

export function CoffeeCard(props: CoffeeCardProps) {
  return (
    <div className="flex flex-col relative bg-base-card items-center w-64 h-[310px] px-5 pb-5 rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px]">
      <img
        src={props.image}
        className="w-[120px] h-[120px] absolute -top-5 z-10"
      />
      <div className="relative top-[100px] flex flex-col items-center">
        <div className="flex items-center justify-center gap-1 mt-3 mb-4">
          {props.tags.map((tag, index) => (
            <span
              className="uppercase px-2 py-1 bg-yellow-light font-roboto text-xs font-medium rounded-full text-yellow-dark"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl text-base-subtitle font-nunito font-black">
            {props.name}
          </h3>
          <p className="text-sm text-base-label font-roboto text-center mb-7 ">
            {props.description}
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-end gap-1">
            <span className="text-base text-base-text font-roboto font-normal ">
              R$
            </span>
            <strong className="text-2xl text-base-text font-nunito font-black">
              {props.price}
            </strong>
          </div>
          <div className="flex items-center justify-center gap-2">
            <InputQuantityCounter />
            <button className="w-[38px] h-[38px] flex items-center justify-center bg-purple-dark text-base-card rounded-md hover:bg-purple">
              <ShoppingCartSimple weight="fill" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
