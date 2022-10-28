// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import * as React from "react";
import { Link } from "react-router-dom";

export interface AppProps {
  keyIndex?: any;
  element?: any;
  text?: any;
  onClick?: (data: any) => void;
  imageUrl?: any;
  theme?:
    | "light"
    | "dark"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "white"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "outline-warning"
    | "outline-info"
    | "outline-light"
    | "outline-dark";
  iconPosition?: "left" | "right";
  round?: true | false;
  style?: any;
  tooltipText?: any;
  showSpinner?: boolean;
  className?: string;
  disabled?: boolean;
  supportUrl?: string;
  iconName?: string;
  textShow?: true | false;
  iconColor?: string;
  iconAnimated?: string;
  iconW?: number;
  iconH?: number;
  checked?: boolean;
  showChecked?: boolean;
  appearance?: boolean;
}

const Button: React.FunctionComponent<
  AppProps & React.HTMLAttributes<HTMLButtonElement>
> = (props) => {
  const {
    text,
    style,
    keyIndex,
    tooltipText,
    showSpinner = false,
    className = "",
    disabled = false,
    supportUrl = "",
    iconName = "",
    textShow = true,
    iconColor,
    iconAnimated,
    iconW,
    iconH,
    checked,
    showChecked,
    ...restProps
  } = props;

  return !supportUrl ? (
    <button
      aria-describedby={`tooltip-${keyIndex}`}
      type={"button"}
      aria-label={text}
      className={`${className}${disabled ? " disabled" : ""}`}
      style={style}
      disabled={disabled}
      key={keyIndex}
      {...restProps}
      {...(tooltipText ? { title: tooltipText } : {})}
    >
      {textShow ? (
        <span
          className="label"
          style={{ marginLeft: showSpinner || iconName ? "5px" : "0" }}
          dangerouslySetInnerHTML={{ __html: text }}
        ></span>
      ) : null}
    </button>
  ) : (
    <Link
      target="_blank"
      to={{ pathname: supportUrl }}
      rel="noreferrer"
      className={`${className}${disabled ? " disabled" : ""}`}
    >
      <span className="label" dangerouslySetInnerHTML={{ __html: text }}></span>
    </Link>
  );
};
export default Button;
