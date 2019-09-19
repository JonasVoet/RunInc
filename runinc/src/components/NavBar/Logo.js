import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../img/runinc_logo.svg";
import HoverLogo from "../img/runinc_logo_hover.svg"

function Logo() {
    const [currentImg, setCurrentImg] = useState(LogoImg);

    return (
        <Link to="/">
            <img
                onMouseLeave={() => setCurrentImg(LogoImg)}
                onMouseEnter={() => setCurrentImg(HoverLogo)}
                src={currentImg} alt="logo" className="logo" />
        </Link>
    );
}

export default Logo;