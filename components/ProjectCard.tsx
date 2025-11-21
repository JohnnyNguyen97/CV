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
      <Card className="cursor-pointer transition hover:shadow-lg">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
