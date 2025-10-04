import { ReactNode } from "react";

interface Props {
  v?: "p" | "b" | "code";
  children: ReactNode;
}

export const StyleTextVariant = ({ children, v = "p" }: Props) => {
  switch (v) {
    case "p":
      return <p>{children}</p>;
    case "b":
      return <b>{children}</b>;
    case "code":
      return <code>{children}</code>;

    default:
      return <p>{children}</p>;
  }
};
