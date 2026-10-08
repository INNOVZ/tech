"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu } from "@/components/icons";
import { Logo } from "@/components/logo";
import { button, shell } from "@/lib/styles";

const links = [
  ["Expertise", "/#services"],
  ["Approach", "/#approach"],
  ["Company", "/about"],
  ["Contact", "/#contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.menuOpen = String(open);
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  return (
    <header className="absolute top-0 left-0 z-20 w-full py-[22px]">
      <div
        className={`${shell} relative z-[2] grid grid-cols-[1fr_auto_1fr] items-center gap-7 max-[860px]:grid-cols-[1fr_auto]`}
      >
        <Logo />
        <nav
          className="flex items-center gap-[clamp(22px,3vw,48px)] max-[860px]:hidden"
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <Link
              className="relative grid min-h-11 place-items-center text-[.86rem] text-white/80 after:absolute after:bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-orchid after:transition-transform after:duration-250 after:ease-fluid after:content-[''] hover:after:scale-x-100"
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          className={`flex items-center p-1 gap-3 justify-self-end text-[.9rem] max-[860px]:hidden `}
          href="mailto:tech@thedesertwhales.com?subject=New%20project%20enquiry"
        >
          <span className="cta-link-text" data-text="Start a Conversation">Start a Conversation</span>
          <span className={`${button}`}>
            <ArrowUpRight />
          </span>
        </Link>
        <button
          className="hidden size-11 cursor-pointer place-items-center justify-self-end rounded-lg border border-white/20 bg-transparent p-2.5 max-[860px]:grid [&_svg]:size-[22px] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.6] [&_svg]:[stroke-linecap:round]"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        className="invisible fixed inset-0 z-[1] h-svh w-full -translate-y-full overflow-hidden bg-night pt-[88px] opacity-0 transition-[opacity,transform,visibility] duration-350 ease-fluid data-[open=true]:visible data-[open=true]:translate-y-0 data-[open=true]:opacity-100"
        data-open={open}
      >
        <nav
          className="flex min-h-0 flex-col gap-1 overflow-hidden px-[clamp(20px,4.2vw,72px)] pb-7 max-[620px]:px-5"
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => (
            <Link
              className="border-b border-white/20 py-4 text-2xl"
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            className={`${button} mt-4`}
            href="mailto:tech@thedesertwhales.com?subject=New%20project%20enquiry"
            onClick={() => setOpen(false)}
          >
            Start a conversation <span className={`${button} mt-4`}></span>{" "}
            <ArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
