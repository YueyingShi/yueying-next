import { Banner } from "@/components/Banner";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="max-w-7xl mx-auto p-8" id="projects">
        <ProjectList projects={projects} />
      </div>
    </>
  );
}
