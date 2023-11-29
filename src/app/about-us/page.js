export default function AboutUs() {
    const people = [
        {
            name: 'Gabriel Vinicios',
            role: 'Computer Science / Responsible for making the website with Mateus Sousa da Paixão',
        },
        {
            name: 'Mateus Sousa da Paixão',
            role: 'Computer Science / Responsible for making the website with Gabriel Vinicios',
        },
        {
            name: 'Felipe Murauskas Pascoinelli',
            role: 'Computer Science / Responsible for making the design of the website',
        },
        {
            name: 'Patrick da Silva Lara',
            role: 'Computer Science / Responsible for making the prototype',
        },
        {
            name: 'Ramon Barbosa Bouzon',
            role: 'Computer Science / Responsible for making the articles',
        },
        
    ]
    return (

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team.</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Behind this beautiful website, there's competent and creative people! Take a look on who made this website possible.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

    )
}