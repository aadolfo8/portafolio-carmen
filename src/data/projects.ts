import projectData from "./projects.json";

export type ProjectMedia = {
  kind: "image" | "video" | "embed";
  src: string;
  controls?: boolean;
};

export type Project = {
  id: string;
  client: string;
  title: string;
  year: string;
  type: string;
  image: string;
  media: ProjectMedia[];
  awards?: string[];
  mediaLayout?: "triptych";
};

export const projects: Project[] = projectData as Project[];

export function projectType(type: string, es: boolean): string {
  if (es) return type;
  return ({
    Campaña: "Campaign",
    "Spot TV & RRSS": "TV & social film",
    "Spot & Gráfica": "Film & Print",
    Gráfica: "Print",
  } as Record<string, string>)[type] ?? type;
}

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
