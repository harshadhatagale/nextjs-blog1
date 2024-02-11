import React from 'react'
import blog_thumb from "../../../public/blog_thumb.jpg"
import Image from 'next/image'
import styles from "../../styles/Post/post.module.css"
export default function Post() {
  return (
    <>
      <div className={`${styles.post} flex mt-8 min-w-4/5 max-w-96 p-2 bg-gray-700 rounded-lg gap-5`}>
        <Image src={blog_thumb} className='w-40 rounded-lg' />
        <div className="flex flex-col gap-y-2">
          <p className='text-lg font-bold'>Post Title</p>
          <p className='text-gray-300 text-sm'>This is Post 1....</p>
        </div>
      </div>
    </>
  )
}
