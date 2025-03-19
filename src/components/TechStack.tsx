import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";

export const TechStack = () => {
  const stack = [
    {
      title: "HTML5",
      src: "/images/logos/html.png",
      className: "h-10 w-14",
    },
    {
      title: "CSS3",
      src: "/images/logos/css.png",
      className: "h-10 w-14",
    },
    {
      title: "JavaScript",
      src: "/images/logos/js.webp",
      className: "h-10 w-14",
    },
    {
      title: "TypeScript",
      src: "/images/logos/typescript.webp",
      className: "h-10 w-14",
    },
    {
      title: "React.js",
      src: "/images/logos/reactjs.webp",
      className: "h-10 w-16",
    },
    {
      title: "Redux Toolkit",
      src: "/images/logos/redux.png",
      className: "h-12 w-16",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "SCSS",
      src: "/images/logos/sass.png",

      className: "h-10 w-24",
    },

    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "Firebase",
      src: "/images/logos/firebase.png",

      className: "h-10 w-20",
    },
    {
      title: "Git",
      src: "/images/logos/git.png",

      className: "h-10 w-10",
    },
    {
      title: "GitHub",
      src: "/images/logos/github.png",

      className: "h-10 w-16",
    },
    {
      title: "GraphQL",
      src: "/images/logos/graphql.webp",

      className: "h-10 w-16",
    },
    {
      title: "Docker",
      src: "/images/logos/docker.svg",

      className: "h-10 w-16",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",
      className: "h-10 w-8",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "ExpressJS",
      src: "/images/logos/expressjs.svg",
      className: "h-10 w-20",
    },
    {
      title: "NestJS",
      src: "/images/logos/nestjs.png",
      className: "h-10 w-20",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongodb.png",
      className: "h-10 w-20",
    },
    {
      title: "PostGreSQL",
      src: "/images/logos/postgres.jpg",
      className: "h-10 w-24",
    },

    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-16",
    },
    {
      title: "ChatGPT",
      src: "/images/logos/chatgpt.png",

      className: "h-10 w-16",
    },
    {
      title: "C",
      src: "/images/logos/c.png",

      className: "h-10 w-10",
    },
    {
      title: "Python",
      src: "/images/logos/python.jpg",

      className: "h-10 w-16",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-16",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
