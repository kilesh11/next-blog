import Image from 'next/image';

export default function Avatar({ name, picture }) {
    const url = picture.url ?? picture[0].url;

    return (
        <div className="flex items-center">
            <div className="w-12 h-12  mr-4">
                <Image
                    src={`${
                        url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
                    }${url}`}
                    alt={name}
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            </div>
            <div className="text-xl font-bold">{name}</div>
        </div>
    );
}
