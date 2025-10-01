'use client';

import { useRouter } from 'next/navigation';

export const GoBackBtn = () => {
  const { back } = useRouter();

  return (
    <button onClick={back} className="text-sm">
      Go Back
    </button>
  );
};
