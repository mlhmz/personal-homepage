import {
  ArrowLeft,
  GithubIcon,
  LinkedinIcon,
  LucideProps,
  Moon,
  Sun,
  type LucideIcon,
  Loader,
  Mail,
  Rss,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  back: ArrowLeft,
  github: GithubIcon,
  linkedIn: LinkedinIcon,
  sun: Sun,
  moon: Moon,
  spinner: Loader,
  mail: Mail,
  rss: Rss,
  x: X,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  xing: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      className="stroke fill-primary stroke-primary stroke-[10px] antialiased"
      viewBox="0 0 612 612"
      {...props}>
      <g>
        <g id="group-38svg">
          <path
            color="currentColor"
            id="path-1_31_"
            d="M160.391,417.714H54.502c-4.058,0-16.416,0-23.104-11.475c-4.776-8.338-4.776-16.706-0.039-24.938
				l98.822-171.997l-46.703-96.056c-4.077-8.251-3.514-20.386,1.34-28.151c3.922-6.339,10.581-17.095,22.628-17.095h105.889
				c9.572,0,17.639,6.553,23.978,19.464l53.042,112.413c3.844,7.698,3.572,16.056-0.942,23.88L183.515,406.482
				C176.962,417.714,164.925,417.714,160.391,417.714z M60.763,388.572h99.454L263.281,210.76l-52.207-110.656
				c-0.612-1.233-1.185-2.223-1.679-2.961h-97.716c-0.66,0.961-1.33,2.048-1.748,2.728c0,0.009,0,0.009,0,0.009
				c-0.058,0.417-0.058,1.02,0,1.32l49.809,102.298c2.107,4.339,1.932,9.455-0.466,13.639L60.763,388.572z"
          />
          <path
            color="currentColor"
            id="path-2_21_"
            d="M504.552,612h-105.89c-4.058,0-16.415,0-23.065-11.455L243.235,373.904
				c-4.747-8.193-4.834-18.784-0.233-27.017L428.328,15.736C433.939,5.854,442.617,0,451.606,0h105.909
				c8.834,0,17.454,5.737,23.056,15.357c4.718,8.067,4.834,19.036,0.271,27.268L402.914,360.236l124.751,214.816
				c4.815,8.262,4.825,17.396,0.01,25.706C521.122,612,509.085,612,504.552,612z M399.002,582.858h99.521L373.559,367.691
				c-2.592-4.466-2.641-9.95-0.116-14.455L554.924,29.297c-0.029-0.058-0.068-0.107-0.106-0.155H454.286
				c-0.185,0.262-0.398,0.563-0.583,0.903L268.94,360.168L399.002,582.858z"
          />
        </g>
      </g>
    </svg>
  ),
};
