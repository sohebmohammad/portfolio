import devPixelLogo from "../assets/wearedevpixel_logo.jpg";

const experiences = [
  {
    company: "DevPixel",
    logo: "devpixel",
    location: "Hyderabad, Telangana, India",
    role: "Full-stack Developer",
    type: "Full-time",
    dates: "Sep 2025 - Present",
    duration: "9 months",
    summary:
      "Building production web and mobile applications across frontend, backend, Firebase, and React Native.",
    highlights: [
      "Develop scalable React.js and AngularJS interfaces with reusable UI patterns.",
      "Build Node.js APIs and Firebase-powered authentication, database, and real-time features.",
      "Ship React Native Android app features from implementation to release support.",
    ],
    techStack: ["React.js", "AngularJS", "Node.js", "Firebase", "React Native"],
  },
  {
    company: "DevPixel",
    logo: "devpixel",
    location: "Hyderabad, Telangana, India",
    role: "Full-stack Developer",
    type: "Internship",
    dates: "May 2025 - Aug 2025",
    duration: "4 months",
    summary:
      "Contributed to full-stack application features while learning professional engineering workflows.",
    highlights: [
      "Built Angular UI components and integrated them with Node.js REST APIs.",
      "Worked with MongoDB CRUD flows and improved existing application reliability.",
      "Participated in stand-ups, team discussions, debugging, and code reviews.",
    ],
    techStack: ["Angular", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    company: "Abhi Trainings",
    logo: "aws",
    location: "Remote",
    role: "AWS and DevOps Intern",
    type: "Internship Certificate",
    dates: "Jul 20, 2023",
    duration: "Completed",
    certificate: "/mohammed_soheb_aws_devops_certificate.pdf",
    summary:
      "Completed an AWS and DevOps internship program with a project certificate.",
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
    location: "Dilsukhnagar, Hyderabad",
    role: "Java Full Stack Development",
    type: "Course",
    dates: "Jul 2024 - Feb 2025",
    duration: "8 months",
    summary:
      "Completed Java Full Stack training focused on backend development, databases, and web technologies.",
    highlights: [
      "Built a strong foundation in Core Java, OOP, collections, exception handling, and JDBC.",
      "Practiced SQL, database operations, and Java web application concepts.",
      "Learned frontend fundamentals with HTML, CSS, JavaScript, and React.js.",
    ],
    techStack: ["Java", "JavaScript", "React.js", "HTML", "CSS", "SQL", "Spring", "Hibernate"],
  },
];

function CompanyLogo({ type }) {
  if (type === "devpixel") {
    return (
      <img
        src={devPixelLogo}
        alt="DevPixel logo"
        className="h-full w-full object-cover"
      />
    );
  }

  const logoText = type === "aws" ? "AWS" : "JS";
  const logoColor = type === "aws" ? "bg-amber-300" : "bg-rose-300";

  return (
    <span className={`flex h-full w-full items-center justify-center ${logoColor} text-sm font-black text-slate-950`}>
      {logoText}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase text-cyan-300">Experience</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Experience and training</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          A focused snapshot of my full-stack work, internships, and technical
          training.
        </p>
      </div>

      <div className="grid gap-4">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}-${experience.type}`}
            className="rounded-lg border border-white/10 bg-[#151923] p-5 transition-colors hover:border-cyan-300/30"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0c1f24]">
                <CompanyLogo type={experience.logo} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-cyan-300">{experience.company}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{experience.role}</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {experience.location} - {experience.type}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 lg:text-right">
                    <p className="text-sm font-semibold text-white">{experience.dates}</p>
                    <p className="mt-1 text-xs text-slate-500">{experience.duration}</p>
                  </div>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
                  {experience.summary}
                </p>

                <ul className="mt-4 grid gap-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-cyan-300/15 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {experience.certificate && (
                  <a
                    href={experience.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-md border border-cyan-300/20 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  >
                    View certificate
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
