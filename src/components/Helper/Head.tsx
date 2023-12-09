import React from "react";

interface HeadProps {
  title: string;
  description?: string;
}

const Head = ({ title, description }: HeadProps) => {
  React.useEffect(() => {
    document.title = title + " | Rick e Morty";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", description || "");
  }, [title, description]);

  return <></>;
};

export default Head;
