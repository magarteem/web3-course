"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  atomDark,
  a11yDark,
  coldarkDark,
  darcula,
  duotoneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  children: string | string[];
}
export const SH = ({ children }: Props) => {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={coldarkDark}
      showLineNumbers
      wrapLongLines
      customStyle={{
        margin: 0,
        padding: "1rem",
        fontSize: "1rem",
        borderRadius: "0.75rem",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};
