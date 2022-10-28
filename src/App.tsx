// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Blogs, TopSearch, Trending, WorldNews } from "./container";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <div className={`ms-welcome `}>
          <Route path="/" exact>
            <TopSearch />
          </Route>
          <Route path="/trending" exact>
            <Trending />
          </Route>
          <Route path="/worldnews" exact>
            <WorldNews />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
        </div>
      </Router>
    </>
  );
};

export default App;
