import { Link } from "@remix-run/react";
import { NavigationLink } from "./navigation-link";

const links = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Me",
    to: "/me",
  },
  {
    title: "Projects",
    to: "/projects",
  },
  {
    title: "Loves",
    to: "/loves",
  },
];

export const Header = () => {
  return (
    <div className="mx-20 flex h-14 w-full max-w-screen-md items-center justify-between py-14">
      <Link to="me">
        <img
          className="h-14 w-14 rounded-full"
          src="https://www.github.com/JoaoGomes5.png"
          alt="My beautiful face"
        />
      </Link>
      <ul className="flex gap-10">
        {links.map((link) => (
          <li className="" key={link.title}>
            <NavigationLink key={link.to} to={link.to} title={link.title} />
          </li>
        ))}
      </ul>
      <button className="transition-color h-10 w-10 rounded-full bg-gray-600  duration-500 hover:bg-yellow-sweat"></button>
    </div>
  );
};
