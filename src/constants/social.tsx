import type { ComponentType } from "react";
import { EnvelopeSimple as Mail, type IconProps } from "@phosphor-icons/react";
import {
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
  GitHubIcon,
} from "./social-icons";

export const SOCIAL_LINKS = [
  {
    icon: InstagramIcon as ComponentType<IconProps>,
    href: "https://www.instagram.com/dracarysoft/",
    label: "Instagram",
    value: "@dracarysoft",
  },
  {
    icon: TikTokIcon as ComponentType<IconProps>,
    href: "https://www.tiktok.com/@dracary.soft?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
    value: "@dracary.soft",
  },
  {
    icon: FacebookIcon as ComponentType<IconProps>,
    href: "https://www.facebook.com/profile.php?id=61590437895340",
    label: "Facebook",
    value: "DracarySoft",
  },
  {
    icon: GitHubIcon as ComponentType<IconProps>,
    href: "https://github.com/dracarysoft",
    label: "GitHub",
    value: "@dracarysoft",
  },
  { icon: Mail, href: "mailto:dracarysoft@gmail.com", label: "Email", value: "dracarysoft@gmail.com" },
];
