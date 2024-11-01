import { Search } from "lucide-react";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blogPosts";

function ArticleSection() {
  return (
    <>
      <p className="text-3xl text-[#26231E] font-bold mx-6 md:ml-28">
        Latest articles
      </p>
      <div className="bg-[#EFEEEB] py-4 mt-5 md:mx-28 md:flex md:items-center md:rounded-xl md:justify-between">
        <div className="md:ml-10 hidden md:block">
          {/* Button */}
          <button
            className="md:text-[#75716B] md:hover:bg-[#DAD6D1] transition duration-300 p-4 rounded-xl
          md:hover:text-[#43403B] md:mr-6"
          >
            Highlight
          </button>
          <button
            className="md:text-[#75716B] md:hover:bg-[#DAD6D1] transition duration-300 p-4 rounded-xl
          md:hover:text-[#43403B] md:mr-6"
          >
            Cat
          </button>
          <button
            className="md:text-[#75716B] md:hover:bg-[#DAD6D1] transition duration-300 p-4 rounded-xl
          md:hover:text-[#43403B] md:mr-6"
          >
            Inspiration
          </button>
          <button
            className="md:text-[#75716B] md:hover:bg-[#DAD6D1] transition duration-300 p-4 rounded-xl
          md:hover:text-[#43403B] md:mr-6"
          >
            General
          </button>
        </div>

        <div className="mx-6 w-20 md:w-auto relative ">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="text-lg  w-80 md:w-60 h-12 rounded-md border border-[#DAD6D1] pl-4"
          />
          <Search className="absolute -right-56 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <p className="mx-6 mt-5 mb-2 text-[#75716B] font-medium text-lg md:hidden ">
          Category
        </p>
        <div className="mx-6 md:hidden">
          <select
            name="select"
            className="text-lg  w-80 h-12 rounded-md border border-[#DAD6D1] pl-4"
          >
            <option value="Highlight" className="text-[#75716B]">
              Highlight
            </option>
            <option value="Cat" className="text-[#75716B]">
              Cat
            </option>
            <option value="Inspiration" className="text-[#75716B]">
              Inspiration
            </option>
            <option value="General" className="text-[#75716B]">
              General
            </option>
          </select>
        </div>
      </div>
      <div>
        <div className="blog-list flex flex-col  md:grid md:grid-cols-2 mx-6 md:mx-28 md:gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ArticleSection;
