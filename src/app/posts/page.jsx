import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';



const page = async () => {
    const postData = await getPosts()
    // console.log(postData)
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold text-center my-8'>All Post</h2>
            <div className='grid  grid-cols-4 gap-4'>
                {
                    postData?.slice(0, 20).map(post => (
                        <div className='border border-spacing-1 p-4' key={post.id}>
                            <h5 className='text-2xl font-medium'>{post.title}</h5>
                            <p>{post.body}</p>
                            <button className='p-2 bg-cyan-500'>
                                <Link href={`/posts/${post.id}`}>See Details</Link>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;