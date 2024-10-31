import { Menu } from "lucide-react";

function Navbar() {
  return (
    <>
      <nav className="border-b border-stone-200 w-full ">
        <div className=" mx-8 lg:mx-28 flex justify-between my-6 items-center text-[#43403B]">
          <p className="text-3xl">
            TD<span className="text-green-500">.</span>
          </p>
          <div className="flex items-center ml-auto">
            <Menu size={32} color="#75716B" className="block md:hidden" />
            <div className="flex gap-2">
              <button
                className="hidden md:block text-lg text-[#26231E] hover:underline active:bg active:bg-[#f4f4f4] active:scale-[101%]
                border border-[#75716B] px-10 py-3 rounded-full"
              >
                Log in
              </button>
              <button
                className="hidden md:block text-lg text-white hover:underline active:bg-[#3a362e] active:scale-[101%]
              bg-[#26231E] px-10 py-3 rounded-full"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      
    </>
  );
}

export default Navbar;
