import Link from "next/link";
import { Logo } from "@/components/logo";
import { Mail, Phone } from "@/components/icons";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { contacts } from "@/lib/site-data";
import { button, sectionLabel, shell } from "@/lib/styles";

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden bg-[radial-gradient(circle_at_90%_30%,rgba(83,29,160,.26),transparent_38%),#07070b] pt-[clamp(52px,1vh,66px)] pb-7 text-white before:absolute before:top-[-260px] before:right-[-260px] before:size-[720px] before:rounded-full before:border before:border-orchid/15 before:content-[''] max-[860px]:pt-[88px] max-[620px]:pt-[76px]"
      id="contact"
    >
      <div className={shell}>
        <div className="relative z-[1] grid grid-cols-[1.2fr_.8fr] items-end gap-[7vw] pb-[86px] max-[860px]:grid-cols-1">
          <FadeIn>
            <div>
              <p className={sectionLabel}>Contact</p>
              <h2 className="text-[clamp(4rem,7.5vw,8.8rem)] max-[620px]:text-[clamp(2.8rem,13vw,4.3rem)]">
                Let's build <span className="text-orchid">what's next.</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <p className="max-w-[490px] text-[clamp(0.8rem,1vw,0.9rem)] leading-[1.55] text-[#c3becb] mb-5">
                Tell us where your business needs to go. We'll help shape the
                technology to get there.
              </p>
              <Link
                className={button}
                href={`mailto:${contacts.email}?subject=New%20project%20enquiry`}
              >
                Start a conversation
              </Link>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.1}>
          <div className="relative z-[1] grid grid-cols-[.55fr_.8fr_1.65fr] items-start gap-[30px] border-t border-white/20 py-[34px] max-[860px]:grid-cols-2 max-[620px]:grid-cols-1">
            <Logo />
            <p className="text-[.86rem] text-[#9791a3] justify-self-start items-center mt-2">
              Technology for a more human tomorrow.
            </p>
            <div className="grid grid-cols-2 gap-2.5 max-[860px]:col-span-full max-[620px]:col-auto max-[620px]:grid-cols-1 [&_a]:flex [&_a]:min-h-8 [&_a]:items-center [&_a]:gap-2.5 [&_a]:text-[.84rem] [&_a_svg]:size-[18px] [&_a_svg]:fill-none [&_a_svg]:stroke-current [&_a_svg]:stroke-[1.7] [&_a_svg]:[stroke-linecap:round] [&_a_svg]:[stroke-linejoin:round]">
              <a
                className="row-span-3 self-start max-[620px]:row-auto"
                href={`mailto:${contacts.email}`}
              >
                <Mail />
                {contacts.email}
              </a>
              {contacts.phones.map(([country, number]) => (
                <a key={country} href={`tel:${number.replace(/\s/g, "")}`}>
                  <Phone />
                  {number}{" "}
                  <span className="text-[.7rem] text-[#7f7988] uppercase">
                    {country}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
        <div className="relative z-[1] flex items-center justify-between border-t border-white/20 pt-[22px] text-[.72rem] text-[#77717f] max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-3.5">
          <p className="m-0">
            © {new Date().getFullYear()} DW Tech. A Desert Whales initiative.
          </p>
          <div className="flex gap-5">
            <Link href="/sitemap.xml">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
