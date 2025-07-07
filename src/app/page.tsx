import { Banner } from "@/components/Banner";
import { ProjectList } from "@/components/ProjectList";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <Layout>
      <Banner />
      <ProjectList projects={projects} />
    </Layout>
  );
}
