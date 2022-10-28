// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

export interface HeaderProps {
  isActiveName: "topsearch" | "trending" | "worldnews" | "blogs";
}
export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { isActiveName } = props;
  return (
    <>
      <div className="head">
        <div className="headerobjectswrapper">
          <header>Latest News Next</header>
        </div>
        <div className={`navmenu ${isActiveName}`}>
          <Link
            to="/"
            className={classNames("subhead", {
              active: isActiveName === "topsearch",
            })}
          >
            Top Search
          </Link>
          <Link
            to="/trending"
            className={classNames("subhead", {
              active: isActiveName === "trending",
            })}
          >
            Trending
          </Link>
          <Link
            to="/worldnews"
            className={classNames("subhead", {
              active: isActiveName === "worldnews",
            })}
          >
            World News
          </Link>
          <Link
            to="/blogs"
            className={classNames("subhead", {
              active: isActiveName === "blogs",
            })}
          >
            Blogs
          </Link>
        </div>
        <div className="mobilemenu">
          <span id="menutoggle">
            <span className="openm"></span> Menu
          </span>
          <div className={`navmenu ${isActiveName}`}>
            <Link
              to="/"
              className={classNames("subhead", {
                active: isActiveName === "topsearch",
              })}
            >
              Top Search
            </Link>
            <Link
              to="/trending"
              className={classNames("subhead", {
                active: isActiveName === "trending",
              })}
            >
              Trending
            </Link>
            <Link
              to="/worldnews"
              className={classNames("subhead", {
                active: isActiveName === "worldnews",
              })}
            >
              World News
            </Link>
            <Link
              to="/blogs"
              className={classNames("subhead", {
                active: isActiveName === "blogs",
              })}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
