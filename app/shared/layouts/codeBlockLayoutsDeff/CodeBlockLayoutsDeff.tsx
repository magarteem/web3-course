import { ClipboardBtn, SH } from "@features/index";
import s from "./codeBlockLayouts.module.scss";

interface Props {
  code: string;
}

export const CodeBlockLayoutsDeff = ({ code }: Props) =>{
  return (
    <div
      translate="no"
      className={s.codeBlockLayouts}
    >
      <ClipboardBtn code={code} />

      <SH>{code}</SH>
    </div>
  );
}
