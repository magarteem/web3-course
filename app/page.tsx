import { CardCourses } from "./entities/cardCourses/CardCourses";
import { courseCards } from "./shared/const/sourse/courseCards";

export default function CodeExample() {
  return (
    <main className="grid grid-cols-3 auto-rows-[250px] min-h-screen gap-4 p-4">
      {courseCards.map((x) => (
        <CardCourses item={x} />
      ))}
    </main>
  );
}
