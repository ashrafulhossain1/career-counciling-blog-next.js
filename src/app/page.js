"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0,8).map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="font-semibold text-xl">{post.title}</h2>
            <p className="mt-2 text-sm">{post.body.slice(0, 100)}...</p>
            <Link href={`/blog/${post.id}`} className="mt-4 text-blue-600 hover:underline inline-block">
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
