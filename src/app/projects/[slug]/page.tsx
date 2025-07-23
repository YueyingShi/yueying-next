import { projects } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return <ProjectDetail project={project} />;
}
