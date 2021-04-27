import CoverImage from '@/components/cover-image';
import { WELCOME_MSG } from '@/lib/constants';

const About = ({ url, description }) => {
    return (
        <section className="py-16">
            <div className="mb-10 flex justify-center">
                <CoverImage title="profile" url={url} width={250} height={250} rounded />
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:mx-10">
                <div className="items-start w-full lg:w-3/4 lg:pr-2 mb-10 lg:mb-0">
                    <p
                        className="text-4xl font-bold leading-tight text-left lg:text-right"
                        style={{ marginTop: -5, color: '#223b64' }}
                    >
                        {WELCOME_MSG}
                    </p>
                </div>

                <div className="items-start w-full lg:w-3/4 lg:pl-2 mb-10 lg:mb-0">
                    <p className="text-lg leading-relaxed text-left">{description}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
