import Link from 'next/link';

export default function Intro({ title, secondTitle, secondHref }) {
    return (
        <section className="flex-row flex items-baseline justify-between mt-12 mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                {title}
            </h1>
            <h1 className="text-3xl md:text-4xl tracking-tighter leading-tight md:pl-8">
                <Link href={secondHref}>
                    <a className="hover:underline">{secondTitle}</a>
                </Link>
            </h1>
        </section>
    );
}
