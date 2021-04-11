import Link from 'next/link';

export default function Intro() {
    return (
        <section className="flex-row flex items-baseline justify-between mt-12 mb-12">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Blog.
            </h1>
            <h1 className="text-3xl md:text-4xl tracking-tighter leading-tight md:pl-8">
                <Link href="/">
                    <a className="hover:underline">About</a>
                </Link>
            </h1>
        </section>
    );
}
