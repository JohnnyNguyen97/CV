import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";

interface ProjectCardProps {
  title: string;
  description?: string;
  href: string;
}

export default function ProjectCard({
  title,
  description,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <Card className="hover-glow bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl cursor-pointer transition p-4">
        <CardHeader>
          <CardTitle className="text-[var(--primary)]">{title}</CardTitle>
          <CardDescription className="text-zinc-400">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
