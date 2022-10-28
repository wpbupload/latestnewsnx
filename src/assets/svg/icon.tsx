// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import * as React from "react";

const SearchIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 2048 2048"
      width={props.width || 2048}
      height={props.height || 2048}
      {...props}
    >
      <path
        d="M775.314 1550.63C351.086 1550.63 0 1199.54 0 775.314 0 351.086 351.086 0 775.314 0c424.226 0 775.316 351.086 775.316 775.314 0 424.226-336.46 775.316-775.316 775.316Zm0-1404.344c-351.085 0-629.028 277.943-629.028 629.028 0 351.086 277.943 629.026 629.028 629.026 351.086 0 629.026-277.94 629.026-629.026 0-351.085-277.94-629.028-629.026-629.028Z"
        fill={props.color || "#000000"}
      />
      <path
        d="M1974.86 2048c-14.63 0-43.89 0-58.52-14.63l-687.54-687.54c-29.26-29.26-29.26-73.15 0-102.4 29.26-29.26 73.14-29.26 102.4 0l687.54 687.54c29.26 29.26 29.26 73.14 0 102.4 0 14.63-29.25 14.63-43.88 14.63Z"
        fill={props.color || "#000000"}
      />
    </svg>
  );
};

const FacebookIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      {...props}
    >
      <path
        fill={"currentColor"}
        d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
      />
    </svg>
  );
};

const LinkedinIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      {...props}
    >
      <path
        fill={"currentColor"}
        d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
      />
    </svg>
  );
};

const TwitterIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      {...props}
    >
      <path
        fill={"currentColor"}
        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
      />
    </svg>
  );
};

const PinterestIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      {...props}
    >
      <path
        fill={"currentColor"}
        d="M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z"
      />
    </svg>
  );
};

const WhatsappIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      {...props}
    >
      <path
        fill={"currentColor"}
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
      />
    </svg>
  );
};

const LastprevIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      {...props}
    >
      <path
        fill={"currentColor"}
        d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z"
      />
    </svg>
  );
};

const PrevIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      {...props}
    >
      <path
        fill={"currentColor"}
        d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
      />
    </svg>
  );
};

const NextIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      {...props}
    >
      <path
        fill={"currentColor"}
        d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
      />
    </svg>
  );
};

const LastnextIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      {...props}
    >
      <path
        fill={"currentColor"}
        d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
      />
    </svg>
  );
};
const AnimationLoading = (props) => {
  const { height } = props;
  return (
    <div
      className="animation-loading"
      style={{ position: "relative", height: height || 200 }}
    >
      <div className="loader" style={{ position: "relative" }}>
        <div className="loader-inner line-scale">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
const IconMain = (props: {
  width?: number;
  height?: number;
  name: string;
  color?: string;
  isactive?: string;
}) => {
  switch (props.name) {
    case "animation-loading":
      return <AnimationLoading height={props.height} />;
    case "search":
      return <SearchIcon {...props} />;
    case "facebook":
      return <FacebookIcon {...props} />;
    case "linkedin":
      return <LinkedinIcon {...props} />;
    case "twitter":
      return <TwitterIcon {...props} />;
    case "pinterest":
      return <PinterestIcon {...props} />;
    case "whatsapp":
      return <WhatsappIcon {...props} />;
    case "lastprev":
      return <LastprevIcon {...props} />;
    case "prev":
      return <PrevIcon {...props} />;
    case "next":
      return <NextIcon {...props} />;
    case "lastnext":
      return <LastnextIcon {...props} />;
    default:
      return null;
  }
};

export default IconMain;
