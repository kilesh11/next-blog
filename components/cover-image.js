import Link from 'next/link';
import Image from 'next/image';

export default function CoverImage({ title, url, slug }) {
    const imageUrl = `${url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''}${url}`;
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>
                        <Image
                            src={imageUrl}
                            alt={title}
                            width={1600}
                            height={900}
                            className="mx-auto"
                            priority
                        />
                    </a>
                </Link>
            ) : (
                <Image className="mx-auto" src={imageUrl} alt={title} width={1600} height={900} />
            )}
        </div>
    );
}
