import { useState } from "react";
import { Link } from "react-scroll";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import "./TopButton.css";

export default function TopButton() {
  const [topButtonVisible, setTopButtonVisible] = useState(false);

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > window.innerHeight + 63) {
      setTopButtonVisible(true);
    } else {
      setTopButtonVisible(false);
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  window.onload = function () {
    scrollFunction();
  };

  return (
    <div>
      <Link to="home" spy={true} smooth={true} duration={500} offset={-63}>
        <button
          className={"topButton " + (topButtonVisible ? "on" : "off")}
          title="Go to top"
        >
          <ArrowUpwardIcon />
        </button>
      </Link>
    </div>
  );
}
