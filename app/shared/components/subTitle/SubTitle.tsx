'use client';
import { useState } from 'react';
import s from "./subTitle.module.scss";

interface Props {
  codeExample: string;
}
export const SubTitle = ({ codeExample }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={s.subTitle3}
    >
      {copied ? '✅ Скопировано' : '📋 Копировать'}
    </button>
  );
};
