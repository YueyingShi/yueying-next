import MoonScene from "./MoonScene";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
export function Banner() {
  return (
    <div className="flex justify-center items-center h-screen  overflow-hidden">
      {/* Background Image with filters (only this div is filtered) */}
      {/* Background Image */}
      <div
        className="absolute inset-0 h-screen -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) brightness(40%)",
        }}
      />
      {/* Text */}
      <div className="absolute inset-0 flex flex-col gap-8 justify-center items-center z-20 text-white pointer-events-none ">
        <div className="flex flex-col gap-2 items-center text-center ">
          <h1 className=" text-4xl md:text-6xl  font-garamond ">Ellan Shi</h1>
          <p className="text-xl md:text-2xl font-thin pointer-events-none">
            Message from the MOON
          </p>
        </div>
        <a
          href="#projects"
          className="p-2 pt-3 pb-1 rounded-full hover:bg-[#ffffff66] pointer-events-auto"
        >
          <ChevronDownIcon className="h-16 w-16" />
        </a>
      </div>

      {/* 3D Scene */}
      <div className="z-10">
        <MoonScene />
      </div>
    </div>
  );
}
