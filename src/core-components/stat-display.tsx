import React from "react";
import "./stat-display.scss";

interface LinkProps {
  text: string;
  url: string;
}

interface Image {
  src: string;
  alt?: string;
  className?: string;
}

interface StatDisplayProps {
  className?: string;
  title: string;
  text?: string;
  link: LinkProps;
  img: Image;
}

function StatDisplay({ className, img, title, link, text }: StatDisplayProps) {
  const { src, alt } = img;

  return (
    <div className={`stat-display ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`stat-display__image ${img.className ? img.className : ""}`}
      />

      <div className="stat-display__container">
        <h2 className="stat-display__title">{title}</h2>

        <a
          className="stat-display__link"
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.text}
        </a>
        <span className="stat-display__text">{text}</span>
      </div>
    </div>
  );
}

export default StatDisplay;
