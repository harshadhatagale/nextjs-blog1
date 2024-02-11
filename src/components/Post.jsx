import React from 'react'
import blog_thumb from "../../public/blog_thumb.jpg"
import Image from 'next/image'
import styles from "../styles/Post/post.module.css"
export default function Post() {
  return (
    <>
    <div className={`${styles.post} flex mt-8 min-w-4/5 max-w-96 p-2 bg-gray-700 rounded-lg gap-5`}>
      <Image src={blog_thumb} className='w-40 rounded-lg' />
      <p>Post Title</p>
    </div>
    </>
  )
}
