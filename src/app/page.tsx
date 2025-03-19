import { Container } from "@/components/Container";
import GitHubContributions from "@/components/GithubContributions";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Samyak</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building cool and usable products</Highlight> that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a 2025 batch graduated, with{" "}
        <Highlight>
          2+ years of experience as Software Engineer(Frontend inclined)
        </Highlight>{" "}
        - building scalable web apps that are performance optimized and good
        looking during my internship tenures.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Checkout my green forest <span className="text-green-500">🌲</span>
      </Heading>
      <GitHubContributions />
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
