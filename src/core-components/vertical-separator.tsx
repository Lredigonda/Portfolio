import React from "react";
import { SeparatorProps } from "./separator";
import "./vertical-separator.scss";

function VerticalSeparator({ className }: SeparatorProps) {
  return (
    <span className={`vertical-separator ${className ? className : ""}`}></span>
  );
}
export default VerticalSeparator;
