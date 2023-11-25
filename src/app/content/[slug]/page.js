'use client'

import { publisher } from "../../../api/post";

import { useParams } from "next/navigation";
export default function Page(){
    const param = useParams()
    const id = parseInt(param.slug)
    const post = publisher(id)
    const filteredPost = post[param.slug - 1]
    console.log(filteredPost)
    return (
        <div>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                <div>
                                    <a rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{filteredPost?.author?.name}</a>
                                    <p className="text-base text-gray-500 dark:text-gray-400">{filteredPost?.author?.role}</p>
                                    <p className="text-base text-gray-500 dark:text-gray-400"><time pubdate='true' dateTime={filteredPost.datetime} title="February 8th, 2022">Nov. 19, 2023</time></p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{filteredPost.title}</h1>
                    </header>
                    <p className="lead dark:text-white" dangerouslySetInnerHTML={{__html:filteredPost?.author?.content}}/>
                        
                </article>
            </div>
        </main>
    </div>
    )
}