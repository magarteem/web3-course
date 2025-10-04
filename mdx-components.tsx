import type { MDXComponents } from "mdx/types";
import  s  from "./mdxComponents.module.scss";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className={s.h1}>{children}</h1>,

    ...components,
  };
}
