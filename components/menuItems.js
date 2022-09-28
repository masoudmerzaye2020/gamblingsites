import { useState, useEffect, useRef } from "react";

import Dropdown from "./dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <div className="nav-area">
    <li
      className="menu-items flex-row md:flex-col "
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* if item has url and submenu, we make the button clickable to visit 
      the url while still showing dropdown on hover. If no url, we only show 
      hover without linking the button. Else, we render a simple <a> element. 
      Be aware that they are internal links, so we will use the <Link> component from react-router. Here, we are using the <a> for simplicity. */}
      {items.url && items.submenu ? (
        <>
          <button 
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            // onClick={() => setDropdown((prev) => !prev)}
          >
            <a  href={items.url}>{items.title}</a>
            {/* {items.title}{" "} */}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span
                className={`arrow${
                  items.url && items.submenu ? " custom" : ""
                }`}
              />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button 
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {/* <a href="/#">{items.title}</a> */}
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a className=" hover:text-green-300" href={items.url}>{items.title}</a>
      )}

    <style jsx>{`
/*     .nav-area {
      display: flex;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      height: 58px;
      background: blue;
    }

    .logo {
      text-decoration: none;
      font-size: 25px;
      color: inherit;
      margin-right: 20px;
    } */

 
    .menu-items {
      position: relative;
      font-size: 16px;
    }

    .menu-items a {
      display: block;
      font-size: inherit;
      color: inherit;
      text-decoration: none;
    }



    .menu-items button {
      color: inherit;
      font-size: inherit;
      border: none;
      background-color: transparent;
      cursor: pointer;
      width: 100%;

      /* new additions */
      display: flex;
      justify-content: left;
      align-items: center;
    }

    .menu-items a,
    .menu-items button {
      text-align: left;
      padding: 0.7rem 1rem;
    }

    /* new addition */
    .menu-items button a {
      padding: 0;
    }

    .menu-items a:hover,
    .menu-items button:hover {
    background-color: #324959;
    color:#40d3b7;
    }

    .arrow::after {
      content: "";
      display: inline-block;
      margin-left: 0.28em;
      vertical-align: 0.09em;
      border-top: 0.42em solid;
      border-right: 0.32em solid transparent;
      border-left: 0.32em solid transparent;
    }

      `}
    </style>

    </li>
    </div>
  );
};

export default MenuItems;
