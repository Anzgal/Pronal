import React from "react";
import Link from "next/link";

import imgL1Logo from "../../assets/image/png/logoPronal.png";
import imgL1LogoWhite from "../../assets/image/png/logoPronal.png";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          <img src={imgL1LogoWhite} alt="" />
        ) : (
          <img src={imgL1Logo} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
