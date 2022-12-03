import React from "react";
import { Link } from "react-router-dom";
import LinkBtn from "./Button.styles";

interface ButtonProps {
  className?: string;
  url: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, url, children }) => {
  return (
    <LinkBtn>
      <Link to={url} className={`link-btn ${className}`}>
        {children}
      </Link>
    </LinkBtn>
  );
};

export default Button;
