import profileImg from "../img/xgfy0xnvyemkklcqodkg.jpg";

function BlogCard({ image, category, title, description, author, date }) {
  return (
    <div className="flex flex-col items-start mt-6">
      <div className="img">
        <img
          src={image}
          className="w-[400px] h-[260px] object-cover rounded-xl md:w-[1179px] md:h-[400px] "
        />
      </div>

      <div className="catagory">
        <p className="text-[#12B279] bg-[#D7F2E9] text-lg font-semibold py-1 px-3 rounded-full mt-4 ">
          {category}
        </p>
      </div>

      <div className="title&description"></div>
      <p className="text-xl text-[#26231E] font-bold mt-2 ">{title}</p>
      <p className="text-[#75716B] font-medium mt-4">{description}</p>
      <div className="author&date flex items-center mt-4">
        <img
          src={profileImg}
          alt="author-img"
          className="w-6 h-6 rounded-full mr-2"
        />
        <span className="text-sm text-[#43403B] font-medium mr-3">
          {author}
        </span>
        <span className="mr-3">|</span>
        <span className="text-sm text-[#75716B]">{date}</span>
      </div>
    </div>
  );
}

export default BlogCard;
