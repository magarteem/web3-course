"use client"
import { MDXProvider } from "@mdx-js/react";

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return <div className="prose prose-lg prose-invert">
     <MDXProvider>

    {children}
     </MDXProvider>
    
    </div>;
}
