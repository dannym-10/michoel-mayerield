export interface WhereWeCanMeetItem {
  title: string;
  description: string;
  icon: "bigben" | "train" | "laptop";
  imageKey: "maida-vale" | "borehamwood" | "online";
}

export const whereWeCanMeetData: WhereWeCanMeetItem[] = [
  {
    title: "London Maida Vale",
    description:
      "Support for generalised anxiety, social anxiety, health anxiety, panic attacks, exam stress, and work-related stress.",
    icon: "bigben",
    imageKey: "maida-vale",
  },
  {
    title: "Borehamwood",
    description:
      "A safe space to explore depression, low self-esteem, loneliness, and feelings of hopelessness, with compassionate, evidence-based support.",
    icon: "train",
    imageKey: "borehamwood",
  },
  {
    title: "Online",
    description:
      "Specialist help for drug addiction, alcoholism, smoking, and substance dependency, addressing root causes and building healthier coping strategies.",
    icon: "laptop",
    imageKey: "online",
  },
];
