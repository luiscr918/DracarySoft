import { BsInstagram, BsTiktok, BsFacebook, BsGithub } from "react-icons/bs";
import { MailIcon } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    icon: BsInstagram,
    href: "https://www.instagram.com/dracarysoft/",
    label: "Instagram",
    value: "@dracarysoft",
  },
  {
    icon: BsTiktok,
    href: "https://www.tiktok.com/@dracary.soft?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
    value: "@dracary.soft",
  },
  {
    icon: BsFacebook,
    href: "https://www.facebook.com/profile.php?id=61590437895340",
    label: "Facebook",
    value: "DracarySoft",
  },
  {
    icon: BsGithub,
    href: "https://github.com/luiscr918",
    label: "GitHub",
    value: "@luiscr918",
  },
  { icon: MailIcon, href: "mailto:dracarysoft@gmail.com", label: "Email", value: "dracarysoft@gmail.com" },
];
