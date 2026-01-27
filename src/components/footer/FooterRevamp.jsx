import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";

function LinkSection({ title, links, titleClassName, linkClassName, titleGap, linkGap, width }) {
  return (
    <div className={`flex flex-col ${titleGap} ${width || ''}`}>
      <h3 className={titleClassName}>{title}</h3>
      <div className={`flex flex-col ${linkGap}`}>
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className={linkClassName}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function FooterRevamp() {
  const footerLinks = {
    projects: [
      { name: "pedals", path: "/projects/pedals" },
      { name: "mosaic", path: "/projects/mosaic" },
      { name: "reel youth", path: "/projects/reel-youth" },
    ],
    forNonProfits: [
      { name: "can your idea become a project?", path: "/nonprofits/idea" },
      { name: "our process", path: "/nonprofits/process" },
      { name: "submit a proposal", path: "/nonprofits/proposal" },
    ],
    forStudents: [
      { name: "a typical experience", path: "/students/experience" },
      { name: "application process", path: "/students/apply" },
      { name: "open positions", path: "/students/positions" },
      { name: "stay connected", path: "/students/connect" },
    ],
    aboutUs: [
      { name: "our values", path: "/about/values" },
      { name: "our team", path: "/about/team" },
      { name: "alumni", path: "/about/alumni" },
    ],
  };

  const socialLinks = [
    { name: "Discord", icon: DiscordIcon, url: "https://discord.gg/blueprint" },
    { name: "Instagram", icon: InstagramIcon, url: "https://instagram.com/sfublueprint" },
    { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com/company/sfu-blueprint" },
    { name: "YouTube", icon: YouTubeIcon, url: "https://youtube.com/@sfublueprint" },
  ];

  return (
    <footer className="w-full bg-[#2A2A2A] text-white font-poppins">
      <div className="hidden lg:block px-[140px] py-[60px]">
        <div className="flex flex-col gap-[46px]">
          <div className="flex flex-col gap-[48px]">
            <div className="flex items-center justify-between h-[37px]">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <LogoIcon className="w-[33px] h-[31px]" style={{ fill: 'white' }} />
                <span className="text-[24.35px] font-medium tracking-[-0.24px]">blueprint</span>
              </Link>

              <div className="flex items-center gap-[22.74px]">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[33px] h-[27px] hover:opacity-70 transition-opacity"
                    aria-label={social.name}
                  >
                    <social.icon className="w-full h-full" style={{ fill: 'white' }} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start justify-between gap-[55px]">
              <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.96px] w-[310px]">
                tech for social good
              </h2>

              <div className="flex flex-wrap gap-x-[60px] gap-y-[30px]">
                <LinkSection
                  title="projects"
                  links={footerLinks.projects}
                  titleClassName="text-[24px] font-normal leading-[1.3] tracking-[-0.48px]"
                  linkClassName="text-[#D9D9D9] text-[16px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
                  titleGap="gap-[18px]"
                  linkGap="gap-[12px]"
                  width="w-[105px]"
                />
                <LinkSection
                  title="for non profits"
                  links={footerLinks.forNonProfits}
                  titleClassName="text-[24px] font-normal leading-[1.3] tracking-[-0.48px]"
                  linkClassName="text-[#D9D9D9] text-[16px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
                  titleGap="gap-[18px]"
                  linkGap="gap-[12px]"
                  width="w-[184px]"
                />
                <LinkSection
                  title="for students"
                  links={footerLinks.forStudents}
                  titleClassName="text-[24px] font-normal leading-[1.3] tracking-[-0.48px]"
                  linkClassName="text-[#D9D9D9] text-[16px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
                  titleGap="gap-[18px]"
                  linkGap="gap-[12px]"
                  width="w-[154px]"
                />
                <LinkSection
                  title="about us"
                  links={footerLinks.aboutUs}
                  titleClassName="text-[24px] font-normal leading-[1.3] tracking-[-0.48px]"
                  linkClassName="text-[#D9D9D9] text-[16px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
                  titleGap="gap-[18px]"
                  linkGap="gap-[12px]"
                  width="w-[109px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="w-full h-[1px] bg-[#AAAAAA]" />
            <div className="flex items-center justify-between text-[14px] font-medium text-[#AAAAAA] uppercase">
              <p>@2025 sfu blueprint</p>
              <div className="flex items-center gap-[18px]">
                <Link to="/privacy" className="hover:text-white transition-colors">privacy policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">terms and conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden px-[90px] py-[60px]">
        <div className="flex flex-col gap-[56px]">
          <div className="flex flex-col gap-[24px]">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <LogoIcon className="w-[23px] h-[23px]" style={{ fill: 'white' }} />
              <span className="text-[18px] font-medium tracking-[-0.18px]">blueprint</span>
            </Link>
            <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.96px]">
              tech for social good
            </h2>
          </div>

          <div className="flex items-center gap-[24px]">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[27px] h-[27px] hover:opacity-70 transition-opacity"
                aria-label={social.name}
              >
                <social.icon className="w-full h-full" style={{ fill: 'white' }} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-[60px] gap-y-[30px]">
            <LinkSection
              title="projects"
              links={footerLinks.projects}
              titleClassName="text-[24px] font-normal leading-[1.3] tracking-[-0.48px]"
              linkClassName="text-[#D9D9D9] text-[16px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
              titleGap="gap-[18px]"
              linkGap="gap-[12px]"
              width="w-[105px]"
            />
            <LinkSection
              title="for non profits"
              links={footerLinks.forNonProfits}
              titleClassName="text-[24px] font-normal leading-[1.3] tracking-[-0.48px]"
              linkClassName="text-[#D9D9D9] text-[16px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
              titleGap="gap-[18px]"
              linkGap="gap-[12px]"
              width="w-[184px]"
            />
            <LinkSection
              title="for students"
              links={footerLinks.forStudents}
              titleClassName="text-[24px] font-normal leading-[1.3] tracking-[-0.48px]"
              linkClassName="text-[#D9D9D9] text-[16px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
              titleGap="gap-[18px]"
              linkGap="gap-[12px]"
              width="w-[154px]"
            />
            <LinkSection
              title="about us"
              links={footerLinks.aboutUs}
              titleClassName="text-[24px] font-normal leading-[1.3] tracking-[-0.48px]"
              linkClassName="text-[#D9D9D9] text-[16px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
              titleGap="gap-[18px]"
              linkGap="gap-[12px]"
              width="w-[109px]"
            />
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="w-full h-[1px] bg-[#AAAAAA]" />
            <div className="flex items-start justify-between text-[14px] font-medium text-[#AAAAAA] uppercase">
              <p>@2025 sfu blueprint</p>
              <div className="flex items-center gap-[18px]">
                <Link to="/privacy" className="hover:text-white transition-colors">privacy policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">terms and conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden px-[34px] py-[54px]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[24px]">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <LogoIcon className="w-[23px] h-[23px]" style={{ fill: 'white' }} />
              <span className="text-[18px] font-medium tracking-[-0.18px]">blueprint</span>
            </Link>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.56px]">
              tech for social good
            </h2>
          </div>

          <div className="flex items-center gap-[24px]">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[24px] hover:opacity-70 transition-opacity"
                aria-label={social.name}
              >
                <social.icon className="w-full h-full" style={{ fill: 'white' }} />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-[36px]">
            <LinkSection
              title="projects"
              links={footerLinks.projects}
              titleClassName="text-[18px] font-normal leading-[1.3] tracking-[-0.36px]"
              linkClassName="text-[#D9D9D9] text-[14px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
              titleGap="gap-[18px]"
              linkGap="gap-[12px]"
            />
            <LinkSection
              title="for non profits"
              links={footerLinks.forNonProfits}
              titleClassName="text-[18px] font-normal leading-[1.3] tracking-[-0.36px]"
              linkClassName="text-[#D9D9D9] text-[14px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
              titleGap="gap-[18px]"
              linkGap="gap-[12px]"
            />
            <LinkSection
              title="for students"
              links={footerLinks.forStudents}
              titleClassName="text-[18px] font-normal leading-[1.3] tracking-[-0.36px]"
              linkClassName="text-[#D9D9D9] text-[14px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
              titleGap="gap-[18px]"
              linkGap="gap-[12px]"
            />
            <LinkSection
              title="about us"
              links={footerLinks.aboutUs}
              titleClassName="text-[18px] font-normal leading-[1.3] tracking-[-0.36px]"
              linkClassName="text-[#D9D9D9] text-[14px] font-normal hover:text-white active:text-[#0177E8] transition-colors"
              titleGap="gap-[18px]"
              linkGap="gap-[12px]"
            />
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="w-full h-[1px] bg-[#AAAAAA]" />
            <div className="flex flex-col gap-[18px] text-[14px] font-medium text-[#AAAAAA] uppercase">
              <p>@2025 sfu blueprint</p>
              <div className="flex flex-col gap-[6px]">
                <Link to="/privacy" className="hover:text-white transition-colors">privacy policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">terms and conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}