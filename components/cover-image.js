import Link from 'next/link';
import Image from 'next/image';

export default function CoverImage({
    title,
    url,
    slug,
    width = 1600,
    height = 1900,
    rounded = false,
}) {
    console.log('kyle_debug ~ file: cover-image.js ~ line 5 ~ CoverImage ~ height', height);
    console.log('kyle_debug ~ file: cover-image.js ~ line 5 ~ CoverImage ~ width', width);
    const imageUrl = `${url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''}${url}`;
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link href={`/blog/${encodeURIComponent(slug)}`}>
                    <a aria-label={title}>
                        <Image
                            src={imageUrl}
                            alt={title}
                            width={width}
                            height={height}
                            className="mx-auto"
                            priority
                        />
                    </a>
                </Link>
            ) : (
                <Image
                    className={`mx-auto ${rounded ? 'rounded-full' : ''}`}
                    src={imageUrl}
                    alt={title}
                    width={width}
                    height={height}
                />
            )}
        </div>
    );
}
