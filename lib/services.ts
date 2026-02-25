// Central data file for all inspection service pages

export interface Service {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    /** Key things done during this inspection */
    steps: { icon: string; heading: string; detail: string }[];
    /** Key takeaways / outcomes */
    outcomes: string[];
    /** Who this is for */
    audience: string;
}

export const services: Service[] = [
    {
        slug: "clinical-examination",
        title: "Clinical Examination",
        tagline: "Comprehensive on-farm health assessments by certified vets.",
        description:
            "A thorough head-to-tail physical examination of individual animals or herds, identifying signs of illness, injury, or nutritional deficiency early—before they escalate into costly emergencies.",
        heroImage: "/home/vet.jpeg",
        audience: "Farm owners, livestock managers, and agribusinesses.",
        steps: [
            {
                icon: "🩺",
                heading: "Physical Assessment",
                detail: "Vital signs, body condition scoring, and hands-on examination of all major body systems.",
            },
            {
                icon: "🔬",
                heading: "Sample Collection",
                detail: "Blood, urine, and faecal samples collected where indicated for lab analysis.",
            },
            {
                icon: "💊",
                heading: "Treatment & Prescription",
                detail: "On-the-spot treatment administered; follow-up prescriptions issued where required.",
            },
            {
                icon: "📋",
                heading: "Digital Report",
                detail: "Full clinical report delivered securely to your account within 24 hours.",
            },
        ],
        outcomes: [
            "Early detection of disease before spread to the herd",
            "Documented health records for regulatory compliance",
            "Tailored treatment plans per animal",
            "Reduced losses and improved productivity",
        ],
    },
    {
        slug: "livestock-valuation-inspection",
        title: "Livestock Valuation Inspection",
        tagline: "Accurate, impartial valuations for trade, finance, and insurance.",
        description:
            "Our certified vets conduct detailed assessments to determine the fair market value of livestock—essential for loan applications, insurance policies, estate settlements, and sale agreements.",
        heroImage: "/home/vet.jpeg",
        audience: "Banks, insurers, farmers, and legal professionals.",
        steps: [
            {
                icon: "📸",
                heading: "Animal Identification",
                detail: "Tagging, marking, and photographic documentation of each animal.",
            },
            {
                icon: "⚖️",
                heading: "Condition Scoring",
                detail: "Body weight estimation, age assessment, and breed classification.",
            },
            {
                icon: "📊",
                heading: "Market Benchmarking",
                detail: "Current market data used to derive accurate valuations per species and category.",
            },
            {
                icon: "📄",
                heading: "Valuation Certificate",
                detail: "Professionally signed and stamped valuation report suitable for financial institutions.",
            },
        ],
        outcomes: [
            "Bank and insurance-acceptable valuation reports",
            "Fair price discovery for buyers and sellers",
            "Legal-grade documentation",
            "Quick turnaround — report within 24 hours",
        ],
    },
    {
        slug: "postmortem-inspection",
        title: "Postmortem Inspection",
        tagline: "Understanding animal loss so you can prevent it happening again.",
        description:
            "When an animal dies unexpectedly, a postmortem examination (PME) is critical for determining the cause of death, supporting insurance claims, and protecting the rest of your herd from potential spread of disease.",
        heroImage: "/home/vet.jpeg",
        audience: "Livestock owners, insurers, and herd managers.",
        steps: [
            {
                icon: "🕵️",
                heading: "Scene Assessment",
                detail: "History review and on-site inspection of circumstances surrounding the death.",
            },
            {
                icon: "🔬",
                heading: "Gross Necropsy",
                detail: "Systematic examination of all organ systems by a certified vet.",
            },
            {
                icon: "🧪",
                heading: "Lab Submission",
                detail: "Tissue samples submitted for histopathology and toxicology where indicated.",
            },
            {
                icon: "📋",
                heading: "PME Certificate",
                detail: "Official cause-of-death report for insurance, legal, or herd management use.",
            },
        ],
        outcomes: [
            "Confirmed cause of death for insurance claims",
            "Early warning for contagious disease outbreaks",
            "Actionable herd management recommendations",
            "Full legal and regulatory documentation",
        ],
    },
    {
        slug: "disease-risk-assessment",
        title: "Disease Risk Assessment",
        tagline: "Proactive protection — know your risks before they become reality.",
        description:
            "A structured farm-wide evaluation of all biosecurity measures, herd health history, housing, water, nutrition, and environmental factors to identify and rank disease risks before they materialise.",
        heroImage: "/home/vet.jpeg",
        audience: "Commercial farms, cooperatives, and development programmes.",
        steps: [
            {
                icon: "🏡",
                heading: "Farm Audit",
                detail: "Biosecurity protocols, housing hygiene, feed storage, and water quality reviewed.",
            },
            {
                icon: "📖",
                heading: "Health History Review",
                detail: "Past disease events, vaccination records, and treatment histories examined.",
            },
            {
                icon: "📈",
                heading: "Risk Mapping",
                detail: "Risks ranked by likelihood and impact using a structured risk matrix.",
            },
            {
                icon: "🛡️",
                heading: "Mitigation Plan",
                detail: "Prioritised, practical recommendations with timelines and expected outcomes.",
            },
        ],
        outcomes: [
            "Clear picture of your farm's disease vulnerability",
            "Prioritised action plan to reduce risk exposure",
            "Improved biosecurity and herd resilience",
            "Lower long-term veterinary costs",
        ],
    },
    {
        slug: "ongoing-herd-health-monitoring",
        title: "Ongoing Herd Health Monitoring",
        tagline: "Continuous veterinary oversight — without a full-time vet on payroll.",
        description:
            "A subscription-based service where your herd receives scheduled check-ins, seasonal health plans, and priority emergency response — all managed through the RapidVets platform.",
        heroImage: "/home/vet.jpeg",
        audience: "Large farms, cooperatives, and agribusiness investors.",
        steps: [
            {
                icon: "📅",
                heading: "Scheduled Visits",
                detail: "Regular on-farm visits aligned to your production cycle and seasonal risks.",
            },
            {
                icon: "💉",
                heading: "Vaccination Management",
                detail: "Vaccine calendars planned, administered, and documented on your behalf.",
            },
            {
                icon: "📱",
                heading: "Remote Monitoring",
                detail: "Platform dashboard with health trends, upcoming tasks, and alerts.",
            },
            {
                icon: "🚨",
                heading: "Priority Emergency Response",
                detail: "Subscribers go to the front of the queue for emergency dispatch.",
            },
        ],
        outcomes: [
            "Fewer disease outbreaks and production losses",
            "Complete vaccination and treatment records",
            "Dedicated vet relationship for your farm",
            "Priority emergency access 24/7",
        ],
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
