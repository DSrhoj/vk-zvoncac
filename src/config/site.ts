export const siteConfig = {
  name: "VK Zvončac",
  fullName: 'Vaterpolo klub "Zvončac" — Split',
  description:
    "Vaterpolski klub iz Splita. Treninzi na bazenu Zvončac — Sustjepanski put 23.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "hr",
  founded: 2013,
  address: "Sustjepanski put 23",
  city: "21000 Split",
  country: "Hrvatska",
  phone: "+385 98 937 9450",
  phoneHref: "tel:+385989379450",
  email: "vkzvoncac@yahoo.com",
  emailHref: "mailto:vkzvoncac@yahoo.com",
  mapUrl: "https://maps.app.goo.gl/YzmMEEUCGPyg1C7m8",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.187216970182!2d16.42334640414438!3d43.5015392531311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1335675b914ed731%3A0x442fa929c068c09a!2sBazen%20Jadran!5e1!3m2!1sen!2shr!4v1791373069291!5m2!1sen!2shr",
  training: {
    days: [
      { day: "Ponedjeljak", time: "13:00h - 14:00h" },
      { day: "Srijeda", time: "13:00h - 14:00h" },
      { day: "Petak", time: "13:00h - 14:00h" },
    ],
    venueNote:
      "Treninzi se održavaju na bazenu Zvončac na adresi Sustjepanski put 23, Split.",
    membersNote:
      "Svi članovi kluba imaju pravo koristiti bazen u zadanom terminu za plivanje, rekreiranje i uživanje u dobrobitima vodenih sportova.",
  },
  membershipInvite:
    "Pozivamo sve zaljubljenike u vodene sportove da nas posjete u terminu treninga na bazenu Jadran.",
  nav: [
    { href: "#raspored", label: "Raspored" },
    { href: "#clanstvo", label: "Članstvo" },
    { href: "#kontakt", label: "Kontakt" },
  ],
};

export type SiteConfig = typeof siteConfig;
