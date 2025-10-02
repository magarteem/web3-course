import { NavTree } from "../shared/components/treeData/NavTree";
import { proTreeDataMenu } from "../shared/const/sourse/proSolidity/proTreeDataMenu";
import MDXLayout from "./MDXLayout";
import Lesson from "./lesson.mdx";

export default function ReactJsonViewPage() {
  return (
    <main className="grid grid-cols-[1fr] pb-4 gap-6">
      <NavTree nav={proTreeDataMenu}/>
      <section className="ml-[350px] flex flex-col items-center justify-between">
        <MDXLayout>
       
          <Lesson />
        </MDXLayout>
      </section>
    </main>
  );
}
