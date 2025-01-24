"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    if (!post) return <div className="text-center text-xl"><span className="loading loading-bars loading-lg"></span></div>;

    return (
        <div className="w-full md:w-3/4 mx-auto p-6 bg-black text-slate-50 rounded-lg shadow-lg mt-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 capitalize">{post.title}</h2>
            <p className="text-lg text-gray-600 mb-6 capitalize">
                {post.body}
            </p>
            <div className="flex justify-between items-center mt-6 ">
                <span className="text-sm text-gray-500">Posted on: {new Date().toLocaleDateString()}</span>
                <div className="gap-2 flex">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                        Like
                    </button>
                    <Link href='/' className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                        Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
