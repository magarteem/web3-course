import Link from "next/link";
import { Title } from "./shared/components/title/Title";
import s from "./shared/components/cards/mainSection.module.css";

const siteData = [
  {
    id: 0,
    title: "Mobile APP(PWA)",
    open: true,
    linkSite: "https://test.3-tone.ru/",
  },
  {
    id: 1,
    title: "Погода",
    open: true,
    gitLink: "https://github.com/magarteem/weather",
    linkSite: "https://weather.jsx.su/",
  },
  {
    id: 2,
    title: "Чай",
    open: true,
    skilsHtml: [],
    gitLink: "https://github.com/magarteem/chai",
    linkSite: "https://chai.jsx.su/",
  },
  {
    id: 3,
    title: "Авиа билеты",
    open: true,
    gitLink: "https://github.com/magarteem/avia_sales",
    linkSite: "https://air.jsx.su/",
  },
  {
    id: 4,
    title: "Кроссовки",
    open: true,
    gitLink: "https://github.com/magarteem/sneakers",
    linkSite: "https://sneacers.jsx.su/",
  },
];

export default function CodeExample() {
  return (
    <main className="flex min-h-screen flex-col  p-4">
      {siteData.map((e) => (
        <div key={e.id} className={s.cardItemMain}>
          <div
            className={
              s.showInfoBefore + " " + `${e.open && s.transformTranslate}`
            }
          >
            <div className={s.link}>
              {e.gitLink && (
                <a href={e.gitLink} target="_blank">
                  uuuuuuuuuu
                </a>
              )}
              <a href={e.linkSite} target="_blank">
                tttttttttttt
              </a>
            </div>

            <div className={s.__open}>uuuuuuuuuuu</div>
          </div>
          <div className={s.showInfoAfter}>
            <div className={s._header}>
              <a>{e.title}</a>
            </div>
          </div>
        </div>
      ))}

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
