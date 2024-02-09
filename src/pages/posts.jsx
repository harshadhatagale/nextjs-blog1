import React from 'react'
import prisma from '../../lib/prisma'
export default function Posts({posts}) {
  return (
    <div>
        <h1>All Post</h1>
        {posts.map((Post) =>(
            <div key={Post.id} className="bg-black text-white">
                <p>{Post.title}</p>
                <p>{Post.content}</p>
                <p>{Post.author}</p>
            </div>
        ))}
    </div>
  )
}
export async function getStaticProps(){
    const posts = await prisma.Post.findMany();
    return{
        props: {posts},
        revalidate:10,
    };
}