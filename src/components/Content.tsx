// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import React, { ReactNode } from "react";
export interface CommonTextProps {
  className?: any;
  children: ReactNode;
}
const Content: React.FunctionComponent<CommonTextProps> = (props) => {
  return (
    <main className={`content${props.className ? " " + props.className : ""}`}>
      {props.children}
    </main>
  );
};

export default Content;
