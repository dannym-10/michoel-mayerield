export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    title: "London Maida Vale",
    description:
      "Support for generalised anxiety, social anxiety, health anxiety, panic attacks, exam stress, and work-related stress.",
    icon: "shield",
  },
  {
    title: "Borehamwood",
    description:
      "A safe space to explore depression, low self-esteem, loneliness, and feelings of hopelessness, with compassionate, evidence-based support.",
    icon: "sun",
  },
  {
    title: "Online",
    description:
      "Specialist help for drug addiction, alcoholism, smoking, and substance dependency, addressing root causes and building healthier coping strategies.",
    icon: "leaf",
  },
];
