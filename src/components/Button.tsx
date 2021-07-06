import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import cn from "classnames";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: "add" | "outline" | "cart";
  price?: number;
  onClick: () => void;
}

export const Button = ({appearance, price, className, onClick, children, ...props }: ButtonProps): JSX.Element => {
  return <button className={cn('button', className, {
      'button--outline': appearance === 'outline',
      'button--cart': appearance === 'cart',
      'button--add': appearance === 'add',
  })} 
  onClick={onClick}
  {...props}>{children}</button>;
};
