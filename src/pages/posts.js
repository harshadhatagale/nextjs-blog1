import React from 'react'
import prisma from '../../lib/prisma'


export default function Posts({posts}) {
  return (
    <>
    <div>
        <h1>All Post</h1>
        {posts.map((Post)=>(
            <div key={Post.id}>
             <p>{Post.title}</p>
           </div>
        ))}
    </div>
    </>
  )
}

export async function getServerSideProps(){
    try{
        const posts= await prisma.Post.findMany();
        const stringiFiedPosts= await JSON.parse(JSON.stringify(posts));
        console.log(stringiFiedPosts)
        return{
            props:{posts: stringiFiedPosts},
        };
    }
        catch(error){
            console.log("error: ",error)
            return{
                prompt:{posts:[]},
            };
        }
    }

