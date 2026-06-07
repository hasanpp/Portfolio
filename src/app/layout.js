import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Developer Metadata Payload
const devMetadata = {
  developer: {
    name: "Hasan Pulikkal",
    alias: "Hasan P P",
    role: "Jr Software Developer",
    current_position: "Junior Software Developer at CrelioHealth",
    bio_summary: "I am a Full Stack Developer focused on building clean, reliable web applications. My core toolkit includes Python, Django, and React.js, with a strong emphasis on writing maintainable backend logic and building structured user interfaces.",
    contact: {
      email: "hasanpp02@gmail.com",
      whatsapp: "+919495707125",
      linkedin: "https://www.linkedin.com/in/hasanpulikkal",
      github: "https://github.com/hasanpp",
      instagram: "https://www.instagram.com/hasan_pulikkal"
    }
  }
};

export const metadata = {
  title: "Hasan Pulikkal // Full Stack Web Developer",
  description: devMetadata.developer.bio_summary,
  keywords: [
    "Hasan Pulikkal",
    "Hasan P P",
    "Jr Software Developer",
    "CrelioHealth",
    "Brototype Alumni",
    "Python",
    "Django",
    "React.js"
  ],
  authors: [{ name: devMetadata.developer.name }],
  openGraph: {
    title: "Hasan Pulikkal // Full Stack Web Developer",
    description: devMetadata.developer.bio_summary,
    url: "https://github.com/hasanpp",
    siteName: "Hasan Pulikkal Portfolio",
    type: "profile",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 800,
        height: 800,
        alt: devMetadata.developer.name,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  // Construct JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": devMetadata.developer.name,
    "alternateName": devMetadata.developer.alias,
    "jobTitle": devMetadata.developer.role,
    "worksFor": {
      "@type": "Organization",
      "name": "CrelioHealth",
      "sameAs": "https://creliohealth.com"
    },
    "description": devMetadata.developer.bio_summary,
    "url": "https://github.com/hasanpp",
    "image": "/assets/profile.jpg",
    "sameAs": [
      devMetadata.developer.contact.linkedin,
      devMetadata.developer.contact.github,
      devMetadata.developer.contact.instagram
    ],
    "knowsAbout": [
      "Python", "Django", "Django REST Framework", "WebSockets",
      "React.js", "JavaScript (ES6+)", "Tailwind CSS",
      "PostgreSQL", "Git & GitHub", "REST APIs"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-space-black text-slate-200 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
