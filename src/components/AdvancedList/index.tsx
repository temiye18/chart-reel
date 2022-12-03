import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../";
import { AppRoutes } from "../../constants";
import { BsArrowRight } from "react-icons/bs";
import Item from "./styles";

interface Props {
  category?: string;
  name: string;
  slug: string;
  symbol: string;
  image: string;
}

const AdvancedList: React.FC<Props> = ({ name, slug, symbol, image }) => {
  return (
    <Item data-aos="fade-up" data-aos-duration="1000">
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <h4>{symbol}</h4>
      <Link to={`${AppRoutes.advanced["learn-more"]}/${slug}`} className="link">
        Learn More <BsArrowRight />
      </Link>
      <Button url={`${AppRoutes.advanced.advanced}/${slug}`} className="btn">
        Advanced Charts
      </Button>
    </Item>
  );
};

export default AdvancedList;
