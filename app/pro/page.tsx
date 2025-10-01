import { NavTree } from "../shared/components/treeData/NavTree";
import MDXLayout from "./MDXLayout";
import Lesson from "./lesson.mdx";

export default function ReactJsonViewPage() {
  return (
    <div className="grid grid-flow-col">
      <NavTree />
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <MDXLayout>
          <Lesson />
        </MDXLayout>
      </main>
    </div>
  );
}
