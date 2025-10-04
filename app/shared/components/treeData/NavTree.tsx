"use client";

import "./styles.css";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList, FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FlatTreeData } from "./typeTreeMenu";

interface Props{
   nav:FlatTreeData
}


export const NavTree = ({nav}:Props) => {
  const data = flattenTree(nav);
  const { push } = useRouter();
  const [activeId, setActiveId] = useState("");
  const [isOPen, setIsOPen] = useState(false);

  const expandedIds = data
    .filter((node) => node.children && node.children.length > 0)
    .map((node) => node.id);

  const handleClick = (url?: string) => {
    if (!url) return;

    if (url.startsWith("#")) {
      const element = document.querySelector(url);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      push(url);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      data.forEach((node) => {
        const url = node.metadata?.url;
        if (url && url.startsWith("#")) {
          const el = document.querySelector(url);
          if (el && el.getBoundingClientRect().top <= 10) {
            current = url;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  return (
    <div className="fixed">

      <div className="directory">
        <TreeView
        
          onNodeSelect={(f) => {
            !f.isBranch &&
              typeof f.element.metadata?.url === "string" &&
              handleClick(f.element.metadata.url);
          }}
          expandedIds={expandedIds}
          data={data}
          aria-label="directory tree"
          nodeRenderer={({
            element,
            isBranch,
            isExpanded,
            getNodeProps,
            level,
          }) => (
            <div
              {...getNodeProps()}
              style={{
                paddingLeft: 20 * (level - 1),
                cursor: "pointer",
                backgroundColor:
                  element.metadata?.url === activeId
                    ? "rgba(0,123,255,0.2)"
                    : "transparent",
              }}
            >
              {isBranch ? (
                <FolderIcon isOpen={isExpanded} />
              ) : (
                <FileIcon filename={element.name} />
              )}

              {element.name}
            </div>
          )}
        />
      </div>

      <button onClick={()=>setIsOPen(prev=>!prev)} className="btn">{isOPen ? "Скрыть" : "Открыть"}</button>
    </div>
  );
};

const FolderIcon = ({ isOpen }: { isOpen: boolean }) =>
  isOpen ? (
    <FaRegFolderOpen color="e8a87c" className="icon" />
  ) : (
    <FaRegFolder color="e8a87c" className="icon" />
  );

const FileIcon = ({ filename }: { filename: string }) => {
  const extension = filename.slice(filename.lastIndexOf(".") + 1);
  switch (extension) {
    case "js":
      return <DiJavascript color="yellow" className="icon" />;
    case "css":
      return <DiCss3 color="turquoise" className="icon" />;
    case "json":
      return <FaList color="yellow" className="icon" />;
    case "npmignore":
      return <DiNpm color="red" className="icon" />;
    default:
      return <DiJavascript color="yellow" className="icon" />;
  }
};
