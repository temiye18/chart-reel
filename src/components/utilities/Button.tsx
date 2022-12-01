import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../constants";
import LinkBtn from "./Button.styles";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <LinkBtn>
      <Link to={AppRoutes.advanced} className={`link-btn ${className}`}>
        {children}
      </Link>
    </LinkBtn>
  );
};

export default Button;
