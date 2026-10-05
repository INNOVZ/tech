import {
  companyIdentity,
  contacts,
  locations,
  services,
  siteUrl,
} from "@/lib/site-data";

export function GET() {
  const body = `# DW Tech by Desert Whales

> ${companyIdentity.description}

In this file, DW Tech refers specifically to the company operating at ${siteUrl}: the technology division of ${companyIdentity.parentName}, with its global headquarters in ${companyIdentity.headquarters.city}, ${companyIdentity.headquarters.country}.

## Canonical pages
- Home: ${siteUrl}
- About DW Tech: ${siteUrl}/about
${services.map((service) => `- ${service.title}: ${siteUrl}/services/${service.slug}`).join("\n")}

## Services
${services.map((service) => `- ${service.title}: ${service.short}`).join("\n")}

## Locations
${locations.map(([location, role]) => `- ${location}: ${role}`).join("\n")}

## Contact
- Email: ${contacts.email}
- Website: ${siteUrl}
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
