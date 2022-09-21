import React from "react";
import Separator from "./separator";
import "./detail-row.scss";

type BorderType = "TOP" | "BOT" | "BOTH" | "NONE";

interface DetailRowProps {
  children: JSX.Element;
  label: string;
  labelInfo?: string;
  className?: string;
  borderType?: BorderType;
}

function DetailRow({
  children,
  label,
  labelInfo,
  className,
  borderType,
}: DetailRowProps) {
  return (
    <div className={`detail-row ${className ? className : ""}`}>
      {borderType === "TOP" || borderType === "BOTH" ? <Separator /> : null}
      <div className="detail-row__container">
        <div className="detail-row__container__label-container">
          <div className="detail-row__label-info-icon-container"></div>
          <span className="detail-row__label">{label}</span>
        </div>
        <div className="detail-row__container__children-container">
          {children}
        </div>
      </div>
      {!borderType || borderType === "BOT" || borderType === "BOTH" ? (
        <Separator />
      ) : null}
    </div>
  );
}

export default DetailRow;
