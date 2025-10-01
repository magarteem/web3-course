//import { INode } from "react-accessible-treeview";
import { IFlatMetadata } from "react-accessible-treeview/dist/TreeView/utils";

interface IFlatMetadataType extends IFlatMetadata {
  url?: string;
}
interface FolderNode {
  name: string;
  children?: FolderNode[];
  metadata?: IFlatMetadataType;
}
export type FlatTreeData = FolderNode;
