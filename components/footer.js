import Container from './container';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <div className="mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        <a className="pr-4" href="https://nextjs.org/">
                            <Image src="/next-js.svg" alt="next-js" width={40} height={40} />
                        </a>
                        <a className="pr-4" href="https://strapi.io/">
                            <Image src="/strapi.svg" alt="strapi" width={40} height={40} />
                        </a>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-end justify-center items-center lg:pl-4 lg:w-1/2">
                        <h4>Modified by</h4>
                        <h4 className="mx-3 font-bold">Kyle Suen</h4>
                        <a className="mt-4 lg:mt-0" href="https://github.com/kilesh11">
                            <Image src="/github.svg" alt="github" width={40} height={40} />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
