import { useState, useRef, useEffect, useCallback } from "react";
import CalloutCard from "../components/shared/CalloutCard";
import Button from "../components/shared/Button";
import OpenRoleCard from "../components/shared/OpenRoleCard";
import SocialMediaLinkCard from "../components/shared/SocialMediaLinkCard";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";

const HERO_CONTENT = {
  title: { bold: "join", regular: " our team" },
  subtitle:
    "gain real-world experience in the tech industry and work with other passionate students, all while making a positive impact in your community.",
  callout: {
    title: "BLUEPRINT IS RIGHT FOR YOU IF YOU ARE...",
    body: "• A post-secondary student in Greater Vancouver\n• Passionate about creating meaningful impact in your community\n• Interested in tech, design, or project management and excited to grow through real, collaborative project work",
  },
};

const EXPERIENCE_CONTENT = {
  heading: "a typical experience at sfu blueprint",
  body: "Teams of roughly ten Blueprint members will work together to bring a project from its earliest stages to final client handoff. Cross-functional collaboration is the core of all Blueprint projects!",
};

const ROLES = [
  {
    title: "project manager",
    description:
      "Defining project requirements and timelines, and supporting the team by outlining weekly deliverables and keeping the project on track.",
    color: "bg-blueprint-orange",
  },
  {
    title: "designer",
    description:
      "Crafting user experiences and interfaces that are intuitive, accessible, and visually aligned with the project's goals.",
    color: "bg-blueprint-accent-purple",
  },
  {
    title: "developer",
    description:
      "Building and implementing the technical solution, writing clean code, and collaborating to bring the design to life.",
    color: "bg-blueprint-roleAccent-dev",
  },
];

const TIMELINE_CONTENT = {
  heading: "work with a timeline",
  body: "Projects typically run for about 8 months. The first 2-3 months focus on design, followed by development and testing for the remaining 6 months (timelines may vary by project). Students commit around 10 hours per week, with project work intentionally slowing down during midterms and finals to help students balance responsibilities.",
};

const SOCIALS_CONTENT = {
  heading: "go to socials and events!",
  body: "Meet new people, build real connections, and join a community that supports your growth—both personally and professionally.",
};

const APPLICATION_TABS = [
  "MEET BLUEPRINT",
  "APPLY",
  "INTERVIEW",
  "FINAL DECISION",
  "ONBOARDING",
] as const;

const APPLICATION_TAB_CONTENT: Record<string, { title: string; description: string[] }> = {
  "MEET BLUEPRINT": {
    title: "",
    description: [
      "We host info session events once a semester; join us to have fun and hear directly from our team members about the Blueprint experience!",
      "You can also stay updated with our projects and other events on our social media, on Instagram and Linkedin, as well as in our Discord community. (On Discord, we have a channel where you can ask our team questions!)",
    ],
  },
  APPLY: {
    title: "",
    description: [
      "Submit your application through the form linked in our hiring announcements. We'll ask about your experience, interests, and why you want to join Blueprint.",
      "Applications are typically open for 1-2 weeks at the start of each semester.",
    ],
  },
  INTERVIEW: {
    title: "",
    description: [
      "If your application moves forward, we'll invite you to an interview with current Blueprint members. This is a chance for us to get to know you and for you to learn more about our team.",
      "Interviews are casual and conversational — no trick questions!",
    ],
  },
  "FINAL DECISION": {
    title: "",
    description: [
      "After interviews, our team reviews all candidates and makes final decisions. We aim to notify everyone within a week of completing interviews.",
      "We value diverse perspectives and look for candidates who are passionate about social good and collaborative work.",
    ],
  },
  ONBOARDING: {
    title: "",
    description: [
      "Welcome to Blueprint! New members go through an onboarding process where you'll meet your team, learn our workflows, and start contributing to your project.",
      "You'll be paired with experienced members who can help you get up to speed quickly.",
    ],
  },
};

const OPEN_POSITIONS = [
  { title: "senior developer", count: 3, roleType: "dev" as const, href: "#" },
  { title: "designer", count: 3, roleType: "designer" as const, href: "#" },
  { title: "product manager", count: 3, roleType: "pm" as const, href: "#" },
  { title: "event coordinator", count: 3, roleType: "executive" as const, href: "#" },
];

