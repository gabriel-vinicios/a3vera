export default function ContactUs() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" class="space-y-8">
                    <div>
                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <h3 className="text-orange-500">crisishd2332@gmail.com</h3>
                    </div>
                    <div>
                        <label htmlFor="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number</label>
                        <h3 className="text-orange-500">+55 (48) 99106-7713</h3>                    
                    </div>
                </form>
            </div>
        </section>
    )
}