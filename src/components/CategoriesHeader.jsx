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
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="candles">
              <button onClick={() => handleBtnName("candles")}>
                Candles
              </button>
            </Link>
            <Link to="incense">
              <button onClick={() => handleBtnName("incense")}>
                Incense
              </button>
            </Link>
            <Link to="decor">
              <button onClick={() => handleBtnName("decor")}>
                Decor
              </button>
            </Link>
            <Link to="crystals">
              <button onClick={() => handleBtnName("crystals")}>Crystals</button>
            </Link>
            <Link to="herbs">
              <button onClick={() => handleBtnName("herbs")}>Herbs</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;