// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import { useBoolean } from "@fluentui/react-hooks";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconMain from "../assets/svg/icon";
import Button from "../components/Button";
import Content from "../components/Content";
import { Header } from "../components/Header";
import LatestNewsNXApiFacade from "../service/LatestNewsNXApiFacade";
import Global from "../utils/Global";

export const Blogs = () => {
  const [isloading, { setTrue: showLoading, setFalse: hideLoading }] =
    useBoolean(false);
  const [sharedvalue, setShared] = useState(null);
  const [getpageno, setpageno] = useState("0");
  const [numPosts1, setnumPosts1] = useState("0");
  const [printContent, setContent] = useState([]);

  useEffect(() => {
    document.title = `Blogs - ${Global.NextTitle}`;
    getapi("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shareHandler = (id: any) => {
    const newSelectionId = sharedvalue === id ? null : id;
    setShared(newSelectionId);
  };

  const getapi = async (pageno) => {
    showLoading();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    const res = await LatestNewsNXApiFacade.getBlog(pageno);

    const { data } = res;
    if (data) {
      setpageno(pageno);
      const numtotalpage = res.headers["x-wp-totalpages"];
      setnumPosts1(numtotalpage);
      hideLoading();
      // const result = data.map((item) => {
      //   const bilty = getShortLink(item.link);
      //   item.link = bilty;
      //   return item;
      // });
      // console.log(result);
      setContent(data);
    }
  };

  const getShortLink = (url: string) => {
    // const bilty = await LatestNewsNXApiFacade.getShortener(url);
    return url;
    // console.log(bilty.link);
    // return "https://asas.com";
  };

  // const setShortlink = async (url: string) => {
  //   const customlink = await getShortLink(url);
  //   return customlink;
  // };

  return (
    <>
      <Header isActiveName="blogs" />
      <Content className="web-app">
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
              <div className="ms-welcome main-layout">
                {isloading && <IconMain name="animation-loading" />}
                {!isloading && printContent ? (
                  <>
                    {printContent.map((item, i) => {
                      const customlink = getShortLink(item.link);
                      let cd = item.date;
                      let dg = cd.split("T");
                      let date = dg[0];
                      return (
                        <div className="collumn" key={i}>
                          <div className="head">
                            <span className={`headline hl3 headtitle${i}`}>
                              {item.title.rendered}
                            </span>
                            <p>
                              <span className={`headline hl4 datedf${i}`}>
                                <span className="dates">
                                  {item.date
                                    ? Global.time_ago(date)
                                    : "no date"}
                                </span>
                              </span>
                            </p>
                          </div>
                          <p
                            className={`desc${i}`}
                            dangerouslySetInnerHTML={{
                              __html: item.excerpt.rendered
                                ? item.excerpt.rendered
                                : "No description",
                            }}
                          ></p>
                          <div className="card-footer">
                            <Button
                              text="Read More"
                              className="btn"
                              supportUrl={customlink}
                              textShow
                              keyIndex={i}
                            />
                            <Button
                              text={sharedvalue !== item.id ? "Share" : "Close"}
                              className="article-share-count-container"
                              textShow
                              keyIndex={i}
                              onClick={() => shareHandler(item.id)}
                            />
                          </div>
                          <div
                            className={`wpbflex flex${i} ${
                              sharedvalue === item.id ? "openshare" : ""
                            }`}
                          >
                            <div className="social-button facebook">
                              <Link to="#" target={"_blank"}>
                                <span className="icon icon-sharrow">
                                  <IconMain name="facebook" />
                                </span>
                              </Link>
                            </div>
                            <div className="social-button linkedin">
                              <Link to="#" target={"_blank"}>
                                <span className="icon icon-sharrow">
                                  <IconMain name="linkedin" />
                                </span>
                              </Link>
                            </div>
                            <div className="social-button twitter">
                              <Link to="#" target={"_blank"}>
                                <span className="icon icon-sharrow">
                                  <IconMain name="twitter" />
                                </span>
                              </Link>
                            </div>
                            <div className="social-button pinterest">
                              <Link to="#" target={"_blank"}>
                                <span className="icon icon-sharrow">
                                  <IconMain name="pinterest" />
                                </span>
                              </Link>
                            </div>
                            <div className="social-button whatsapp">
                              <Link to="#" target={"_blank"}>
                                <span className="icon icon-sharrow">
                                  <IconMain name="whatsapp" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <nav
                      className="navigation pagination"
                      role="navigation"
                      aria-label="Pagination"
                    >
                      <div className="nav-links">
                        {getpageno === "1" ? (
                          <span
                            className="lastprev page-numbers disabled"
                            id="lastprev"
                          >
                            <IconMain name="lastprev" />
                          </span>
                        ) : (
                          <span
                            className="lastprev page-numbers "
                            id="lastprev"
                            onClick={() => getapi("1")}
                          >
                            <IconMain name="lastprev" />
                          </span>
                        )}
                        {getpageno === "1" ? (
                          <span
                            className="prev page-numbers disabled"
                            id="prev"
                          >
                            <IconMain name="prev" />
                          </span>
                        ) : (
                          <span
                            className="prev page-numbers "
                            id="prev"
                            onClick={() =>
                              getapi((parseInt(getpageno) - 1).toString())
                            }
                          >
                            <IconMain name="prev" />
                          </span>
                        )}
                        <span className="page-numbers">{getpageno}</span>
                        <span className="page-numbers">
                          <span>of</span>
                          <span> {numPosts1}</span>
                        </span>
                        {getpageno === numPosts1 ? (
                          <span
                            className="next page-numbers disabled"
                            id="next"
                          >
                            <IconMain name="next" />
                          </span>
                        ) : (
                          <span
                            className="next page-numbers "
                            id="next"
                            onClick={() =>
                              getapi((parseInt(getpageno) + 1).toString())
                            }
                          >
                            <IconMain name="next" />
                          </span>
                        )}
                        {getpageno === numPosts1 ? (
                          <span
                            className="lastnext page-numbers disabled"
                            id="lastnext"
                          >
                            <IconMain name="lastnext" />
                          </span>
                        ) : (
                          <span
                            className="lastnext page-numbers "
                            id="lastnext"
                            onClick={() =>
                              getapi(parseInt(numPosts1).toString())
                            }
                          >
                            <IconMain name="lastnext" />
                          </span>
                        )}
                      </div>
                    </nav>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};
