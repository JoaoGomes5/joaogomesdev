import { Link } from "@remix-run/react";
import { Socials } from "~/components/socials";
import helmet from "../assets/astronaut_helmet.gif";

export default function Index() {
  return (
    <div className=" ml-[100px] flex w-full max-w-screen-2xl items-center justify-center">
      <div className="flex h-full flex-col items-start justify-center ">
        <h1 className="bg-gradient-to-r from-blue-sweat to-blue-baby bg-clip-text text-[48px] font-extrabold text-transparent">
          Hi, im João
        </h1>
        <p className="max-w-2xl text-gray-100">
          Hi there! My name is João Gomes. I'm a{" "}
          <span className="font-body text-yellow-sweat">
            Front-End Developer
          </span>{" "}
          at{" "}
          <a
            href="https://www.unizon.pt"
            className="text-purple-main hover:text-yellow-sweat"
            target="_blank"
            rel="noreferrer"
          >
            Unizon
          </a>{" "}
          and i love web and mobile technologies that helps the world to be a
          better place! 🚀
        </p>
        <Link
          to="/me"
          className="w-lg h-lg border-gradient-to-r mt-4 rounded-2xl border-2 border-pink-500 bg-gradient-to-r from-pink-skin to-yellow-sweat  bg-clip-text py-2 px-10 font-extrabold text-transparent hover:animate-pulse"
        >
          More about me
        </Link>

        <Socials />
      </div>

      <div>
        <img
          src={helmet}
          alt="loading..."
          className="ml-10 rotate-12	"
          width="450"
          height="450"
        />
      </div>
    </div>
  );
}
