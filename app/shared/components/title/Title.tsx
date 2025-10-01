interface Props {
  title: string;
  ancor?: string;
}
export const Title = ({ title, ancor }: Props) => {
  return (
    <h1 id={ancor} className="text-3xl font-bold">
      {title}
    </h1>
  );
};
