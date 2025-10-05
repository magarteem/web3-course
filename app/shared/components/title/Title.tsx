import s from "./subTitle.module.scss";

interface Props {
  title: string;
  ancor?: string;
}
export const Title = ({ title, ancor }: Props) => {
  return (
    <h1 id={ancor} className={s.title}>
      {title}
    </h1>
  );
};
