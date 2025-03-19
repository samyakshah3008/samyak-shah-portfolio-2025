import Image from "next/image";
import Link from "next/link";
import GithubContribution from "../../public/images/github-contribution-light.png";

const GithubContributions = () => {
  return (
    <Link href="https://github.com/samyakshah3008" target="_blank">
      <Image src={GithubContribution} alt="github-contributio-graph" />
    </Link>
  );
};

export default GithubContributions;
