import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  companyIdentity,
  locations,
  services,
  siteUrl,
} from "@/lib/site-data";
import { button, section, sectionLabel, shell } from "@/lib/styles";

export const metadata: Metadata = {
  title: "About DW Tech",
  description: companyIdentity.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About DW Tech | Dubai technology company",
    description: companyIdentity.description,
    url: `${siteUrl}/about`,
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#webpage`,
  url: `${siteUrl}/about`,
  name: "About DW Tech",
  description: companyIdentity.description,
  about: { "@id": `${siteUrl}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className="bg-night">
        <section className="relative min-h-[700px] bg-[radial-gradient(circle_at_78%_35%,rgba(176,99,255,.22),transparent_34%),#05040e] pt-[190px] pb-[110px] max-[620px]:min-h-0 max-[620px]:pt-[150px] max-[620px]:pb-[84px]">
          <SiteHeader />
          <div className={`${shell} relative z-[1]`}>
            <FadeIn>
              <p className={sectionLabel}>About DW Tech</p>
              <h1 className="mb-9 max-w-[1100px] text-[clamp(4rem,8vw,9rem)]">
                Technology built from Dubai for ambitious businesses.
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="max-w-[820px] text-[clamp(1.1rem,1.6vw,1.45rem)] leading-[1.6] text-[#bcb7c7]">
                {companyIdentity.description} We plan, design, build, integrate,
                and support digital products and business systems for clients
                across the Middle East, India, and Europe.
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
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
            className={`${shell} grid grid-cols-[.8fr_1.2fr] gap-[8vw] max-[860px]:grid-cols-1`}
          >
            <FadeIn>
              <div>
                <p className={sectionLabel}>Company identity</p>
                <h2 className="text-[clamp(3rem,5vw,5.6rem)]">
                  DW Tech by Desert Whales.
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="grid gap-6 text-[1.08rem] leading-[1.65] text-[#5d5867]">
                <p>
                  DW Tech is headquartered in Dubai, United Arab Emirates, and
                  is the technology and digital-transformation division of
                  Desert Whales Marketing Services LLC.
                </p>
                <p>
                  Our teams combine business strategy, product design,
                  full-stack engineering, AI automation, platform integration,
                  and cloud expertise. We work from business requirements to
                  implementation and ongoing optimization.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className={`${section} bg-white text-ink`}>
          <div className={shell}>
            <FadeIn>
              <p className={sectionLabel}>Where we operate</p>
              <h2 className="mb-14 max-w-[920px] text-[clamp(3rem,5vw,5.6rem)]">
                Close to clients across four markets.
              </h2>
            </FadeIn>
            <StaggerContainer
              as="dl"
              className="grid grid-cols-2 gap-x-12 max-[720px]:grid-cols-1"
              staggerDelay={0.08}
            >
              {locations.map(([location, role]) => (
                <StaggerItem
                  className="border-t border-black/15 py-6"
                  key={location}
                >
                  <dt className="text-[1.25rem] font-semibold">{location}</dt>
                  <dd className="mt-2 text-[#5d5867]">{role}</dd>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className={`${section} bg-mist text-ink`}>
          <div className={shell}>
            <FadeIn>
              <p className={sectionLabel}>Capabilities</p>
              <h2 className="mb-14 max-w-[920px] text-[clamp(3rem,5vw,5.6rem)]">
                Strategy, engineering, and experience working as one.
              </h2>
            </FadeIn>
            <StaggerContainer
              as="ul"
              className="m-0 grid list-none grid-cols-2 gap-x-12 p-0 max-[720px]:grid-cols-1"
              staggerDelay={0.06}
            >
              {services.map((service) => (
                <StaggerItem
                  as="li"
                  className="border-t border-black/15 py-5"
                  key={service.slug}
                >
                  <Link
                    className="text-[1.18rem] font-medium"
                    href={`/services/${service.slug}`}
                  >
                    {service.title}
                  </Link>
                  <p className="mt-2 leading-[1.55] text-[#5d5867]">
                    {service.short}
                  </p>
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
