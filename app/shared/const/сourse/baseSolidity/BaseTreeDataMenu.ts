import { FlatTreeData } from "@/app/shared/components/treeData/typeTreeMenu";

export const BaseTreeDataMenu: FlatTreeData = {
  name: "",
  children: [
    {
      name: "Tипы данных",
      children: [
        { name: "string", metadata: { url: "#my-section-1" } },
        { name: "int", metadata: { url: "#my-section-2" } },
        { name: "uint", metadata: { url: "#my-section-3" } },
        { name: "map", metadata: { url: "#my-section-4" } },
        { name: "object", metadata: { url: "#my-section-5" } },
      ],
    },
    {
      name: "Фнткции",

      children: [
        {
          name: "react-accessible",
          children: [{ name: "index.js", metadata: { url: "#my-section-6" } }],
        },
        {
          name: "react",
          children: [{ name: "index.js", metadata: { url: "#my-section-7" } }],
        },
      ],
    },
    {
      name: "Тестирование",
      children: [
        {
          name: "react-accessible",
          children: [{ name: "index.js", metadata: { url: "#my-section-8" } }],
        },
        {
          name: "react",
          children: [{ name: "index.js", metadata: { url: "#my-section-9" } }],
        },
      ],
    },
    {
      name: "Foundry",
      children: [
        {
          name: "react-accessible",
          children: [{ name: "index.js", metadata: { url: "#my-section-10" } }],
        },
        {
          name: "react",
          children: [{ name: "index.js", metadata: { url: "#my-section-11" } }],
        },
      ],
    },
    {
      name: ".npmignore",
    },
    {
      name: "Pro",
      metadata: { url: "/pro" },
    },
    {
      name: "Home",
      metadata: { url: "/" },
    },
  ],
};
