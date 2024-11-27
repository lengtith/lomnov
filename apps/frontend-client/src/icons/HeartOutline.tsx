import React from "react";

import { FaRegHeart } from "react-icons/fa";
type prop = {
  props: string;
};
const HeartOutline = ({ props }: prop) => {
  return (
    <>
     <FaRegHeart className={props}/>
    </>
  );
};

export default HeartOutline;
