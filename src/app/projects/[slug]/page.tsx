import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
