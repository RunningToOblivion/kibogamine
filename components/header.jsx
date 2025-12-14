import Link from 'next/link';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Exercises', href: '/exercises' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-6 pt-6 pb-12 sm:pt-12 md:pb-16">
            <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-lg sm:text-xl font-bold">Kibogamine</span>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-6 gap-y-1 ml-auto">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="text-blue-200 hover:text-white transition">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
