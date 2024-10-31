import Img from "../img/xgfy0xnvyemkklcqodkg.jpg";

function HeroSection() {
  return (
    <>
      <main className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-col md:flex-col md:w-1/3">
            <div>
              <p className="text-5xl font-bold text-[#26231E] flex justify-center mt-8 text-center md:text-right md:flex md:items-end px-0">
                Stay <br className="hidden lg:block" />
                Informed, <br />
                Stay Inspired,
              </p>
            </div>
            <div>
              <p className="text-base text-[#75716B] flex justify-center mt-6 text-center md:text-right">
                Discover a World of Knowledge at Your <br />
                Fingertips.Your Daily Dose of Inspiration <br />
                and Information.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10 md:w-1/3">
            <img
              src={Img}
              alt="profile"
              className="w-[343px] h-[470px] object-cover flex justify-center rounded-xl shadow-sm"
            />
          </div>

          <div className="mx-6 my-10 md:w-1/3">
            <p className="text-xs text-[#75716B] mb-2">-Author</p>
            <p className="text-2xl text-[#43403B] mb-3">Thanate D.</p>
            <p className="text-base text-[#75716B] mb-4">
              I am a pet enthusiast and freelance writer who specializes in
              animal behavior and care. With a deep love for cats, I enjoy
              sharing insights on feline companionship and wellness.
            </p>
            <p className="text-base text-[#75716B]">
              When i’m not writing, I spends time volunteering at my local
              animal shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
