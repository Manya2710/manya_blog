import React from "react";
import { useNavigate } from "react-router-dom";

function Projectlist() {
  // Example blog data
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: "Donec lectus leo",
      description: "Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.",
      image: "https://source.unsplash.com/random/300x300/?1",
    },
    {
      id: 2,
      title: "Phasellus sit amet",
      description: "Suspendisse potenti. Etiam feugiat velit nec arcu facilisis.",
      image: "https://source.unsplash.com/random/300x300/?2",
    },
    {
      id: 3,
      title: "Vivamus efficitur",
      description: "Aliquam erat volutpat. Integer vel turpis nec nulla eleifend.",
      image: "https://source.unsplash.com/random/300x300/?3",
    },
    {
      id: 3,
      title: "Vivamus efficitur",
      description: "Aliquam erat volutpat. Integer vel turpis nec nulla eleifend.",
      image: "https://source.unsplash.com/random/300x300/?3",
    },
  ];

  return (
    <div className="p-6 bg-gray-200 min-h-screen">

      <div className="flex justify-between mx-4 items-center">
        <h1 className="text-4xl font-bold mb-6">Project</h1>
        <button onClick={(e) => {e.preventDefault();navigate("/");}} className="bg-blue-300 rounded-xl text-xl transform transition duration-300 ease-in-out 
           hover:scale-105 hover:bg-blue-300 font-semibold cursor-pointer px-4 py-2 inline-flex items-center">
          Back to home
        </button>
      </div>


      <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="m-3 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="object-cover object-center w-full rounded-t-md h-50 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-3 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-wide">{blog.title}</h2>
                <p className="dark:text-gray-800">{blog.description}</p>
              </div>
              <button
                type="button"
                className="flex cursor-pointer transform transition duration-300 ease-in-out 
           hover:scale-105 hover:bg-blue-600 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projectlist;
