import { StyletextVariant as SV } from "../shared/components/styletextVariant/StyletextVariant";
import { Title } from "../shared/components/title/Title";
import {
  codeExample1V1,
  codeExample1V2,
  codeExample1V3,
} from "@const/sourse/baseSolidity/lesson-1";
import { NavTree } from "../shared/components/treeData/NavTree";
import { CodeBlockLayouts } from "@layouts/index";
import { GoBackBtn } from "@features/index";
import { BaseTreeDataMenu } from "../shared/const/sourse/baseSolidity/BaseTreeDataMenu";

const Tree = ({ id }: { id: number }) => {
  return (
    <div className="prose w-full">
      <div className="mt-[100px]" />

      <Title
        title={`Подключение Web3 в React  V` + (id + 1)}
        ancor={`my-section-${id + 1}`}
      />
      <SV>
        Ниже приведён пример кода на <SV v="b">TypeScript</SV>, который
        показывает, как подключить <SV v="b">MetaMask</SV> через
        <SV v="code">ethers.js</SV>.
      </SV>

      <CodeBlockLayouts code={codeExample1V1} />
      <CodeBlockLayouts code={codeExample1V2} />
      <CodeBlockLayouts code={codeExample1V3} />
      <CodeBlockLayouts code={codeExample1V2} />
      <CodeBlockLayouts code={codeExample1V3} />
    </div>
  );
};

export default function CodeExample() {
  return (
    <main className="grid grid-cols-[1fr] pb-4 gap-6">
      <NavTree nav={BaseTreeDataMenu}/>
      <section className="ml-[350px] flex flex-col items-center justify-between p-4">
        <GoBackBtn />

        {new Array(2).fill("").map((x, idx) => {
          return <Tree key={idx} id={idx} />;
        })}
      </section>
    </main>
  );
}
