"use client";

import { FadeIn } from "@/components/motion";
import { sectionLabel } from "@/lib/styles";

type Technology = {
  name: string;
  src: string;
};

// Use Simple-Icons CDN for brand-colored SVG icons
const technologies: Technology[] = [
  { name: "React", src: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Angular", src: "https://cdn.simpleicons.org/angular" },
  { name: ".NET", src: "https://cdn.simpleicons.org/dotnet" },
  { name: "Java", src: "https://cdn.simpleicons.org/openjdk" },
  { name: "Python", src: "https://cdn.simpleicons.org/python" },
  { name: "Azure", src: "https://svgl.app/library/azure.svg" },
  { name: "Google Cloud", src: "https://cdn.simpleicons.org/googlecloud" },
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  { name: "Sitecore", src: "https://cdn.simpleicons.org/sitecore" },
  { name: "Adobe", src: "https://svgl.app/library/adobe.svg" },
  {
    name: "Oracle",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
  },
  { name: "Microsoft", src: "https://svgl.app/library/microsoft.svg" },
  { name: "Databricks", src: "https://cdn.simpleicons.org/databricks" },
  { name: "Snowflake", src: "https://cdn.simpleicons.org/snowflake" },
  {
    name: "Azure DevOps",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
  },
  { name: "Jenkins", src: "https://cdn.simpleicons.org/jenkins" },
  { name: "Open AI", src: "https://svgl.app/library/openai.svg" },
  { name: "Gemini", src: "https://cdn.simpleicons.org/googlegemini" },
  { name: "LangChain", src: "https://cdn.simpleicons.org/langchain" },
];

export function TechnologyStack() {
  return (
    <div className="mt-[clamp(52px,6vw,80px)]  grid grid-cols-1 lg:grid-cols-[.6fr_1.4fr] gap-10 items-center">
      <FadeIn className="flex items-center h-full">
        <h2 className={`${sectionLabel} !text-black !m-0`}>
          Technology Ecosytem
        </h2>
      </FadeIn>
      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-[max-content] animate-marquee gap-8 items-center">
          {[...technologies, ...technologies].map((technology, index) => (
            <div
              className="flex-shrink-0 flex items-center justify-center w-[clamp(50px,6vw,80px)] px-4"
              key={index}
              title={technology.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={technology.src}
                alt={technology.name}
                loading="lazy"
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
