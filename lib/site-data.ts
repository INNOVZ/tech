export const siteUrl = "https://www.dwhalestech.com";

export const companyIdentity = {
  name: "DW Tech",
  alternateName: "DW Tech by Desert Whales",
  parentName: "Desert Whales Marketing Services LLC",
  description:
    "DW Tech is the Dubai-headquartered technology and digital-transformation division of Desert Whales Marketing Services LLC which offers Web and mobile development solutions and AI Automations and workflow for businesses.",
  headquarters: {
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },
} as const;

export const services = [
  {
    slug: "digital-business-transformation",
    title: "Digital business transformation",
    short: "Modernize operations and connect teams, data, and workflows around measurable business outcomes.",
    description: "We turn fragmented, manual operations into connected digital ecosystems. The work starts with your operating model and ends with scalable systems your teams can adopt and grow.",
    deliverables: ["Transformation roadmap", "Process and platform architecture", "Automation opportunities", "Adoption and optimization plan"],
  },
  {
    slug: "custom-software-development",
    title: "Custom software development",
    short: "Purpose-built web and software products shaped around real operational requirements.",
    description: "From internal tools to customer-facing platforms, we design and engineer dependable software around your workflows, integrations, users, and growth plans.",
    deliverables: ["Product discovery", "Solution architecture", "Full-stack engineering", "Quality assurance and release"],
  },
  {
    slug: "erp-crm-solutions",
    title: "ERP & CRM solutions",
    short: "Centralize sales, operations, inventory, finance, and customer relationships in one working system.",
    description: "We implement and tailor ERP and CRM ecosystems that improve visibility, reduce duplication, and give teams a consistent source of operational truth.",
    deliverables: ["Workflow mapping", "Platform configuration", "Data migration and integration", "Training and support"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile app development",
    short: "High-performance mobile experiences designed for the way customers and teams work.",
    description: "We create intuitive cross-platform and native-ready mobile products with secure integrations, reliable performance, and a clear release path.",
    deliverables: ["Experience design", "Mobile engineering", "API integration", "Store release support"],
  },
  {
    slug: "ai-automation-solutions",
    title: "AI & automation solutions",
    short: "Practical AI, assistants, and workflow automation embedded where they create business value.",
    description: "We identify repeatable work, connect the right data, and deploy governed AI and automation that improves speed without losing human oversight.",
    deliverables: ["AI opportunity assessment", "Workflow automation", "Knowledge assistants and chatbots", "Monitoring and iteration"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX design",
    short: "Clear, inclusive product experiences grounded in user needs and business goals.",
    description: "We turn complex requirements into coherent product flows, interface systems, and prototypes that teams can validate and engineers can build.",
    deliverables: ["User and stakeholder research", "Information architecture", "Interface and design systems", "Interactive prototypes"],
  },
 
  {
    slug: "ecommerce-marketplace-solutions",
    title: "E-commerce & marketplace solutions",
    short: "Connected commerce platforms across storefront, payments, inventory, and operations.",
    description: "We create and integrate commerce experiences that keep the customer journey, catalog, orders, payments, and back-office operations in sync.",
    deliverables: ["Commerce experience design", "Shopify and custom development", "Marketplace and payment integrations", "Analytics and optimization"],
  },
  {
    slug: "it-consulting-technology-strategy",
    title: "IT consulting & technology strategy",
    short: "A practical technology roadmap aligned with business priorities, risk, and growth.",
    description: "We help leadership teams make clear technology decisions, sequence investments, assess platforms, and establish an execution model that can scale.",
    deliverables: ["Technology assessment", "Target architecture", "Vendor and platform evaluation", "Delivery roadmap"],
  },
] as const;

export const processSteps = [
  ["Discover", "Understand the business model, operations, pain points, and growth opportunities."],
  ["Strategize", "Build a focused digital-transformation roadmap and technology strategy."],
  ["Design & develop", "Create intuitive experiences and scalable technology solutions."],
  ["Integrate & automate", "Connect platforms, data, and intelligent workflows."],
  ["Optimize & scale", "Improve performance continuously with support, analytics, and iteration."],
] as const;

export const locations = [
  ["Dubai, UAE", "Global headquarters & Middle East operations"],
  ["Kerala, India", "Kerala operations & business support center"],
  ["Riyadh, Saudi Arabia", "Regional expansion & business development"],
  ["Milan, Italy", "European business & creative collaboration network"],
] as const;

export const contacts = {
  email: "tech@thedesertwhales.com",
  website: "dwhalestech.com",
  phones: [
    ["UAE", "+971 52 867 8679"]
  ],
} as const;
