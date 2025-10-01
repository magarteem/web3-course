import { ClipboardBtn, SH } from "@features/index";

interface Props {
  code: string;
}

export function CodeBlockLayoutsDeff({ code }: Props) {
  return (
    <div
      translate="no"
      className="notranslate relative rounded-xl overflow-hidden shadow-lg my-6"
    >
      <ClipboardBtn code={code} />

      <SH>{code}</SH>
    </div>
  );
}
