import {
  CircleCheckBig,
  CirclePlus,
  Clock,
  CloudUpload,
  GripVertical,
  LayoutDashboard,
  ListChecks,
  Pencil,
  Trash,
} from "lucide-react";
import { CourseCard } from "./card/course-card";
import { Button } from "@/components/ui/button";

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

export function CourseBrowse() {
  return (
    <div className="w-full flex flex-col p-5">
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

export function CourseDashboardPage() {
  return (
    <div className="w-full flex flex-col p-5">
      <CourseOverview />
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

export function CourseOverview() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span>
          <Clock
            size={28}
            className="me-2 bg-sky-300 text-sky-600 rounded-xl"
          />
        </span>
        <div className="ms-2">
          <h2 className="text-xl font-medium">In Progress</h2>
          <h4 className="">3 Courses</h4>
        </div>
      </div>
      <div className="flex items-center">
        <span>
          <CircleCheckBig
            size={28}
            className="me-2 bg-green-300 text-green-700 rounded-xl"
          />
        </span>
        <div className="ms-2">
          <h2 className="text-xl font-medium">Completed</h2>
          <h4 className="">4 Courses</h4>
        </div>
      </div>
    </div>
  );
}

// new file
export function CourseCreationHeader() {
  return (
    <div className="w-full flex justify-between items-center p-5">
      <div className="flex flex-col">
        <h1 className="font-medium text-2xl">Course setup</h1>
        <h3>Complete all fields (6/6)</h3>
      </div>
      <div className="">
        <Button variant="outline">Unpublish</Button>
        <Button className="ms-2">
          <Trash size={18} />
        </Button>
      </div>
    </div>
  );
}

export function CourseCreationBody() {
  return (
    <div className="w-full flex flex-col p-5 gap-5">
      <div className="flex">
        <LayoutDashboard />
        <h1 className="ms-2 font-medium text-2xl">Customize your course</h1>
      </div>
      <div className="bg-gray-200 w-[500px] h-[100px] rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">Course title</h3>
          </div>
          <div className="flex items-center">
            <Pencil size={16} />
            <h3 className="ms-2 text-sm font-semibold">Edit title</h3>
          </div>
        </div>
        <h3 className="my-4 text-sm font-medium text-gray-600">
          Cinematic Techniques
        </h3>
      </div>
      {/* Description */}
      <div className="bg-gray-200 w-[500px] h-[100px] rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">Course description</h3>
          </div>
          <div className="flex items-center">
            <Pencil size={16} />
            <h3 className="ms-2 text-sm font-semibold">Edit description</h3>
          </div>
        </div>
        <h3 className="my-4 text-sm font-medium text-gray-600">
          This is a course on Cinematic Techniques
        </h3>
      </div>
      {/* Image */}
      <div className="bg-gray-200 w-[500px] h-[300px] rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">Course image</h3>
          </div>
          <div className="flex items-center">
            <Pencil size={16} />
            <h3 className="ms-2 text-sm font-semibold">Edit image</h3>
          </div>
        </div>
        <div className="my-5 p-2 w-full h-4/6 border border-5 border-black border-dotted flex flex-col justify-center items-center rounded-lg">
          <div className="text-center">
            <span className="flex justify-center items-center w-full">
              <CloudUpload />
            </span>
            <h3 className="text-md font-medium text-blue-600">
              Choose files or drag and drop
            </h3>
            <p className="text-sm font-medium text-gray-600">image (4MB)</p>
          </div>
        </div>
        <h3 className="my-4 text-sm font-medium text-gray-600">
          16:9 aspect ratio recommended
        </h3>
      </div>
    </div>
  );
}
export function CourseCreationSideB() {
  return (
    <div className="w-full flex flex-col p-5 gap-5">
      <div className="flex">
        <ListChecks />
        <h1 className="ms-2 font-medium text-2xl">Course chapters</h1>
      </div>
      {/* Image */}
      <div className="bg-gray-200 w-[500px] h-[300px] rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">Course chapters</h3>
          </div>
          <div className="flex items-center">
            <CirclePlus size={16} />
            <h3 className="ms-2 text-sm font-semibold">Add a chapter</h3>
          </div>
        </div>
        <div className="my-5 p-2 flex flex-col items-center">
          <div className="w-full flex justify-around bg-blue-200">
            <GripVertical size={16} /> Outro
            <div className="p-1 bg-black text-white w-auto rounded-full h-6 text-xs">
              Free
            </div>
            <div className="p-1 bg-blue-700 text-white w-auto rounded-full h-6 text-xs">
              Published
            </div>
            <Pencil size={16} />
          </div>
        </div>
        <h3 className="my-4 text-sm font-medium text-gray-600">
          Drag and drop to reorder chapters
        </h3>
      </div>
    </div>
  );
}

export default function LMSPage() {
  return (
    <>
      <CourseCreationSideB />
    </>
  );
}
