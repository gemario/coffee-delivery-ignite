import { Minus, Plus } from "phosphor-react";
import { ComponentProps } from "react";

interface InputQuantityCounterProps extends ComponentProps<"input"> {}

export function InputQuantityCounter(props: InputQuantityCounterProps) {
  return (
    <div className="w-[72px] h-[38px] flex items-center justify-center gap-1 bg-base-button rounded-md">
      <button className="text-purple hover:text-purple-dark">
        <Minus size={14} weight="bold" />
      </button>
      <input
        className=" [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none flex items-center justify-center text-center w-5 h-[21px] border-none outline-none bg-transparent text-base text-base-title font-roboto font-medium"
        type="number"
        inputMode="numeric"
        defaultValue={1}
        minLength={1}
      />
      <button className="text-purple hover:text-purple-dark">
        <Plus size={14} weight="bold" />
      </button>
    </div>
  );
}
