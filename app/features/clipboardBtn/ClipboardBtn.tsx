'use client';
import { useState } from 'react';

interface Props {
  code: string;
}
export const ClipboardBtn = ({ code }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
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
