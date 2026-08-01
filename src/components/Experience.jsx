import devPixelLogo from "../assets/wearedevpixel_logo.jpg";

const experiences = [
  {
    company: "DevPixel",
    logo: "devpixel",
    location: "Hyderabad, India",
    role: "Full-stack Developer",
    type: "Full-time",
    dates: "Sep 2025 – Present",
    duration: "9 months",
    summary: "Building production web and mobile applications across frontend, backend, Firebase, and React Native.",
    highlights: [
      "Develop scalable React.js and AngularJS interfaces with reusable UI patterns.",
      "Build Node.js APIs and Firebase-powered authentication, database, and real-time features.",
      "Ship React Native Android app features from implementation to Play Store release.",
    ],
    techStack: ["React.js", "AngularJS", "Node.js", "Firebase", "React Native"],
    current: true,
  },
  {
    company: "DevPixel",
    logo: "devpixel",
    location: "Hyderabad, India",
    role: "Full-stack Developer",
    type: "Internship",
    dates: "May 2025 – Aug 2025",
    duration: "4 months",
    summary: "Contributed to full-stack application features while learning professional engineering workflows.",
    highlights: [
      "Built Angular UI components and integrated them with Node.js REST APIs.",
      "Worked with MongoDB CRUD flows and improved existing application reliability.",
      "Participated in stand-ups, debugging sessions, and code reviews.",
    ],
    techStack: ["Angular", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    company: "Abhi Trainings",
    logo: "aws",
    location: "Remote",
    role: "AWS & DevOps Intern",
    type: "Certificate",
    dates: "Jul 2023",
    duration: "Completed",
    certificate: "/mohammed_soheb_aws_devops_certificate.pdf",
    summary: "Completed an AWS and DevOps internship program with a project certificate.",
    highlights: [
      "Learned AWS cloud fundamentals, deployment basics, and DevOps workflows.",
      "Completed the assigned internship project as part of the certification.",
      "Built a foundation in cloud delivery, automation, and CI/CD concepts.",
    ],
    techStack: ["AWS", "DevOps", "Cloud", "CI/CD"],
  },
  {
    company: "JSpiders",
    logo: "jspiders",
    location: "Hyderabad, India",
    role: "Java Full Stack Training",
    type: "Course",
    dates: "Jul 2024 – Feb 2025",
    duration: "8 months",
    summary: "Completed Java Full Stack training focused on backend, databases, and web technologies.",
    highlights: [
      "Built a strong foundation in Core Java, OOP, collections, exception handling, and JDBC.",
      "Practised SQL, database operations, and Java web application concepts.",
      "Learned frontend fundamentals with HTML, CSS, JavaScript, and React.js.",
    ],
    techStack: ["Java", "Spring", "Hibernate", "React.js", "SQL", "JavaScript"],
  },
];

function Logo({ type }) {
  if (type === "devpixel") {
    return <img src={devPixelLogo} alt="DevPixel" className="h-full w-full object-cover" />;
  }
  const map = { aws: ["AWS", "bg-amber-400 text-amber-950"], jspiders: ["JS", "bg-rose-400 text-rose-950"] };
  const [label, cls] = map[type] ?? ["?", "bg-slate-600 text-white"];
  return <span className={`flex h-full w-full items-center justify-center text-xs font-black ${cls}`}>{label}</span>;
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
      {/* heading */}
      <div className="mb-12 max-w-2xl">
        <p className="mono mb-2 text-xs font-medium tracking-widest text-indigo-400 uppercase">Career</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience & Training</h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          A focused snapshot of my full-stack work, internships, and technical training.
        </p>
      </div>

      {/* timeline */}
      <div className="relative flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <div key={`${exp.company}-${exp.role}-${exp.type}`} className="relative flex gap-6 pb-10">
            {/* vertical line */}
            {i < experiences.length - 1 && (
              <div className="absolute left-5 top-12 bottom-0 w-px bg-linear-to-b from-indigo-500/30 to-transparent" />
            )}

            {/* logo bubble */}
            <div className="relative z-10 mt-1 flex h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#0f1420]">
              <Logo type={exp.logo} />
            </div>

            {/* content */}
            <div className="flex-1 rounded-xl border border-white/8 bg-[#0d1119] p-5 transition-colors hover:border-indigo-500/20">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                    {exp.current && (
                      <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-indigo-400">{exp.company}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{exp.location} · {exp.type}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-medium text-slate-300">{exp.dates}</p>
                  <p className="text-xs text-slate-500">{exp.duration}</p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">{exp.summary}</p>

              <ul className="mt-3 flex flex-col gap-1.5">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-6 text-slate-500">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.techStack.map((t) => (
                  <span key={t} className="mono rounded-md border border-white/8 bg-white/3 px-2 py-0.5 text-[11px] text-slate-400">
                    {t}
                  </span>
                ))}
              </div>

              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
