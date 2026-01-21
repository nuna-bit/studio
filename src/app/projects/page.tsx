import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { FolderKanban } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-headline mb-8 flex items-center gap-3"><FolderKanban className="h-10 w-10 text-primary" /> Academy Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
