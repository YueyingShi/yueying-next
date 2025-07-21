type Project = {
  title: string;
  description: string;
};

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="flex border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}
