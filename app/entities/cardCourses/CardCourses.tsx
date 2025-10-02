import Link from "next/link";
import s from "./mainSection.module.css";
import { CourseCardsType } from "@/app/shared/types/courseCardsType";

interface Props {
  item: CourseCardsType;
}
export const CardCourses = ({ item }: Props) => {
  return (
    <Link href={item.link}>
      <div className={s.courseCard}>
        <div className={s.courseThumb}>{item.title}</div>

        <div className={s.courseContent}>
          <h3 className={s.courseTitle}>{item.subTitle}</h3>

         
            <button className={s.courseBtn}>Перейти</button>
         
        </div>
      </div>
    </Link>
  );
};
