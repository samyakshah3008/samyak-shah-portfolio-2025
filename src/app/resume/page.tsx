import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack engineer who loves{" "}
        <Highlight>building cool and usable products</Highlight> that can impact
        millions of lives. I have combinely 2+ years of experience so far
        working in tech industry.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
