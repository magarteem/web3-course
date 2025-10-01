'use client';
import { useState } from 'react';

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
      className="absolute right-2 top-2 bg-gray-800 hover:bg-gray-700 text-white text-xs px-2 py-1 rounded"
    >
      {copied ? '✅ Скопировано' : '📋 Копировать'}
    </button>
  );
};
