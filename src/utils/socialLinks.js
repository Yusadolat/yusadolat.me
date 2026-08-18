// Single source of truth for the profile links repeated across the footer,
// the contact page, the home hero and the post byline. Previously each of
// those components hardcoded its own copy, and they had already drifted:
// some pointed at twitter.com/yusadolat, others at twitter.com/Yusadolat.
export const SOCIAL_LINKS = [
  {
    name: "github",
    label: "GitHub",
    href: "https://github.com/yusadolat"
  },
  {
    name: "twitter",
    label: "Twitter",
    href: "https://twitter.com/yusadolat"
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yusadolat"
  },
  {
    name: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/yusadolat"
  }
];

export default SOCIAL_LINKS;
