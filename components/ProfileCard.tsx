import { GitHubIcon, LinkedInIcon, TelegramIcon, LeetCodeIcon } from "./icons";
import FadeInView from "./animations/FadeInView";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";
import ScaleOnTap from "./animations/ScaleOnHover";
import TextReveal from "./animations/TextReveal";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  title: string;
  avatarUrl?: string;
}

const socialLinks = [
  {
    name: "GitHub",
    icon: GitHubIcon,
    url: "https://github.com/tewodros-tilahun-01",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/tewodros--tilahun/",
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    url: "https://t.me/teraa3",
  },
  {
    name: "LeetCode",
    icon: LeetCodeIcon,
    url: "https://leetcode.com/u/teddylet/",
  },
];

function ProfileCard({ name, title, avatarUrl }: ProfileCardProps) {
  return (
    <div className="lg:sticky lg:top-8.5 max-h-min">
      <div className="sm:rounded-3xl sm:rounded-tr-none pt-10 md:pt-0 rounded-none bg-secondary flex flex-col justify-between  ring-1 ring-primary w-full overflow-hidden max-h-min lg:min-h-[calc(100vh-20%)] bg-[linear-gradient(120deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0))]">
        <div className="py-7 md:px-10 px-4">
          <FadeInView
            delay={0.2}
            className="rounded-4xl mx-auto rounded-tr-none  overflow-hidden bg-tertiary md:h-70 md:w-70 h-75 w-80 grid place-items-center relative"
          >
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={name}
                fill
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="text-tertiary">Avatar</div>
            )}
          </FadeInView>

          <div className=" text-center space-y-5 mt-5">
            <TextReveal delay={0.3}>
              <div className="text-submark uppercase ">{title}</div>
            </TextReveal>
            <TextReveal delay={0.6}>
              <h3 className=" text-2xl font-semibold ">{name}</h3>
            </TextReveal>

            <StaggerContainer
              className=" flex justify-center gap-3"
              staggerDelay={0.3}
            >
              {socialLinks.map((link, i) => {
                const Icon = link.icon;

                return (
                  <StaggerItem key={i}>
                    <ScaleOnTap>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.name}
                        className="size-10 grid place-items-center rounded-2xl ring ring-gray-400  transition-colors hover:bg-primary  hover:text-secondary "
                      >
                        <Icon className="size-5 fill-[var(--icon-color)] stroke-[var(--icon-color)] hover:fill-cyan-300 hover:stroke-cyan-300 transition-all duration-300 " />
                      </a>
                    </ScaleOnTap>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>

        <div
          className="     
  relative
  before:content-['']
  before:absolute
  before:left-0
  before:top-0
  before:w-full
  before:h-px
  before:bg-[radial-gradient(ellipse_at_center,_rgb(var(--line-color))_0%,_rgba(255,255,255,0)_70%)]
"
        >
          <FadeInView
            delay={1.0}
            className="flex justify-center py-8   mx-auto  border-gray-100 divide-x"
          >
            <ScaleOnTap>
              <a
                className="p-5 text-center hover:text-green-300 transition-colors font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/12J1292vzD1CWfGiAdNBSnXqjOdXWlTxg/view?usp=sharing"
              >
                Download CV
              </a>
            </ScaleOnTap>

            <ScaleOnTap>
              <a
                className="p-5 text-center hover:text-green-300 transition-colors font-semibold"
                href="#contact"
              >
                Contact Me
              </a>
            </ScaleOnTap>
          </FadeInView>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