const SOCIAL_LINKS = [
  {
    platform: "instagram",
    description:
      "Follow us on Instagram to stay updated on events and see what our team is working on.",
    href: "https://www.instagram.com/sfublueprint/",
    accentColor: "#FFC3E8",
    icon: <InstagramIcon className="w-full h-full text-blueprint-black" />,
  },
  {
    platform: "youtube",
    description:
      "Subscribe to our Youtube channel for our Career Talks podcast series!",
    href: "https://www.youtube.com/@sfublueprint",
    accentColor: "#FFB347",
    icon: <YoutubeIcon className="w-full h-full text-blueprint-black" />,
  },
  {
    platform: "discord",
    description:
      "Join our Discord for hiring announcements and a place to ask any questions about Blueprint!",
    href: "https://discord.gg/sfublueprint",
    accentColor: "#9CC0FF",
    icon: <DiscordIcon className="w-full h-full text-blueprint-black" />,
  },
  {
    platform: "linkedin",
    description:
      "Curious to see what our members are up to? Connect with Blueprint on Linkedin!",
    href: "https://www.linkedin.com/company/sfublueprint/",
    accentColor: "#71EC59",
    icon: <LinkedinIcon className="w-full h-full text-blueprint-black" />,
  },
];

const StudentsPage = () => {
  const scrollToPositions = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Hero Section - Dark Background */}
      <section className="relative bg-blueprint-black overflow-hidden">
        {/* Decorative cross-point background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Vertical line */}
          <div className="hidden lg:block absolute right-[calc(50%-287px)] top-0 bottom-0 w-px border-l border-dashed border-blueprint-darkGrey opacity-40" />
          {/* Horizontal line */}
          <div className="hidden lg:block absolute left-0 right-0 top-[280px] h-px border-t border-dashed border-blueprint-darkGrey opacity-40" />
          {/* Concentric arcs (decorative circles) */}
          <div className="hidden lg:block absolute right-[-200px] top-[-300px]">
            {/* Small arc */}
            <div className="absolute right-[80px] top-[320px] w-[382px] h-[382px] rounded-full border border-dashed border-blueprint-darkGrey opacity-30" />
            {/* Medium arc */}
            <div className="absolute right-[-100px] top-[140px] w-[734px] h-[734px] rounded-full border border-dashed border-blueprint-darkGrey opacity-30" />
            {/* Large arc */}
            <div className="absolute right-[-270px] top-[-30px] w-[1076px] h-[1076px] rounded-full border border-dashed border-blueprint-darkGrey opacity-30" />
          </div>
          {/* Colored accent arcs */}
          <div className="hidden lg:block">
            <div className="absolute right-[60px] top-[160px] w-[200px] h-[200px]">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <path
                  d="M 200 100 A 100 100 0 0 0 100 0"
                  stroke="#0146BE"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="absolute right-[-40px] top-[380px] w-[200px] h-[200px]">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <path
                  d="M 0 100 A 100 100 0 0 0 100 200"
                  stroke="#71EC59"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="absolute right-[-120px] top-[520px] w-[200px] h-[200px]">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <path
                  d="M 0 100 A 100 100 0 0 1 100 0"
                  stroke="#D2A6FB"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
          {/* Plus sign at intersection */}
          <div className="hidden lg:block absolute right-[calc(50%-303px)] top-[264px] w-8 h-8">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-full h-full text-blueprint-darkGrey opacity-60"
            >
              <line
                x1="16"
                y1="4"
                x2="16"
                y2="28"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="4"
                y1="16"
                x2="28"
                y2="16"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 xl:px-36 pt-[142px] pb-[100px] max-md:pt-[90px] max-md:pb-[60px]">
          {/* Title + Button row */}
          <div className="flex justify-between items-start gap-8 max-md:flex-col max-md:gap-6 mb-[60px] max-md:mb-[35px]">
            {/* Title Block */}
            <div className="flex flex-col gap-6 max-md:gap-3 text-white max-w-[954px]">
              <h1
                className="font-poppins text-[96px] leading-none tracking-[-1.92px]
                           max-md:text-[56px] max-md:tracking-[-1.12px]"
              >
                <strong className="font-bold">{HERO_CONTENT.title.bold}</strong>
                <span className="font-normal">{HERO_CONTENT.title.regular}</span>
              </h1>
              <p
                className="font-poppins text-[30px] leading-[1.4] tracking-[-0.6px] max-w-[790px]
                           max-md:text-[20px] max-md:leading-[1.4] max-md:tracking-[-0.4px]"
              >
                {HERO_CONTENT.subtitle}
              </p>
            </div>

            {/* Open Positions Button */}
            <div className="shrink-0 lg:mt-[138px]">
              <Button onClick={scrollToPositions} className="w-[200px] max-md:w-full">
                OPEN POSITIONS
              </Button>
            </div>
          </div>

          {/* Callout Card */}
          <div className="max-w-[647px] max-md:max-w-full">
            <CalloutCard
              title={HERO_CONTENT.callout.title}
              body={HERO_CONTENT.callout.body}
              stripeColor="#71EC59"
              variant="dark"
              backgroundColor="#404040"
              titleColor="#FFFFFF"
              bodyColor="#FFFFFF"
            />
          </div>
        </div>
      </section>

      {/* Typical Experience Section */}
      <section className="w-full px-6 md:px-10 xl:px-36 pt-[108px] max-md:pt-[60px]">
        {/* Section Intro */}
        <div className="max-w-[852px] mb-[90px] max-md:mb-[50px]">
          <h2
            className="font-poppins text-[48px] leading-none tracking-[-0.96px] text-blueprint-black mb-[24px]
                       max-md:text-[28px] max-md:tracking-[-0.56px] max-md:mb-[16px]"
          >
            <strong className="font-bold">a typical experience</strong>
            <span className="font-normal"> at sfu blueprint</span>
          </h2>
          <p
            className="font-poppins text-[16px] leading-normal text-blueprint-black max-w-[852px]
                       max-md:text-[14px]"
          >
            {EXPERIENCE_CONTENT.body}
          </p>
        </div>

        {/* Work with a Team */}
        <div className="mb-[90px] max-md:mb-[50px]">
          <h3
            className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black mb-[40px]
                       max-md:text-[22px] max-md:tracking-[-0.44px] max-md:mb-[24px]"
          >
            work with a team
          </h3>

          {/* Role Cards */}
          <div className="flex flex-wrap justify-center gap-6 max-md:flex-col max-md:items-center">
            {ROLES.map((role, index) => (
              <RoleCard
                key={role.title}
                title={role.title}
                description={role.description}
                color={role.color}
                offset={index}
              />
            ))}
          </div>
        </div>

        {/* Work with a Timeline */}
        <div className="mb-[90px] max-md:mb-[50px]">
          <h3
            className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black mb-[24px]
                       max-md:text-[22px] max-md:tracking-[-0.44px] max-md:mb-[16px]"
          >
            {TIMELINE_CONTENT.heading}
          </h3>
          <p
            className="font-poppins text-[16px] leading-normal text-blueprint-black max-w-[584px]
                       max-md:text-[14px] max-md:max-w-full"
          >
            {TIMELINE_CONTENT.body}
          </p>

          {/* Timeline image placeholder */}
          <div className="mt-[36px] w-full h-[289px] max-md:h-[131px] bg-blueprint-gray-light rounded-lg flex items-center justify-center">
            <span className="font-poppins text-[16px] text-blueprint-darkGrey">
              Image placeholder
            </span>
          </div>
        </div>

        {/* Go to Socials and Events */}
        <div className="mb-[90px] max-md:mb-[50px]">
          <div className="flex gap-[94px] items-start max-md:flex-col max-md:gap-[40px]">
            {/* Text content */}
            <div className="flex flex-col gap-[24px] shrink-0 max-w-[468px] max-md:max-w-full">
              <h3
                className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black font-semibold
                           max-md:text-[22px] max-md:tracking-[-0.44px]"
              >
                {SOCIALS_CONTENT.heading}
              </h3>
              <p className="font-poppins text-[16px] leading-normal text-blueprint-black max-w-[451px] max-md:text-[14px]">
                {SOCIALS_CONTENT.body}
              </p>
            </div>

            {/* Polaroid photos */}
            <div className="relative flex-1 min-h-[343px] max-md:min-h-[300px] max-md:w-full">
              <div className="absolute top-[50px] left-0 max-md:top-[30px] max-md:left-[-10px]">
                <PolaroidPhoto
                  imageSrc="/images/student/studentPage_header.webp"
                  caption="designer pottery painting"
                  className="rotate-[-5deg]"
                />
              </div>
              <div className="absolute top-0 left-[263px] max-md:top-0 max-md:left-[100px]">
                <PolaroidPhoto
                  imageSrc="/images/student/studentPage_header.webp"
                  caption="post-co-working session dinner"
                  className="rotate-[4deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Application Process Section */}
      <ApplicationProcessSection />

      {/* Open Positions Section */}
      <section
        id="open-positions"
        className="w-full bg-blueprint-black rounded-[20px] mx-auto max-w-[1320px] px-6 md:px-[94px] py-[94px] max-md:py-[60px] max-md:px-[19px] max-md:rounded-[12px]"
      >
        <div className="flex gap-[100px] items-start max-md:flex-col max-md:gap-[40px]">
          {/* Left side: heading + description + button */}
          <div className="flex flex-col gap-[48px] max-w-[376px] max-md:max-w-full shrink-0">
            <div className="flex flex-col gap-[24px] text-white">
              <h2
                className="font-poppins text-[48px] leading-[1.2] tracking-[-0.96px]
                           max-md:text-[28px] max-md:tracking-[-0.56px]"
              >
                open positions
              </h2>
              <p className="font-poppins text-[16px] leading-normal max-w-[356px] max-md:text-[14px]">
                Join our discord for hiring announcements and the opportunity to
                ask any question in our #questions channel
              </p>
            </div>
            <Button
              onClick={() =>
                window.open("https://discord.gg/sfublueprint", "_blank")
              }
              className="w-[200px] max-md:w-full"
            >
              JOIN OUR DISCORD
            </Button>
          </div>

          {/* Right side: role cards */}
          <div className="flex flex-col gap-[25px] flex-1 max-md:w-full">
            {OPEN_POSITIONS.map((position) => (
              <OpenRoleCard
                key={position.title}
                title={position.title}
                count={position.count}
                roleType={position.roleType}
                href={position.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="relative w-full bg-[#F5F5F5] bg-no-repeat bg-[58%_center] bg-[length:auto_100%] max-md:bg-none overflow-hidden">
        <div className="relative z-10 px-6 md:px-10 xl:px-36 py-[100px] max-md:py-[60px]">
          {/* Header */}
          <div className="text-center mb-[48px] max-md:mb-[32px]">
            <h2
              className="font-caveat text-[48px] leading-[1.2] tracking-[-0.96px] text-blueprint-black mb-[12px]
                         max-md:text-[32px] max-md:tracking-[-0.64px]"
            >
              stay updated
            </h2>
            <p
              className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black
                         max-md:text-[28px] max-md:tracking-[-0.56px]"
            >
              @sfublueprint
            </p>
          </div>

          {/* Social Media Link Cards - 2x2 grid */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[20px] max-w-[1152px] mx-auto">
            {SOCIAL_LINKS.map((link) => (
              <SocialMediaLinkCard
                key={link.platform}
                icon={link.icon}
                platform={link.platform}
                description={link.description}
                href={link.href}
                accentColor={link.accentColor}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

function ApplicationProcessSection() {
  const [activeTab, setActiveTab] = useState<string>("MEET BLUEPRINT");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 160 });

  const updateIndicator = useCallback(() => {
    const activeIndex = APPLICATION_TABS.indexOf(activeTab as typeof APPLICATION_TABS[number]);
    const tabEl = tabRefs.current[activeIndex];
    if (tabEl) {
      const parent = tabEl.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const tabRect = tabEl.getBoundingClientRect();
        const tabCenter = tabRect.left - parentRect.left + tabRect.width / 2;
        setIndicatorStyle({
          left: tabCenter - 80,
          width: 160,
        });
      }
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const renderTabContent = () => {
    if (activeTab === "MEET BLUEPRINT") {
      return (
        <div className="flex flex-col gap-[12px] max-w-[621px]">
          <p className="font-poppins text-[16px] leading-normal text-black max-md:text-[14px]">
            We host info session events once a semester; join us to have fun and hear directly from our team members about the Blueprint experience!
          </p>
          <p className="font-poppins text-[16px] leading-normal text-black max-md:text-[14px]">
            You can also stay updated with our projects and other events on our social media, on{" "}
            <a href="https://www.instagram.com/sfublueprint/" target="_blank" rel="noopener noreferrer" className="font-medium underline">Instagram</a>
            {" "}and{" "}
            <a href="https://www.linkedin.com/company/sfublueprint/" target="_blank" rel="noopener noreferrer" className="font-medium underline">Linkedin</a>
            , as well as in our{" "}
            <a href="https://discord.gg/sfublueprint" target="_blank" rel="noopener noreferrer" className="font-medium underline">Discord</a>
            {" "}community. (On Discord, we have a channel where you can ask our team questions!)
          </p>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-[12px] max-w-[621px]">
        {APPLICATION_TAB_CONTENT[activeTab]?.description.map((text, idx) => (
          <p
            key={idx}
            className="font-poppins text-[16px] leading-normal text-black max-md:text-[14px]"
          >
            {text}
          </p>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full px-6 md:px-10 xl:px-36 pb-[100px] max-md:pb-[60px]">
      {/* Section heading */}
      <h2
        className="font-poppins text-[48px] leading-[1.2] tracking-[-0.96px] text-[#2e2e2e] mb-[48px]
                   max-md:text-[28px] max-md:tracking-[-0.56px] max-md:mb-[24px]"
      >
        the <strong className="font-bold italic">application</strong> process
      </h2>

      {/* Tabs */}
      <div className="flex flex-col gap-[21px]">
        {/* Tab bar */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[60px] max-md:gap-[24px] pl-[16px] overflow-x-auto">
            {APPLICATION_TABS.map((tab, i) => (
              <button
                key={tab}
                ref={(el) => { tabRefs.current[i] = el; }}
                onClick={() => setActiveTab(tab)}
                className={`font-poppins text-[16px] max-md:text-[14px] whitespace-nowrap cursor-pointer bg-transparent border-none p-0 ${
                  activeTab === tab
                    ? "font-semibold text-[#0146be]"
                    : "font-normal text-[#2a2a2a]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Tab indicator line */}
          <div className="relative w-full">
            <div
              className="absolute top-0 h-[5px] bg-[#0146be] rounded-t-[10px]"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                transition: "left 0.2s ease",
              }}
            />
            <div className="w-full h-px bg-[#aaaaaa] mt-[5px]" />
          </div>
        </div>

        {/* Tab content */}
        <div className="flex flex-col gap-[38px]">
          {/* Info session card - only show on MEET BLUEPRINT tab */}
          {activeTab === "MEET BLUEPRINT" && (
            <div className="bg-[#0146be] rounded-[10px] p-[48px] max-md:p-[24px] flex flex-col gap-[32px]">
              {/* Top section */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-start justify-between max-md:flex-col max-md:gap-[16px]">
                  <div className="flex flex-col gap-[4px] text-white w-[366px] max-md:w-full">
                    <p className="font-poppins font-medium text-[14px] uppercase leading-normal">
                      upcoming event:
                    </p>
                    <p className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] max-md:text-[24px]">
                      blueprint info session
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    className="shrink-0 w-[149px] max-md:w-full"
                  >
                    RSVP
                  </Button>
                </div>
                <div className="w-full h-px bg-white/30" />
              </div>

              {/* Bottom section: date + location */}
              <div className="flex gap-[52px] text-white max-md:flex-col max-md:gap-[24px]">
                <div className="flex flex-col gap-[10px] w-[199px]">
                  <p className="font-poppins font-medium text-[14px] uppercase leading-normal">
                    DATE AND TIME:
                  </p>
                  <p className="font-poppins text-[16px] leading-normal max-md:text-[14px]">
                    September 10, 2026, 7 PM
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] w-[253px]">
                  <p className="font-poppins font-medium text-[14px] uppercase leading-normal">
                    LOCATION:
                  </p>
                  <p className="font-poppins text-[16px] leading-normal max-md:text-[14px]">
                    SFU Burnaby Campus, ASB 9720
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Text content */}
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
}

type RoleCardProps = {
  title: string;
  description: string;
  color: string;
  offset: number;
};

function RoleCard({ title, description, color, offset }: RoleCardProps) {
  // Stagger cards vertically on desktop for the cascading effect
  const offsetClass =
    offset === 0
      ? "lg:mt-[124px]"
      : offset === 1
        ? "lg:mt-[66px]"
        : "lg:mt-0";

  return (
    <div
      className={`w-[300px] max-md:w-[240px] bg-white rounded-xl overflow-hidden flex flex-col ${offsetClass}`}
    >
      {/* Colored header with wave shape */}
      <div className={`relative h-[116px] ${color} overflow-hidden`}>
        <svg
          viewBox="0 0 300 116"
          fill="none"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full"
        >
          <path
            d="M0 116 L0 80 Q50 116 150 95 Q250 74 300 90 L300 116 Z"
            fill="white"
          />
        </svg>
        <p className="relative z-10 font-poppins text-white text-[20px] font-medium p-4 max-md:text-[16px]">
          {title}
        </p>
      </div>
      {/* Description */}
      <div className="p-5 pt-2 flex-1">
        <p className="font-poppins text-[13px] leading-relaxed text-blueprint-black max-md:text-[12px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default StudentsPage;
