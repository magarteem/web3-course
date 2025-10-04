export const codeExample1V1 = `import { ethers } from "ethers";

async function connectWallet() {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    console.log("Connected wallet:", await signer.getAddress());
  } else {
    console.log("MetaMask not found!");
  }
}`;
export const codeExample1V2 = `import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Component = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};`;
export const codeExample1V3 = `const Tree = ({ id }: { id: number }) => {
  return (
    <div className="prose max-w-3xl mx-auto">
      <div className="mt-[100px]" />

      <Title
        title={Подключение Web3 в React  V + (id + 1)}
        ancor={my-section-{id + 1}}
      />
      <SV>
        Ниже приведён пример кода на <SV v="b">TypeScript</SV>, который
        показывает, как подключить <SV v="b">MetaMask</SV> через
        <SV v="code">ethers.js</SV>.
      </SV>

      <CodeBlockLayouts code={codeExample1V1} />
      <CodeBlockLayouts code={codeExample1V2} />
      <CodeBlockLayouts code={codeExample1V1} />
      <CodeBlockLayouts code={codeExample1V2} />
      <CodeBlockLayouts code={codeExample1V1} />
    </div>
  );
};`;
