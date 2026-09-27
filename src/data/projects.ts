import projectData from "./projects.json";

export type ProjectMedia = {
  kind: "image" | "video" | "embed";
  src: string;
};

export type Project = {
  id: string;
  client: string;
  title: string;
  year: string;
  type: string;
  image: string;
  media: ProjectMedia[];
  mediaLayout?: "triptych";
};

export const projects: Project[] = projectData as Project[];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
