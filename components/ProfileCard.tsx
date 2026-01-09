import { GitHubIcon, LinkedInIcon, TelegramIcon, LeetCodeIcon } from "./icons";

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
    <div className="lg:sticky lg:top-12 max-h-min">
      <div className="sm:rounded-3xl rounded-none bg-secondary ring-1 ring-primary w-full overflow-hidden max-h-min">
        <div className="p-7">
          <div className="sm:rounded-2xl overflow-hidden bg-tertiary h-72 grid place-items-center">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-tertiary">Avatar</div>
            )}
          </div>

          <div className="mt-8 text-center">
            <div className="text-xs tracking-[0.2em] text-tertiary">
              {title}
            </div>
            <h3 className="mt-3 text-2xl font-semibold">{name}</h3>

            <div className="mt-5 flex justify-center gap-3">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;

                return (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className="size-10 grid place-items-center rounded-full bg-tertiary text-primary transition-colors hover:bg-primary  hover:text-secondary "
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-primary">
          <a
            className="p-5 text-center hover-bg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1xSeDYIhc_8G59-gOrb_DsHl5zxDJf8HL/view?usp=sharing"
          >
            Download CV
          </a>
          <a
            className="p-5 text-center hover-bg transition-colors"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
