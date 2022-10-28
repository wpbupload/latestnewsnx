// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import React, { useEffect } from "react";
import Content from "../components/Content";
import { Header } from "../components/Header";
import Global from "../utils/Global";

export const Trending = () => {
  useEffect(() => {
    document.title = `Trending - ${Global.NextTitle}`;
  });
  return (
    <>
      <Header isActiveName="trending" />
      <Content className="web-app ms-bgColor-neutralLighter">
        <section className="ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500"></section>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
              <div className="ms-welcome main-layout">
                <h1>Trending</h1>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};
