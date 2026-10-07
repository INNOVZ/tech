import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import {
  FadeIn,
  ScaleIn,
  ScrollParallax,
  StaggerContainer,
  StaggerItem,
  ScrollScrubReveal,
} from "@/components/motion";
import { ServiceList } from "@/components/service-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TechnologyStack } from "@/components/technology-stack";
import { ClientsMarquee } from "@/components/clients-marquee";
import { Globe } from "@/components/globe";
import {
  companyIdentity,
  contacts,
  locations,
  processSteps,
  services,
  siteUrl,
} from "@/lib/site-data";
import { section, sectionHeading, sectionLabel, shell } from "@/lib/styles";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: companyIdentity.name,
  alternateName: [companyIdentity.alternateName, "Desert Whales Tech"],
  url: siteUrl,
  email: contacts.email,
  description: companyIdentity.description,
  parentOrganization: {
    "@type": "Organization",
    name: companyIdentity.parentName,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: companyIdentity.headquarters.city,
    addressCountry: companyIdentity.headquarters.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: contacts.email,
    telephone: contacts.phones[0][1],
    areaServed: ["AE", "IN", "SA", "IT"],
  },
  areaServed: ["United Arab Emirates", "India", "Saudi Arabia", "Italy"],
  telephone: contacts.phones.map(([, number]) => number.replace(/\s/g, "")),
  knowsAbout: services.map((service) => service.title),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does DW Tech do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DW Tech plans, designs, builds, integrates, and supports custom software, AI automation, ERP and CRM platforms, mobile and web applications, cloud infrastructure, and digital transformation programs.",
      },
    },
    {
      "@type": "Question",
      name: "Where does DW Tech operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DW Tech operates through teams and business networks in Dubai, Thiruvananthapuram, Kozhikode, Riyadh, and Milan.",
      },
    },
    {
      "@type": "Question",
      name: "How does a DW Tech project begin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Projects begin with discovery of the business model, workflows, pain points, users, and growth goals, followed by strategy, design and development, integration, and ongoing optimization.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[min(980px,100svh)] overflow-hidden bg-[radial-gradient(circle_at_70%_34%,rgba(33,74,231,.16),transparent_32%),#05040e] pt-[132px] pb-[46px] after:absolute after:bottom-0 after:left-[5%] after:h-px after:w-[90%] after:bg-[linear-gradient(90deg,transparent,rgba(176,99,255,.4),transparent)] after:content-[''] max-[860px]:min-h-0 max-[860px]:pt-[118px]">
          <SiteHeader />
          <ScrollParallax offset={150}>
            <div
              className="absolute inset-0 bg-[radial-gradient(circle,rgba(176,99,255,.68)_0_1px,transparent_1.3px)] bg-[length:94px_94px] opacity-[.18] [mask-image:linear-gradient(to_bottom,#000,transparent_75%)]"
              aria-hidden="true"
            />
            <div
              className={`${shell} relative z-[1] grid min-h-[710px] grid-cols-[minmax(35vw,.5fr)_minmax(520px,1.25fr)] items-center gap-[clamp(30px,5vw,78px)] max-[1080px]:grid-cols-[.8fr_1.2fr] max-[860px]:flex max-[860px]:min-h-0 max-[860px]:flex-col`}
            >
              <div className="py-16 max-[860px]:w-full max-[860px]:pt-11 max-[860px]:pb-2.5 max-[620px]:pt-6">
                <FadeIn>
                  <h1 className="mb-[30px] max-w-[50vw] text-[clamp(3.7rem,5vw,6rem)] max-[1080px]:text-[clamp(3.3rem,6vw,5rem)] max-[620px]:text-[clamp(3.1rem,15vw,4.5rem)]">
                    Technology that moves business{" "}
                    <span className="text-orchid">forward.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="mt-10 flex flex-wrap items-center gap-5 max-[620px]:flex-col max-[620px]:items-stretch">
                    <Link
                      className="btn"
                      href="mailto:tech@thedesertwhales.com?subject=New%20project%20enquiry"
                    >
                      Make an Enquiry <ArrowUpRight />
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <ScaleIn delay={0.15} duration={0.9} from={0.96}>
                <div
                  className="relative aspect-[1.25/1] min-w-0 overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:z-[2] before:bg-[linear-gradient(90deg,#05040e,transparent_16%,transparent_84%,#05040e)] before:content-[''] max-[860px]:w-full max-[620px]:aspect-[.95/1]"
                  aria-label="A glass whale form representing intelligent, scalable technology"
                >
                  <Image
                    className="object-cover max-[620px]:object-center"
                    src="/hero-whale.png"
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 58vw"
                  />
                  <p className="absolute top-7 right-[30px] z-[3] text-[.58rem] leading-[1.7] tracking-[.24em] text-white/60 uppercase before:absolute before:top-[9px] before:left-[-44px] before:h-px before:w-7 before:bg-white/55 before:content-[''] max-[620px]:hidden">
                    People
                    <br />
                    Technology
                    <br />A brighter tomorrow
                  </p>
                  <p className="absolute bottom-[26px] left-[30px] z-[3] text-[.58rem] leading-[1.7] tracking-[.24em] text-white/60 uppercase before:absolute before:top-[9px] before:right-[-44px] before:h-px before:w-7 before:bg-white/55 before:content-[''] max-[620px]:hidden">
                    Ideas
                    <br />
                    Systems
                    <br />
                    Progress
                  </p>
                </div>
              </ScaleIn>
            </div>
          </ScrollParallax>
        </section>

        {/* ── Company statement ── */}
        <section className={`${section} bg-night`} id="company">
          <div
            className={`${shell} grid grid-cols-2 gap-10 max-[860px]:grid-cols-1`}
          >
            <FadeIn>
              <h2 className="m-0 text-[clamp(3rem,5.4vw,6.5rem)] max-[620px]:text-[clamp(2.8rem,13vw,4.3rem)]">
                Strategy, engineering, and experience —{" "}
                <span className="text-orchid">working as one.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid gap-6 border-l border-white/20 pl-[clamp(28px,4vw,70px)] text-[#b7b2c2] max-[860px]:border-t max-[860px]:border-l-0 max-[860px]:pt-8 max-[860px]:pl-0">
                <ScrollScrubReveal className="m-0 text-[clamp(0.8rem,1vw,0.9rem)] leading-[1.6]">
                  We combine business strategy, product design, engineering,
                  automation, and cloud expertise to solve real operational
                  challenges. Our work is designed around the business: the way
                  teams operate today, the experiences customers expect, and the
                  system growth that demand tomorrow.
                </ScrollScrubReveal>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Services ── */}
        <section
          className={`${section} overflow-hidden  bg-mist text-ink`}
          id="services"
        >
          <div className={shell}>
            <FadeIn className={sectionHeading}>
              <div>
                <p className={sectionLabel}>We Excells</p>
                <h2 className="m-0 text-[clamp(3.6rem,6vw,5rem)] max-[620px]:text-[clamp(2.8rem,13vw,4.3rem)]">
                  What we build
                </h2>
              </div>
            </FadeIn>
            <ServiceList />
            <TechnologyStack />
          </div>
        </section>

        {/* ── Process ── */}
        <div className="bg-mist lg:-my-14">
          <section
            className={`${section} bg-[radial-gradient(circle_at_78%_0,rgba(176,99,255,.18),transparent_34%),#1a0046]`}
            id="approach"
          >
            <div className={`{shell} bg-night lg:mx-10 p-10 lg:rounded-2xl`}>
              <FadeIn className={sectionHeading}>
                <div>
                  <p className={sectionLabel}>Clear and Collaborative</p>
                  <h2 className="m-0 text-[clamp(3.6rem,6vw,7rem)] max-[620px]:text-[clamp(2.8rem,13vw,4.3rem)]">
                    From discovery to scale
                  </h2>
                </div>
              </FadeIn>
              <StaggerContainer
                as="ol"
                className="relative m-0 grid list-none grid-cols-5 pt-3.5 after:absolute after:top-[63px] after:left-0 after:h-px after:w-full after:bg-white/30 after:content-[''] max-[1080px]:grid-cols-2 max-[1080px]:gap-y-[42px] max-[1080px]:after:hidden max-[620px]:grid-cols-1"
                staggerDelay={0.12}
              >
                {processSteps.map(([title, description], index) => (
                  <StaggerItem
                    as="li"
                    className="relative min-h-[220px] px-[clamp(16px,2.2vw,34px)] after:absolute after:top-[46px] after:left-[-4px] after:z-[1] after:size-[7px] after:rounded-full after:bg-orchid after:content-[''] first:pl-0 first:after:left-0 lg:not-first:border-l not-first:border-white/20 nth-[3]:max-[1080px]:border-l-0 nth-[3]:max-[1080px]:pl-0 nth-[5]:max-[1080px]:border-l-0 nth-[5]:max-[1080px]:pl-0 max-[1080px]:after:hidden max-[620px]:min-h-0 max-[620px]:border-t max-[620px]:border-l-0 max-[620px]:px-0 max-[620px]:py-6 max-[620px]:pb-7"
                    key={title}
                  >
                    <span className="mb-[38px] block text-[2rem] font-light text-orchid max-[620px]:mb-[18px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-3.5 text-[1.35rem] leading-[1.2] tracking-[-.03em]">
                      {title}
                    </h3>
                    <p className="m-0 text-[clamp(0.8rem,1vw,0.9rem)] leading-[1.55] text-[#bbb5ca]">
                      {description}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        </div>

        {/* ── Industries ── */}
        <section
          className={`${section} bg-mist text-ink`}
          aria-labelledby="industries-title"
        >
          <div
            className={`${shell} grid grid-cols-[1.1fr_.9fr] gap-[7vw] max-[860px]:grid-cols-1`}
          >
            <FadeIn>
              <div>
                <p className={sectionLabel}>Cross-industry experience</p>
                <h2
                  className="m-0 max-w-[760px] text-[clamp(3rem,5.3vw,6.3rem)] max-[620px]:text-[clamp(2.8rem,13vw,4.3rem)]"
                  id="industries-title"
                >
                  Technology shaped around how your industry works.
                </h2>
              </div>
            </FadeIn>
            <StaggerContainer
              as="ul"
              className="m-0 list-none border-t border-black/15§ p-0"
              staggerDelay={0.08}
            >
              {[
                "Retail & e-commerce",
                "Healthcare & clinics",
                "Real estate",
                "Hospitality & travel",
                "Fashion & lifestyle",
                "Restaurants & cafés",
                "Beauty & wellness",
              ].map((industry) => (
                <StaggerItem
                  as="li"
                  className="border-b border-black/15 py-3.5 text-[clamp(1.05rem,1.2vw,1.35rem)]"
                  key={industry}
                >
                  {industry}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className={shell}>
            <ClientsMarquee />
          </div>
        </section>

        {/* ── Global presence ── */}
        <section
          className={`${section} overflow-hidden bg-white text-ink`}
          aria-labelledby="presence-title"
        >
          <ScaleIn delay={0.2} duration={1} from={0.9}>
            <div
              className="absolute top-[-190px] right-[-130px] aspect-square w-[min(58vw,800px)] max-[860px]:top-[-80px] max-[860px]:right-[-260px] max-[860px]:w-[700px] max-[860px]:opacity-55 max-[620px]:right-[-390px]"
              aria-hidden="true"
            >
              <Globe className="w-full h-full opacity-80" />
            </div>
          </ScaleIn>
          <div
            className={`${shell} relative z-[2] grid grid-cols-2 gap-[7vw] max-[860px]:grid-cols-1`}
          >
            <div>
              <FadeIn>
                <p className={sectionLabel}>Global presence</p>
                <h2
                  className="mb-[38px] max-w-[820px] text-[clamp(3rem,7vw,6rem)] max-[620px]:text-[clamp(2.8rem,13vw,4.3rem)]"
                  id="presence-title"
                >
                  Built close to{" "}
                  <span className="text-orchid">your business.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <ScrollScrubReveal className="max-w-[560px] text-[clamp(0.8rem,1vw,0.9rem)] leading-[1.55] text-[#5b5764]">
                  Different markets. A united mindset. Our teams work across
                  regions to stay close to your goals, your customers, and
                  what's next.
                </ScrollScrubReveal>
              </FadeIn>
            </div>
            <StaggerContainer
              as="dl"
              className="mt-[200px] self-end max-[1080px]:mt-[120px] max-[860px]:mt-10"
              staggerDelay={0.1}
            >
              {locations.map(([city, role]) => (
                <StaggerItem
                  className="grid grid-cols-[minmax(130px,.65fr)_1.35fr] items-center gap-[22px] border-b border-black/15 py-[17px] max-[620px]:grid-cols-1 max-[620px]:items-start max-[620px]:gap-1"
                  key={city}
                >
                  <dt className="text-[1.04rem] font-semibold">{city}</dt>
                  <dd className="m-0 text-[#5d5867]">{role}</dd>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className={`${section} bg-mist text-ink`}
          aria-labelledby="faq-title"
        >
          <div
            className={`${shell} grid grid-cols-[.8fr_1.2fr] gap-[8vw] max-[860px]:grid-cols-1`}
          >
            <FadeIn>
              <div>
                <p className={sectionLabel}>Common questions</p>
                <h2
                  className="max-w-[590px] text-[clamp(2.8rem,4.5vw,5.2rem)]"
                  id="faq-title"
                >
                  A technology partner from strategy through scale.
                </h2>
              </div>
            </FadeIn>
            <StaggerContainer
              className="border-t border-black/15 [&_details]:border-b [&_details]:border-black/15 [&_details]:p-0 [&_details[open]_summary]:after:rotate-45 [&_p]:max-w-[640px] [&_p]:pr-10 [&_p]:pb-6 [&_p]:leading-[1.65] [&_p]:text-[#5d5867] [&_summary]:relative [&_summary]:min-h-[72px] [&_summary]:cursor-pointer [&_summary]:list-none [&_summary]:py-[22px] [&_summary]:pr-10 [&_summary]:pb-5 [&_summary]:text-[1.18rem] [&_summary]:font-medium [&_summary]:after:absolute [&_summary]:after:top-[18px] [&_summary]:after:right-0.5 [&_summary]:after:text-2xl [&_summary]:after:font-light [&_summary]:after:transition-transform [&_summary]:after:content-['+'] [&_summary::-webkit-details-marker]:hidden"
              staggerDelay={0.1}
            >
              <StaggerItem>
                <details open>
                  <summary>What does DW Tech do?</summary>
                  <p className="text-[clamp(0.8rem,1vw,0.9rem)]">
                    We plan, design, build, integrate, and support custom
                    software, AI automation, ERP and CRM platforms, mobile and
                    web applications, cloud infrastructure, and digital
                    transformation programs.
                  </p>
                </details>
              </StaggerItem>
              <StaggerItem>
                <details>
                  <summary>Who do you work with?</summary>
                  <p className="text-[clamp(0.8rem,1vw,0.9rem)]">
                    We work with growing businesses and established
                    organizations that need practical technology to improve
                    operations, customer experience, and scale.
                  </p>
                </details>
              </StaggerItem>
              <StaggerItem>
                <details>
                  <summary>How does a project begin?</summary>
                  <p className="text-[clamp(0.8rem,1vw,0.9rem)]">
                    We start by understanding your business model, workflows,
                    users, current systems, constraints, and growth goals. That
                    context shapes the roadmap and technical approach.
                  </p>
                </details>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
