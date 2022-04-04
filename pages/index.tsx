import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import logo from '../public/logoAK.png'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

const Home = ({ posts }: Props) => {
  const usePosts = posts
  console.log(posts)
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Adam new APP</title>
        <link rel="icon" href="/logoAK.png" />
      </Head>
      <Header />
      {/* her0 */}
      <div className="flex items-center justify-between py-10 bg-yellow-400 border-black border-y lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decloration-4 decoration-black">
              Adam Kuemmel
            </span>
            blog site using NextJS, SanityCMS, and TailwindCSS
          </h1>
          <h2>Built with speed, for speed. Check the lighthouse rating</h2>
        </div>
        <div>
          <div className="hidden h-32 md:inline-flex lg:h-full">
            <Image className="object-contain " src={logo} alt="logoAK" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {usePosts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="overflow-hidden border rounded-lg cursor-pointer group">
              <img
                className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105"
                src={urlFor(post.mainImage).url()}
                alt=""
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="w-12 h-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  author -> {
  name,
  image
},
description,
mainImage,
slug
}`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
