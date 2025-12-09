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
      <Card className="h-full flex flex-col transition hover:shadow-lg overflow-hidden">
        {image && (
          <div className="relative w-full h-48 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}
        <CardHeader className="flex-grow flex flex-col">
          <CardTitle className="text-[var(--primary)]">{title}</CardTitle>
          <CardDescription className="text-zinc-400 flex-grow">
            {description}
          </CardDescription>
          {githubLink && (
            <button
              onClick={handleGithubClick}
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2 text-left"
            >
              View on GitHub →
            </button>
          )}
        </CardHeader>
      </Card>
    </div>
  );
}
