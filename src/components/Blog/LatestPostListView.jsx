import React from 'react'
import Post from './Post'
import { Poppins } from 'next/font/google'
import styles from "../../styles/Post/post.module.css"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '800', '700', '900']
});
export default function LatestPostListView() {
  return (

    <>
    <div className={`${poppins.className} ${styles.post_list} justify-items-center content-center md:grid md:grid-cols-2 gap-y-3 gap-x`}>
        <Post className="col-span-1" />
        <Post className="col-span-1" />
        <Post className="col-span-1" />
        <Post className="col-span-1" />
      </div>
</>
  )
}
