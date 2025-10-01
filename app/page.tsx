import Link from 'next/link';
import { Title } from './shared/components/title/Title';

export default function CodeExample() {
  return (
    <main className="flex min-h-screen flex-col  p-4">
      <Link href="base">
        <Title title="Solidity. Базовый уровень" />
      </Link>
      <Link href="pro">
        <Title title="Solidity. Углублённый уровень" />
      </Link>
      <Link href="err">
        <Title title="Уязвимости" />
      </Link>
      <Link href="foundry">
        <Title title="Foundry" />
      </Link>
    </main>
  );
}
