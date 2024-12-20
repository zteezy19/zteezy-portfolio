import PropTypes from "prop-types";
import { FaReact, FaNode, FaJs } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import {
  SiTypescript,
  SiCsharp,
  SiNextdotjs,
  SiNeovim,
  SiGo,
  SiCplusplus,
  SiPython,
  SiNumpy,
  SiRust,
  SiZig,
  SiC,
  SiNvidia,
  SiValve,
} from "react-icons/si";

const TechIcon = ({ Icon }) => (
  <Icon className="text-4xl text-[#c0caf5] hover:text-[#bb9af7] transition-colors duration-300" />
);

TechIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
};

const About = () => {
  return (
    <section id="about" className="py-10 bg-[#24283b]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#9d7cd8]">About Me</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            🌏 My Journey
          </h2>
          <p className="text-[#c0caf5] mb-4">
            My programming journey began unexpectedly during my Electrical &
            Electronics engineering studies in Singapore. A C# class ignited my
            passion for coding - it was truly love at first byte. This spark led
            me to dive into web development, mastering JavaScript, Python, and
            CSS, before embracing React.
          </p>
          <p className="text-[#c0caf5] mb-4">
            As of late 2024, I&apos;m setting my sights on a Master&apos;s
            Degree in Australia, aiming to further hone my skills and pave the
            way for my future goals in the tech industry.
          </p>
          <p className="text-[#c0caf5]">
            Beyond coding, I&apos;m a practicing Theravada Buddhist who enjoys
            challenging video games like{" "}
            <a
              href="https://www.dota2.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7dcfff] hover:underline"
            >
              DOTA 2
            </a>{" "}
            and Elden Ring. I&apos;m also on a journey to master Mandarin,
            aiming for fluency by 30! My Dota journey reached its pinnacle at
            8800 MMR on the SEA Immortal Leaderboards, forging deep friendships
            and unforgettable memories along the way. While that competitive
            chapter has closed, I&apos;m grateful for the experiences and
            lessons it provided. Now, I&apos;ve channeled that same drive and
            determination into my software engineering career, eagerly
            anticipating the challenges and triumphs that lie ahead.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            🛠️ Technical Toolkit
          </h2>
          <p className="text-[#c0caf5] mb-4">
            My expertise lies in crafting scalable, responsive, and visually
            appealing web applications. From e-commerce platforms to data
            manipulation with Python, I&apos;ve honed a versatile skill set that
            includes:
          </p>
          <div className="flex flex-wrap gap-6 text-4xl text-[#c0caf5]">
            <TechIcon Icon={FaReact} />
            <TechIcon Icon={SiNextdotjs} />
            <TechIcon Icon={FaJs} />
            <TechIcon Icon={SiTypescript} />
            <TechIcon Icon={FaNode} />
            <TechIcon Icon={SiCsharp} />
            <TechIcon Icon={SiGo} />
            <TechIcon Icon={SiPython} />
            <TechIcon Icon={SiNumpy} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            🌟 North Star Goal
          </h2>
          <p className="text-[#c0caf5] mb-4">
            I aim to become an elite in my field of profession; while working on
            sophisticated and cutting-edge systems.I am hoping to build software
            that would uplift and touch the lives of millions of people, while
            also making a comfortable living with my loved ones.{" "}
          </p>
          <p className="text-[#c0caf5] mb-4">
            To achieve this, I&apos;m diving deep into:
          </p>
          <ul className="list-disc list-inside text-[#c0caf5] mb-4 pl-4">
            <li>Lower-level programming and computer systems</li>
            <li>C++ mastery</li>
            <li>Advanced mathematics for quantitative finance</li>
          </ul>
          <p className="text-[#c0caf5] mb-4">
            This journey isn&apos;t just about becoming a quant; it&apos;s about
            gaining a comprehensive understanding of computer systems at their
            core.
          </p>
          <div className="flex flex-wrap gap-6 text-4xl text-[#c0caf5]">
            <TechIcon Icon={SiCplusplus} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            🌠 Future Horizons
          </h2>
          <p className="text-[#c0caf5] mb-4">
            Looking ahead, I&apos;m excited about:
          </p>
          <ul className="list-disc list-inside text-[#c0caf5] mb-4 pl-4">
            <li>
              Developing a video game to enhance my systems programming skills
            </li>
            <li>Contributing to or creating a game engine</li>
            <li>
              Learning CUDA for machine learning/vision so that I can use it in
              finance and video games
            </li>
            <li>
              Learning C to deepen my understanding of low-level programming
            </li>
            <li>
              Exploring Rust and Zig for systems programming and
              performance-critical applications
            </li>
          </ul>
          <p className="text-[#c0caf5]">
            John Carmack is a well-known figure in the industry for his
            algorithm in Quake and his skill as a developer is undeniable. There
            is also ConcernedApe; whose game Stardew Valley is an amazing game
            to relax with on a cosy Sunday afternoon with your partner. They are
            inspiring figures for me and I wish to work on video games or work
            at an amazing game studio like Valve at some point in my career. I
            have nothing but respect for the Steam platform and Gabe Newell.{" "}
          </p>
          <div className="flex flex-wrap gap-6 text-4xl text-[#c0caf5] mt-4">
            <TechIcon Icon={SiC} />
            <TechIcon Icon={SiRust} />
            <TechIcon Icon={SiZig} />
            <TechIcon Icon={SiNvidia} />
            <TechIcon Icon={SiValve} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            🧑🏻‍💻 My Dev Environment
          </h2>
          <p className="text-[#c0caf5]">
            Fun Fact: The color palette of this portfolio is inspired by my
            favorite editor theme:{" "}
            <a
              href="https://github.com/enkia/tokyo-night-vscode-theme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7dcfff] hover:underline"
            >
              Tokyo Night
            </a>
            ! I code with the{" "}
            <a
              href="https://www.nerdfonts.com/font-downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7dcfff] hover:underline"
            >
              Roboto Mono
            </a>{" "}
            nerdfont, and primarily work on an Apple Silicon MacBook but my main
            desktop runs Arch Linux with i3. I think I will stay with Arch for a
            long time until I'm forced to migrate to a different distro.{" "}
          </p>
          <div className="flex flex-wrap gap-6 text-4xl text-[#c0caf5] mt-4">
            <TechIcon Icon={SiNeovim} />
            <TechIcon Icon={IoTerminal} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            🌊 Hobbies
          </h2>
          <p className="text-[#c0caf5]">
            When I&apos;m not immersed in code, I enjoy diving into a wide range
            of fiction. From Haruki Murakami&apos;s &quot;Norwegian Wood&quot;
            to Frank Herbert&apos;s &quot;Dune&quot;, I find inspiration and
            relaxation in diverse literary worlds. I&apos;m also an avid reader
            of Japanese light novels and manga, which fuel my imagination and
            creativity.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            📚 Resource Dump
          </h2>
          <p className="text-[#c0caf5] mb-4">
            Here are some resources I&apos;ve found invaluable and some in my
            current reading list:
          </p>
          <ul className="list-disc list-inside text-[#c0caf5] mb-4 pl-4">
            <li>
              <a
                href="https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                MIT 6.824 Distributed Systems
              </a>
            </li>
            <li>
              <a
                href="https://missing.csail.mit.edu/2020/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                MIT The Missing Semester of Your CS Education
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Operating-Systems-Three-Easy-Pieces/dp/198508659X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Operating Systems: Three Easy Pieces
              </a>{" "}
              (Chapters 1 to 32)
            </li>
            <li>
              <a
                href="https://www.amazon.sg/dp/1098113160?ref_=mr_referred_us_sg_sg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                C++ Software Design: Design Principles and Patterns for
                High-Quality Software
              </a>{" "}
              by Klaus Iglberger
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Go-Cookbook-Expert-Solutions-Commonly/dp/1098122119"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Go Cookbook: Expert Solutions for Commonly Needed Go Tasks
              </a>{" "}
              by Sau Sheong Chang
            </li>
            <li>
              <a
                href="https://www.amazon.sg/TCP-IP-Illustrated-1-Protocols/dp/0201633469"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                TCP/IP Illustrated
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Beautiful-Core-Guidelines-Writing-Clean/dp/0137647840"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Beautiful C++
              </a>
            </li>
            <li>
              <a
                href="https://neetcode.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                NeetCode.io
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Inside-Machine-Introduction-Microprocessors-Architecture/dp/1593276680"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Inside the Machine
              </a>{" "}
              by Jon Stokes
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Concurrency-Action-2E-Anthony-Williams-dp-1617294691/dp/1617294691/ref=dp_ob_title_bk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                C++ Concurrency in Action
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Art-Doing-Science-Engineering-Learning/dp/1732265178"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                The Art of Doing Science and Engineering: Learning to Learn
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=m8C0Cq9Uv9o&t=103s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Kickstart nvim by TJ DeVries: Great Starting Point for Beginners
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-[#565f89] p-6 rounded-lg shadow-lg">
          <p className="text-[#ff757f] italic text-xl text-center">
            &quot;We must all suffer one of two things: the pain of discipline
            or the pain of regret and disappointment.&quot; — Jim Rohn
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
