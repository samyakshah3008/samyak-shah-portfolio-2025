import dashboard from "public/images/dashboard.png";
import habits from "public/images/habits.png";
import pomosuperfocus1 from "public/images/thumbnail.png";
import AIMockInterview from "../../public/images/projects/mock-cred/ai-mock-interview.png";
import PublicPage from "../../public/images/projects/mock-cred/public-page-stats-one.png";
import thumbnailMockCred from "../../public/images/projects/mock-cred/thumbnail.png";
import thumbnailYouClick from "../../public/images/projects/you-click/thumbnail-you-click.png";

export const products = [
  {
    href: "https://pomo-super-focus.vercel.app",
    title: "PomoSuperFocus",
    description:
      "Free, open source forever, aims to unlock the best version of you!",
    thumbnail: pomosuperfocus1,
    images: [dashboard, habits],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Typescript",
      "Expressjs",
      "MongoDB",
      "Vercel",
    ],
    slug: "pomosuperfocus",
    content: (
      <div>
        <p>
          In our day-to-day lives, people use a variety of tools to stay
          organized and productive. Some rely on Pomodoro timers to manage their
          work, others maintain to-do lists or set monthly and yearly goals.
          Many track habits with scorecards to build good habits and break bad
          ones, while some follow predefined routines or keep gratitude and
          bucket lists. However, there isn’t a single platform that brings all
          these features together under one roof. As a result, individuals are
          forced to juggle multiple apps or documents to revisit their day
          effectively. PomoSuperFocus solves this problem by offering a
          comprehensive, all-in-one solution where users can manage and reflect
          on their day seamlessly.
        </p>
        <p>
          Instead of juggling between multiple apps, now with PomoSuperFocus
          enjoy the combination of 10+ apps under one roof - we have features
          like - welcoming dashboard, customizable pomodoro, eisen hower matrix
          todolist, goals, habits scorecard, working framework, gratitude list,
          bucket list and track your precious time by entering birthday.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://algochurn.com",
    title: "MockCred",
    description:
      "Free, open source forever, topmate alternative for mock interviews",
    thumbnail: thumbnailMockCred,
    images: [AIMockInterview, PublicPage],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Typescript",
      "Expressjs",
      "MongoDB",
      "Gemini AI",
      "Vercel",
    ],
    slug: "mockcred",
    content: (
      <div>
        <p>
          MockCred aims to help you prepare for interviews and is a win-win
          situation for both interviewee and interviewers!
        </p>
        <p>
          Mock Interviews are so so encouraged before you appear for the real
          interviews. It is so common for candidate despite of knowing the
          concept they struggle in real interviews due to lack of interviewing
          skills. There are a few platforms out there like topmate where you can
          give mock interviews which is good and there are both free and paid
          services available. But on topmate or such platforms, they don't have
          a feature for audience to showcase their mock interview history,
          testimonials, strengths and weakness. This is exactly where MockCred
          took a birth!
        </p>{" "}
        <p>
          MockCred is two-way platform unlike others. Imagine as Topmate, but
          for both audience and creators! 🧡 Now showcase how hard your are
          practicing in your job hunting phase! Instead of silent hard work,
          showcase publicly to everyone with your unique sharable profile where
          everyone can see how many mock interviews you have given, with whom
          you have given, how are the testimonials, what are your strengths and
          weakness.
          <p>
            For those who want to only take interviews of someone, how MockCred
            will benefit them? In MockCred Version 2 (Coming soon...)
            monetization will be introduced just like Topmate. You can earn
            money by taking mock interviews or keep it free as per your choice.
            🧡
          </p>
          <p>
            Always believe in "Don't chase, rather attract opportunities!" Next
            time when you seek for a referral, along with your resume, let your
            MockCred profile speak for you! Your MockCred profile will speak
            that - you are prepared well for interviews and you have the
            attitude to constantly improve your skillset rather than yapping
            over x reasons why you are not getting a job! 🚀
          </p>
        </p>
      </div>
    ),
  },
  {
    href: "https://you-click.vercel.app",
    title: "YouClick Chrome Extension",
    description:
      "Free, open source forever, say good bye to manual like, comment and subscribe!",
    thumbnail: thumbnailYouClick,
    images: [],
    stack: [
      "Reactjs",
      "Html/CSS/JavaScript",
      "Chrome Extensions API",
      "Manifest V3",
      "Vercel",
    ],
    slug: "youclick",
    content: (
      <div>
        <p>
          YouClick aims to make win-win situation for both youtuber and
          consumer!
        </p>
        <p>
          You might have heard youtuber requesting you to like, comment and
          subscribe to their channel, ever wonder why they tell you in each
          video?? because we tend to binge watch and forget to shower the
          support to that video or youtube channel just because we are LAZY to
          exit the full screen and manually do the work! Imagine you are
          watching a playlist of 100 videos, will you exit the full screen
          everytime and comment?? This includes a lot of friction and high
          probability that you will not comment and like on each video. And due
          to this, your favorite youtuber might not get the appreciation he/she
          deserves. This is exactly where YouClick took a birth.
        </p>{" "}
      </div>
    ),
  },
];
