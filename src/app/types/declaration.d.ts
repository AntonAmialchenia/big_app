declare module "*.module.css";

declare module "*.scss";

declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png";

declare module "*.jpg";

declare module "*.jpeg";
