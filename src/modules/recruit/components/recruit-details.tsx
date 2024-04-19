import { Button } from "@/components/ui/button";
import { ArrowLeft, Link, Pencil, SquareArrowOutUpRight } from "lucide-react";

export function RecruitDetails() {
  return (
    <>
      <div className="w-full mx-auto relative">
        <div
          className={`bg-[url("https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1")] min-h-[400px] bg-cover bg-center text-center overflow-hidden`}
          // style={{ minHeight: "500px", backgroundImage: url(URL) }}
          title="Woman holding a mug"
        ></div>
        <div className="flex justify-between w-full top-5 absolute p-5">
          <Button variant={"outline"} className="w-12 h-12 rounded-full">
            <ArrowLeft />
          </Button>
          <Button variant={"outline"}>
            Go to website
            <SquareArrowOutUpRight size={20} className="ms-2" />
          </Button>
        </div>
        <div className="px-5 w-full mx-auto">
          <div className="mt-3 bg-white flex justify-center leading-normal">
            <div className="w-4/6 rounded-lg bg-white relative top-0 -mt-20 p-5 sm:p-10">
              <div className="flex justify-between w-full">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
                  alt="logo"
                />
                <div className="">
                  <Button variant={"outline"} className="rounded-md ">
                    <Pencil size={20} className="me-2" />
                    Edit Profile
                  </Button>
                  <Button variant={"outline"} className="rounded-md ms-2">
                    <Link size={20} />
                  </Button>
                </div>
              </div>
              <h1 className="text-gray-900 font-bold text-xl mb-2">Recruit</h1>
              <p className="text-gray-700 text-xs mt-2">
                California, United States
              </p>
              <p className="text-sm leading-8 my-4">
                UI/UX designers - how would you like to work within a successful
                SaaS based firm in downtown Toranto, building customized tools
              </p>
              <div className="flex gap-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
                  alt="logo"
                />
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
                  alt="logo"
                />
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
                  alt="logo"
                />
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
                  alt="logo"
                />
              </div>
              <div className="my-5">
                <h1 className="text-base font-bold">About Recruit</h1>
                <p className="text-sm leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </blockquote>
            </div>
            <div className="mx-12 rounded-lg bg-zinc-100 w-[350px] h-2/6 p-5 sm:p-10">
              <h1 className="text-gray-900 text-base font-bold mb-2">
                Organization status
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
