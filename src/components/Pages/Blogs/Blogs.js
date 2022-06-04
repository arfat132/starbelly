import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import SideBlog from './SideBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs])

    return (
        <div>
            <img className='pt-6 lg:h-full h-48' src="https://i.ibb.co/RvhwfGj/faq1.png" alt="" srcset="" />
            <h1 className='lg:text-5xl text-2xl mb-12 font-mono font-bold text-center text-white mt-[-94px] lg:mt-[-140px] md:mt-[-94px]'>Our Blogs</h1>
            <div className='px-0 lg:px-12 pt-10 flex'>
                <div className='w-3/12 hidden lg:block'>
                    <h1 className='font-medium text-xl bg-red-700 px-2 py-1 text-white mb-2 mt-10'>Recent Articles</h1>
                    {
                                    blogs.slice(-5).map(blog => <SideBlog
                                        key={blog._id}
                                        blog={blog}
                                    ></SideBlog>)
                                }
                </div>
                <div class="text-gray-600 body-font lg:w-9/12 w-full">
                    <div class="container px-5 py-0 lg:py-10 mx-auto">
                        <div class="flex flex-wrap -m-4">
                        {
                                    blogs.map(blog => <Blog
                                        key={blog._id}
                                        blog={blog}
                                    ></Blog>)
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;