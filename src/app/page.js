import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <div className="bg-indigo-900 relative overflow-hidden">

                <div className="inset-0 bg-black opacity-25 absolute"></div>


                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-24 xl:py-40">
                    <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
                        <span className="font-mitr uppercase text-indigo-500">AI LEARN</span>

                        <h1 className="font-roboto-slab text-4xl sm:text-6xl text-red-400 leading-tight mt-4">We help you <br />to teach.</h1>

                        <div className="max-w-md">
                            <p className="font-source-sans-pro text-indigo-500 mt-6 text-lg">In AI Learn, we help you, the Teacher, to understand the world nowadays, and how to use Artificial Intelligence in your job.</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container px-6 pt-8 pb-20 mx-auto sm:pt-16">
                <div className="flex flex-col w-full mb-16 sm:flex-row sm:mb-32">
                    <div className="relative sm:w-1/3">
                        <span className="absolute top-0 left-0 text-6xl font-black text-gray-200">1</span>
                        <div className="relative z-10 flex flex-col mt-8 ml-6">
                            <h4 className="font-bold leading-none text-gray-400 uppercase font-xs">About Us</h4>
                            <p className="mt-2 text-3xl leading-none text-gray-800">Take a look about our Team!</p>
                            <Link href="/about-us" className="mt-2 text-blue-500">See more</Link>
                        </div>
                    </div>
                    <div className="relative sm:w-1/3">
                        <span className="absolute top-0 left-0 text-6xl font-black text-gray-200">2</span>
                        <div className="relative z-10 flex flex-col mt-8 ml-6">
                            <h4 className="font-bold leading-none text-gray-400 uppercase font-xs">Content</h4>
                            <p className="mt-2 text-3xl leading-none text-gray-800">See our articles in how to use AI in your job!</p>
                            <Link href="/content" className="mt-2 text-blue-500">See more</Link>
                        </div>
                    </div>
                    <div className="relative sm:w-1/3">
                        <span className="absolute top-0 left-0 text-6xl font-black text-gray-200">3</span>
                        <div className="relative z-10 flex flex-col mt-8 ml-6">
                            <h4 className="font-bold leading-none text-gray-400 uppercase font-xs">Tips</h4>
                            <p className="mt-2 text-3xl leading-none text-gray-800">General tips in having what your AI need to say!</p>
                            <Link href="/tips" className="mt-2 text-blue-500">See more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
