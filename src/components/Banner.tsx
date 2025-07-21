import MoonScene from "./MoonScene";
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
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to My Portfolio
        </h1>
        <p className="text-white text-xl md:text-2xl font-light mt-4">
          Explore my projects and learn more about me.
        </p>
      </div>

      {/* 3D Scene */}
      <div className="z-10">
        <MoonScene />
      </div>
    </div>
  );
}
