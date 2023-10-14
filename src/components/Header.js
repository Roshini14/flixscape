import React, { useEffect, useState } from "react";
import { HeaderContainer } from "./Header.styles";
function Header() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } else setIsDark(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  return (
    <HeaderContainer dark={isDark}>
      <img src="logo.jpeg" alt="" />
    </HeaderContainer>
  );
}

export default Header;
