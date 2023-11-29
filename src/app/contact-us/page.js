export default function ContactUs() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Emails</label>
                        <h3 className="text-orange-500">mateuspaixao.8277@aluno.saojudas.br</h3><br/>
                        <h3 className="text-orange-500">ramonbouzon.2060@aluno.saojudas.br</h3>
                    </div>
                    <div>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numbers</label>
                        <h3 className="text-orange-500">+55 (11) 95193-4557</h3>
                        <br/>
                        <h3 className="text-orange-500">+55 (11) 95853-8495</h3>
                    </div>
                </form>
            </div>
        </section>
    )
}