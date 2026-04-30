export interface WhereWeCanMeetItem {
  title: string;
  description: string;
  icon: "bigben" | "train" | "laptop";
  imageKey: "maida-vale" | "borehamwood" | "online";
}

export const whereWeCanMeetData: WhereWeCanMeetItem[] = [
  {
    title: "London (Maida Vale)",
    description:
      "Located on Shirland Road (W9), my clinic room in Byron House is modern and clean with soundproof doors to minimise outside noise and maximise privacy. We do not have designated parking, but it is close to train stations and bus stops. All abilities are welcome, with a working lift for accessibility.",
    icon: "bigben",
    imageKey: "maida-vale",
  },
  {
    title: "Borehamwood",
    description:
      "Located opposite the train station on Station Road (WD6), the room is calm and quiet with gentle dim lighting. There are fidget toys, age-appropriate games, and parking is available. There is no waiting room, and the room is upstairs, so I am mindful of the limited accessibility.",
    icon: "train",
    imageKey: "borehamwood",
  },
  {
    title: "Online",
    description:
      "Join on Zoom from wherever you live, including internationally (insurance permitting, when clinically appropriate). Many young adults prefer the flexibility of online sessions. If therapy is going well with me and you move, you can continue online rather than start over with someone new. A private space is needed, and I'll encourage you to turn off self-view so sessions feels as natural as possible.",
    icon: "laptop",
    imageKey: "online",
  },
];
