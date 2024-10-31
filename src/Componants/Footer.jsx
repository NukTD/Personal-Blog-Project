import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { AtSign } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#EFEEEB] w-full h-[144px] flex flex-col mt-10 md:flex-row md:items-center md:justify-between ">
      <div className="flex items-center justify-center mt-8 md:mt-0 md:ml-28">
        <div className="mr-3 text-lg">Get in touch</div>
        <div className="flex">
          <div className="border bg-stone-900 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <Linkedin className="text-white w-5 h-5" />
          </div>
          <div className="border bg-stone-900 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <Github className="text-white w-5 h-5" />
          </div>
          <div className="border bg-stone-900 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <AtSign className="text-white w-5 h-5" />
          </div>
        </div>
      </div>

      <a href="#" className="underline text-lg flex justify-center md:mr-28">
        Home page
      </a>
    </footer>
  );
}

export default Footer;
