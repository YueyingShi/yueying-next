import { useRouter } from "next/router";
import { projects } from "@/data/projects";
import { Layout } from "@/components/Layout";
import { ProjectDetail } from "@/components/ProjectDetail";

export default function ProjectPage() {
  const { query } = useRouter();
  const project = projects.find((p) => p.slug === query.slug);

  if (!project) return <p>Loading...</p>;

  return (
    <Layout>
      <ProjectDetail project={project} />
    </Layout>
  );
}
