"use client";

import s from "./codeBlockLayouts.module.scss";
import { ClipboardBtn, SH } from "@features/index";

interface Props {
  code: string;
}

export const CodeBlockLayouts = ({ code }: Props) => {
  return (
    <div
      translate="no"
      className={s.codeBlockLayouts}
    >
      <ClipboardBtn code={code} />

      <SH>{code}</SH>
    </div>
  );
};
