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

const Tree = ({ id }: { id: number }) => {
  return (
    <div className="prose max-w-3xl mx-auto">
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
    <div className="grid grid-flow-col">
      <NavTree />
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <GoBackBtn />

        {new Array(11).fill("").map((x, idx) => {
          return <Tree key={idx} id={idx} />;
        })}
      </main>
    </div>
  );
}
