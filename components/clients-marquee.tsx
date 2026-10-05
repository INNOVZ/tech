"use client";

import { FadeIn } from "@/components/motion";
import { sectionLabel } from "@/lib/styles";

const clients = [
  { name: "Beever Academy", src: "/clients/BEEVER ACADEMY.png" },
  { name: "Landtech Trading", src: "/clients/Landtech Trading.png" },
  { name: "TopGun", src: "/clients/TopGun_Logo_Web_Blk_1.png" },
  { name: "Ambassadors", src: "/clients/ambassadorscentworks (1).png" },
  { name: "Crystal", src: "/clients/crystal.png" },
  { name: "Fort Financial Advisor", src: "/clients/fort fiancial advisor.png" },
  // { name: "Sachiel", src: "/clients/sachiel.png" },
  { name: "The Cafika", src: "/clients/the-cafika-logos.png" },
];

export function ClientsMarquee() {
  return (
    <div className="mt-[clamp(52px,6vw,80px)] grid grid-cols-1 lg:grid-cols-[.6fr_1.4fr] gap-10 items-center">
      <FadeIn className="flex items-center h-full">
        <h2 className={`${sectionLabel} !text-black !m-0`}>Our Clients & Partners</h2>
      </FadeIn>
      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-[max-content] animate-marquee gap-10 items-center">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              className="flex-shrink-0 flex items-center justify-center px-4"
              key={index}
              title={client.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.src}
                alt={client.name}
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
