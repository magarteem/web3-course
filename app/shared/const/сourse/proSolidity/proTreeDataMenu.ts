import { FlatTreeData } from "@/app/shared/components/treeData/typeTreeMenu";

export const proTreeDataMenu: FlatTreeData = {
  name: "",
  children: [
    {
      name: "Tипы данных",
      children: [
        { name: "string", metadata: { url: "#my-section-1" } },
        { name: "int", metadata: { url: "#my-section-2" } },
      ],
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
