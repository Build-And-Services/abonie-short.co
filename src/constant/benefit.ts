import { RiLink, RiMouseLine, RiThumbUpLine } from "react-icons/ri";
import { IBenefit } from "../types/static/benefit";

export const BENEFITS: IBenefit[] = [
  {
    icon: RiThumbUpLine,
    title: "Simple",
    description:
      "Just enter your long link to get a shortened version instantly.",
  },
  {
    icon: RiLink,
    title: "Shortened",
    description: "Shortens any link, no matter its size or complexity.",
  },
  {
    icon: RiMouseLine,
    title: "Statistics",
    description: "Monitor the click count of your shortened URL.",
  },
];
