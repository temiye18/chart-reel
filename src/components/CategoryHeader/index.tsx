import React from "react";
import Title from "./styles";

interface Props {
  text: string;
  animation: string;
  duration: string;
}
const CategoryHeader: React.FC<Props> = ({ text, animation, duration }) => {
  return (
    <Title data-aos={animation} data-aos-duration={duration}>
      <h4>{text}</h4>
    </Title>
  );
};

export default CategoryHeader;
