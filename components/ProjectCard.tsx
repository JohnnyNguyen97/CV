"use client";

import Image from "next/image";
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
  image?: string;
  githubLink?: string;
  isExternal?: boolean;
}

export default function ProjectCard({
  title,
  description,
  href,
  image,
  githubLink,
  isExternal = false,
}: ProjectCardProps) {
  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (githubLink) {
      window.open(githubLink, "_blank");
    }
  };

  const handleCardClick = () => {
    if (!isExternal && !githubLink) {
      window.location.href = href;
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <div onClick={handleCardClick} className="h-full cursor-pointer">
      <Card className="h-full flex flex-col transition hover:shadow-lg hover-glow overflow-hidden min-h-[18rem]">
        {image && (
          <div className="relative w-full h-64 overflow-hidden bg-[color:var(--card-bg)]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
        )}
        <CardHeader className="flex-grow flex flex-col">
          <CardTitle className="text-[color:var(--primary)]">{title}</CardTitle>
          <CardDescription className="text-[color:var(--muted)] flex-grow">
            {description}
          </CardDescription>
          {githubLink && (
            <button
              onClick={handleGithubClick}
              className="text-[color:var(--primary)] hover:underline text-sm mt-2 text-left"
            >
              View on GitHub →
            </button>
          )}
        </CardHeader>
      </Card>
    </div>
  );
}
