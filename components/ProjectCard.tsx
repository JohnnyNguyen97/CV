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
    <Link href={href} className="h-full">
      <Card className="h-full flex flex-col cursor-pointer transition hover:shadow-lg">
        <CardHeader className="flex-grow">
          <CardTitle className="text-[var(--primary)]">{title}</CardTitle>
          <CardDescription className="text-zinc-400">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
