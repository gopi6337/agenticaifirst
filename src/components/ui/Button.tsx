import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses = {
  primary:
    "bg-gradient-to-r from-purple-vivid to-pink-hot text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] animate-pulse-glow",
  secondary:
    "bg-gradient-to-r from-blue-electric to-cyan-bright text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
  outline:
    "border border-purple-vivid/50 text-purple-vivid hover:bg-purple-vivid/10 hover:border-purple-vivid",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "", ...rest } = props;

  const classes = `inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorProps} />
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />
  );
}
