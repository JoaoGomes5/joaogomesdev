import twitter from "../assets/social/twitter.svg";
import github from "../assets/social/github.svg";
import linkedin from "../assets/social/linkedin.svg";
import twitch from "../assets/social/twitch.svg";
import dev from "../assets/social/dev.svg";

export const Socials = () => {
  return (
    <ul className="mt-20 flex gap-4">
      <li>
        <a
          href="https://www.twitter.com/joaogomesdev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="" className="hover:animate-bounce" />
        </a>
      </li>
      <li>
        <a
          href="https://www.github.com/JoaoGomes5"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="" className="hover:animate-bounce" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/joaogomesdev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="" className="hover:animate-bounce" />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitch.tv/joaogomesdev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitch} alt="" className="hover:animate-bounce" />
        </a>
      </li>
      <li>
        <a href="https://dev.to/joaogomesdev" target="_blank" rel="noreferrer">
          <img src={dev} alt="" className="hover:animate-bounce" />
        </a>
      </li>
    </ul>
  );
};
