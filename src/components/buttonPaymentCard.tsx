import { ComponentProps } from "react";

interface ButtonPaymentCardProps extends ComponentProps<"button"> {}

export function ButtonPaymentCard(props: ButtonPaymentCardProps) {
  return (
    <button
      {...props}
      className="flex items-center justify-center gap-3 uppercase text-xs text-base-text font-roboto tracking-wide
      bg-base-button rounded-md w-[178.67px] h-[51px]  hover:bg-base-hover hover:text-base-subtitle
      focus:bg-purple-light focus:border focus:border-purple"
    />
  );
}
