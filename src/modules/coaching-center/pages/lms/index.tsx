import { CourseCard } from "./card/course-card";

const standards = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
];

export default function LMSPage() {
  return (
    <div className="w-full flex flex-col">
      <div className="">
        <ul className="flex w-full gap-2 overflow-x-auto">
          {standards.map((standard) => {
            return (
              <li className="border border-3 w-36 rounded-full p-2 text-center">
                {standard} Standard
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-5 grid grid-cols-4 justify-items-center gap-8 ">
        {Array.from({ length: 5 }).map((_, idx) => {
          return (
            <div className="col-span-1">
              <CourseCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}
