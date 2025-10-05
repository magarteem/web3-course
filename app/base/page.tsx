import { NavTree, StyleTextVariant as SV, Title } from "@components/index";
import {
  codeExample1V1,
  codeExample1V2,
  codeExample1V3,
} from "@/app/shared/const/сourse/baseSolidity/lesson-1";
import { CodeBlockLayoutsDeff } from "@layouts/index";
import { GoBackBtn } from "@features/index";
import { BaseTreeDataMenu } from "@const/сourse";
import s from "./pageBase.module.scss";

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

      <CodeBlockLayoutsDeff code={codeExample1V1} />
      <CodeBlockLayoutsDeff code={codeExample1V2} />
      <CodeBlockLayoutsDeff code={codeExample1V3} />
      <CodeBlockLayoutsDeff code={codeExample1V2} />
      <CodeBlockLayoutsDeff code={codeExample1V3} />
    </div>
  );
};

export default function CodeExample() {
  return (
    <main className={s.pageBase}>
      <NavTree nav={BaseTreeDataMenu} />
      <section className={s.section}>
        <GoBackBtn />

        {new Array(2).fill("").map((x, idx) => {
          return <Tree key={idx} id={idx} />;
        })}
      </section>
    </main>
  );
}
