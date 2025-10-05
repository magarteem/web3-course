import { NavTree } from "../shared/components/treeData/NavTree";
import { proTreeDataMenu } from "../shared/const/сourse/proSolidity/proTreeDataMenu";
import MDXLayout from "./MDXLayout";
import Lesson from "./lesson.mdx";
import s from "./pagePro.module.scss";

export default function ReactJsonViewPage() {
  return (
    <main className={s.pagePro}>
      <NavTree nav={proTreeDataMenu} />
      <section className={s.section}>
        <MDXLayout>
          <Lesson />
        </MDXLayout>
      </section>
    </main>
  );
}
