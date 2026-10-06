"use client";

import {
  CodeXml,
  Sparkle,
  Workflow,
  Rocket,
  type LucideIcon,
  Cloud,
} from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { StaggerContainer, StaggerItem } from "@/components/motion";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const featuredServices: ServiceCard[] = [
  {
    title: "Custom software development",
    description:
      "Web platforms and digital products engineered around your workflows, users, and plans for growth.",
    href: "/services/custom-software-development",
    icon: CodeXml,
  },
  {
    title: "AI Integrated solutions & automation",
    description:
      "Practical AI assistants and automated workflows that reduce repetitive work while keeping people in control.",
    href: "/services/ai-automation-solutions",
    icon: Workflow,
  },
  {
    title: "Product Design and Development",
    description:
      "Partner with us to build custom web and mobile applications designed around your business ideas.",
    href: "/services/product-design-development",
    icon: Sparkle,
  },
  {
    title: "Cloud and DevOps Solutions",
    description:
      "Secure, scalable cloud infrastructure and DevOps practices that accelerate delivery and reduce costs.",
    href: "/services/cloud-and-devops",
    icon: Cloud,
  },
];

export function ServiceList() {
  return (
    <StaggerContainer
      className="relative z-[1] grid grid-cols-4 gap-4 max-[1180px]:grid-cols-2 max-[680px]:grid-cols-1"
      staggerDelay={0.1}
    >
      {featuredServices.map((service) => {
        const ServiceIcon = service.icon;

        return (
          <StaggerItem as="article" key={service.href} className="h-full">
            <Link
              className="group flex h-full min-h-[380px] max-[680px]:min-h-0 bg-white/60 flex-col rounded-3xl bg-card p-8 max-[680px]:p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-warm)]"
              href={service.href}
              aria-label={`Explore ${service.title}`}
            >
              <span className="grid size-[72px] place-items-center rounded-[22px] bg-[#f2e8ff] text-[#7c32d5] transition-[transform,background-color,color] duration-700 ease- group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-orchid group-hover:text-white group-focus-visible:bg-orchid group-focus-visible:text-white">
                <ServiceIcon aria-hidden="true" size={32} />
              </span>

              <div className="mt-auto min-h-[178px] pt-12 max-[680px]:min-h-0 max-[680px]:mt-6 max-[680px]:pt-0">
                <h3 className="mb-4 text-[clamp(1.35rem,1.55vw,1.7rem)] leading-[1.12] tracking-[-.035em]">
                  {service.title}
                </h3>
                <p className="m-0 text-[clamp(0.8rem,1vw,0.9rem)] leading-[1.58] text-[#625c68]">
                  {service.description}
                </p>
              </div>

              <span className="mt-7 inline-flex translate-y-1 items-center gap-2 text-[.84rem] font-medium text-[#6f2bbb] opacity-0 transition-[opacity,transform] duration-300 ease-fluid group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-[860px]:translate-y-0 max-[860px]:opacity-100 [&_svg]:size-4 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.8] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]">
                Explore service <ArrowUpRight />
              </span>
            </Link>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
