import Image from "next/image";
import Header from "@/components/header1";
import Post from "@/components/Blog/Post";
import { Merriweather, Poppins } from "next/font/google";
import styles from "../styles/Post/post.module.css"
const merry = Merriweather({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900']
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '800', '700', '900']
})
export default function Home() {
  return (
    <>
      <Header content="Latest Posts" />
      <div className={`${poppins.className} ${styles.post_list} justify-items-center content-center md:grid md:grid-cols-2 gap-y-3 gap-x`}>
        <Post className="col-span-1" />
        <Post className="col-span-1" />
        <Post className="col-span-1" />
        <Post className="col-span-1" />
      </div>
    </>
  );
}
