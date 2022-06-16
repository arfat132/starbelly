import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import SideBlog from './SideBlog';
import Spinner from '../../Shared/Spinner'
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://whispering-tor-70957.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
        setLoading(false)
    }, [blogs])

    return (
        <>
            {loading ? (<Spinner />) :
                (<div>
                    <img className='pt-6 w-full lg:h-full h-48' src="https://i.ibb.co/RvhwfGj/faq1.png" alt="" srcSet="" />
                    <h1 className='lg:text-5xl text-2xl mb-12 font-mono font-bold text-center text-white mt-[-94px] lg:mt-[-160px] md:mt-[-94px]'>Our Blogs</h1>
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
                        <div className="text-gray-600 body-font lg:w-9/12 w-full">
                            <div className="container px-5 py-0 lg:py-10 mx-auto">
                                <div className="flex flex-wrap -m-4">
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
                </div>)
            }
        </>
    );
};

export default Blogs;