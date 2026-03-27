import { getAllProjectIds } from "@/lib/projects-data";

export function generateStaticParams() {
  return getAllProjectIds().map((id) => ({
    id,
  }));
}
