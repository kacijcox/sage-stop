import { IconChevronLeft } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <IconChevronLeft /> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("incense")}>
              <button>All</button>
            </Link>
            <Link to="furnitures">
              <button onClick={() => handleBtnName("candles")}>
                Furnitures
              </button>
            </Link>
            <Link to="electronics">
              <button onClick={() => handleBtnName("decor")}>
                Electronics
              </button>
            </Link>
            <Link to="lamps">
              <button onClick={() => handleBtnName("crystals")}>Lamps</button>
            </Link>
            <Link to="kitchen">
              <button onClick={() => handleBtnName("herbs")}>Kitchen</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;