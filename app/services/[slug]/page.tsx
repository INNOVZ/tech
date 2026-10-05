import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services, siteUrl } from "@/lib/site-data";
import { button, section, sectionLabel, shell } from "@/lib/styles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | DW Tech`,
      description: service.description,
      url: `${siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "ProfessionalService", name: "DW Tech", url: siteUrl },
    areaServed: ["United Arab Emirates", "India", "Saudi Arabia", "Italy"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="bg-night">
        <section className="relative min-h-[760px] bg-[radial-gradient(circle_at_78%_40%,rgba(176,99,255,.22),transparent_34%),#05040e] pt-[190px] pb-[110px] max-[620px]:min-h-0 max-[620px]:pt-[150px] max-[620px]:pb-[84px]">
          <SiteHeader />
          <div className={`${shell} relative z-[1]`}>
            <FadeIn>
              <Link
                className="inline-flex items-center gap-2 text-[.83rem] text-[#a9a4b4] [&_svg]:size-[18px] [&_svg]:rotate-180 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.7] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]"
                href="/#services"
              >
                <ArrowRight /> All expertise
              </Link>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className={`${sectionLabel} mt-[70px] max-[620px]:mt-12`}>
                DW Tech expertise
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <h1 className="mb-9 max-w-[1100px] text-[clamp(4rem,8vw,9rem)]">
                {service.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-[800px] text-[clamp(1.1rem,1.6vw,1.45rem)] leading-[1.6] text-[#bcb7c7]">
                {service.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.26}>
              <Link
                className={`${button} mt-6`}
                href="mailto:tech@thedesertwhales.com?subject=New%20project%20enquiry"
              >
                Discuss your project <ArrowUpRight />
              </Link>
            </FadeIn>
          </div>
        </section>
        <section className={`${section} bg-mist text-ink`}>
          <div
            className={`${shell} grid grid-cols-[1fr_.75fr] gap-[8vw] max-[860px]:grid-cols-1`}
          >
            <FadeIn>
              <div>
                <p className={sectionLabel}>What we deliver</p>
                <h2 className="text-[clamp(3rem,5vw,5.6rem)]">
                  From a clear business case to a solution your team can run.
                </h2>
              </div>
            </FadeIn>
            <StaggerContainer
              as="ul"
              className="m-0 list-none border-t border-black/15 p-0"
              staggerDelay={0.1}
            >
              {service.deliverables.map((item) => (
                <StaggerItem
                  as="li"
                  className="border-b border-black/15 py-5 text-[1.2rem]"
                  key={item}
                >
                  {item}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
