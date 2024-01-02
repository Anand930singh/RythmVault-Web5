import {
  FaInstagram,
  FaXTwitter,
  FaSquareFacebook,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full py-4 md:px-6 px-2 pt-10 gap-10 bg-slate-900 flex flex-col">
      <div className="lg:flex-row flex flex-col gap-6 w-full justify-between">
        <div className="flex lg:place-items-start place-items-center w-full flex-col gap-4">
          <div className="text-slate-200 font-semibold text-2xl">
            Stay in the loop
          </div>
          <div className=" text-center lg:text-start lg:pr-20 w-full text-slate-200">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </div>
          <div className="w-full flex gap-2">
            <input
              placeholder="Your email address"
              type="email"
              className="px-4 flex-1 py-2.5 rounded-lg bg-transparent text-slate-500 focus:outline-none border border-slate-600"
            />
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="flex lg:place-items-start place-items-center w-full flex-col gap-4">
          <div className="text-slate-200 font-semibold text-2xl">
            Join the community
          </div>
          <div className="flex gap-2 text-xl lg:justify-start justify-center w-full">
            <button className="rounded-lg bg-white/10 hover:bg-blue-600 text-slate-200 p-3">
              <FaInstagram />
            </button>
            <button className="rounded-lg bg-white/10 hover:bg-blue-600 text-slate-200 p-3">
              <FaXTwitter />
            </button>
            <button className="rounded-lg bg-white/10 hover:bg-blue-600 text-slate-200 p-3">
              <FaSquareFacebook />
            </button>
            <button className="rounded-lg bg-white/10 hover:bg-blue-600 text-slate-200 p-3">
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] rounded bg-slate-600"></div>

      <div className="flex text-white text-sm w-full justify-between">
        <div className="">© 2018 - 2024 RhythmVault</div>

        <div className="flex gap-3">
          <div className="cursor-pointer hover:scale-105 transition-all">
            Privacy Policy
          </div>
          <div className="cursor-pointer hover:scale-105 transition-all">
            Terms of Service
          </div>
        </div>
      </div>
    </footer>
  );
}
