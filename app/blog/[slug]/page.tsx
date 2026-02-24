import Link from "next/link";
import { notFound } from "next/navigation";

type Category = "pets" | "livestock" | "clinic";

type Section = {
  heading: string;
  body: string[];
};

type BlogPost = {
  slug: string;
  title: string;
  category: Category;
  date: string;
  readTime: string;
  intro: string;
  sections: Section[];
};

const categoryLabels: Record<Category, string> = {
  pets: "Pets",
  livestock: "Livestock",
  clinic: "Inside the clinic",
};

const categoryStyles: Record<Category, string> = {
  pets: "border-orange-100 bg-orange-50 text-orange-700",
  livestock: "border-emerald-100 bg-emerald-50 text-emerald-700",
  clinic: "border-sky-100 bg-sky-50 text-sky-700",
};

const posts: BlogPost[] = [
  {
    slug: "first-24-hours-with-a-new-puppy",
    title: "First 24 hours with a new puppy",
    category: "pets",
    date: "Jan 2025",
    readTime: "4 min read",
    intro:
      "Those first 24 hours shape how safe and settled your new puppy feels in your home. Here’s a simple plan you can actually follow.",
    sections: [
      {
        heading: "1. Set up a calm landing zone",
        body: [
          "Choose one quiet area where your puppy will sleep and rest. A crate or playpen with a soft bed, water and a safe chew toy is perfect.",
          "Keep kids, visitors and other pets gentle and low-key around this space so your puppy doesn’t get overwhelmed.",
        ],
      },
      {
        heading: "2. Keep the first day simple",
        body: [
          "Short play, short naps, short toilet trips. Repeat. No long walks or noisy visits.",
          "Stick to the food they were eating before to avoid tummy upsets.",
        ],
      },
      {
        heading: "3. Night time expectations",
        body: [
          "It’s normal for a puppy to cry the first night. Stay nearby and speak softly.",
          "If they need a toilet break, keep lights low and interactions boring.",
        ],
      },
    ],
  },
  {
    slug: "is-this-an-emergency-or-can-it-wait",
    title: "Is this an emergency or can it wait?",
    category: "pets",
    date: "Jan 2025",
    readTime: "3 min read",
    intro:
      "Not every scare needs a rush to the vet—but some things truly can’t wait. Here’s how to tell the difference.",
    sections: [
      {
        heading: "Red flag signs",
        body: [
          "Struggling to breathe or collapse.",
          "Heavy bleeding or deep wounds.",
          "Repeated vomiting with weakness.",
          "Seizures or sudden severe pain.",
        ],
      },
      {
        heading: "Probably safe to monitor",
        body: [
          "Mild diarrhoea in an otherwise bright pet.",
          "Small surface wounds that are not bleeding heavily.",
        ],
      },
      {
        heading: "When in doubt",
        body: [
          "Call the clinic and describe what you see. We’d rather talk through a false alarm than miss something serious.",
        ],
      },
    ],
  },
  {
    slug: "checklist-before-a-livestock-valuation",
    title: "Checklist before a livestock valuation",
    category: "livestock",
    date: "Dec 2024",
    readTime: "5 min read",
    intro:
      "Preparation makes your livestock valuation faster, smoother and more accurate.",
    sections: [
      {
        heading: "1. Know your herd numbers",
        body: [
          "Prepare a count of animals by category (calves, cows, bulls, etc).",
          "Ensure identification tags are visible or recorded.",
        ],
      },
      {
        heading: "2. Gather records",
        body: [
          "Milk production logs and health records strengthen your valuation report.",
        ],
      },
      {
        heading: "3. Prepare access",
        body: [
          "Ensure animals can be safely viewed and handled during inspection.",
        ],
      },
    ],
  },
  {
    slug: "simple-herd-health-habits-that-pay-off",
    title: "Simple herd health habits that pay off",
    category: "livestock",
    date: "Nov 2024",
    readTime: "4 min read",
    intro:
      "Small consistent habits often make the biggest financial difference on a farm.",
    sections: [
      {
        heading: "Clean water",
        body: ["Dirty troughs increase disease risk. Clean regularly."],
      },
      {
        heading: "Routine prevention",
        body: [
          "Follow vaccination and parasite control plans instead of reacting late.",
        ],
      },
      {
        heading: "Act early",
        body: [
          "Train staff to notice subtle changes in appetite or behaviour.",
        ],
      },
    ],
  },
  {
    slug: "how-we-keep-anxious-pets-calmer",
    title: "How we keep anxious pets calmer at the clinic",
    category: "clinic",
    date: "Oct 2024",
    readTime: "3 min read",
    intro:
      "Vet visits don’t have to be traumatic. Here’s how we reduce stress for pets.",
    sections: [
      {
        heading: "Calm environment",
        body: ["We minimise noise and rushing where possible."],
      },
      {
        heading: "Gentle handling",
        body: [
          "Slow movements and breaks during exams help anxious pets settle.",
        ],
      },
      {
        heading: "What you can do",
        body: [
          "Bring treats and use carriers for positive experiences, not just vet visits.",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Next 16: params is a Promise, so we await it
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HEADER */}
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-3xl px-4 pt-24 pb-10">
          <Link href="/blog" className="text-sm text-orange-600 hover:underline">
            ← Back to blog
          </Link>

          <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
            <span
              className={`inline-flex rounded-full border px-2 py-0.5 ${categoryStyles[post.category]}`}
            >
              {categoryLabels[post.category]}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            {post.intro}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        {post.sections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">
              {section.heading}
            </h2>
            {section.body.map((paragraph, index) => (
              <p key={index} className="mb-3 text-sm text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}