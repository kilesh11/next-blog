import CoverImage from './cover-image';
import Image from 'next/image';
import { Chip } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

export default function ProjectPreview({ slug, title, coverImage, excerpt, skills, demo, github }) {
    return (
        <div key={slug}>
            <div className="mb-5">
                <CoverImage title={title} url={coverImage.url} />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <p className="hover:underline">{title}</p>
            </h3>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <div className="text-lg mb-4">
                {skills.map((skill) => (
                    <Chip
                        className="mx-1 my-1"
                        key={skill.name}
                        variant="outlined"
                        label={skill.name}
                    />
                ))}
            </div>

            <div className="text-lg mb-4 mx-1 flex">
                <a href={github}>
                    <Image src="/github.svg" alt="github" width={30} height={30} />
                </a>
                {demo && (
                    <a href={demo} className="mx-1">
                        <LanguageIcon style={{ height: 35, width: 35, marginTop: -2 }} />
                    </a>
                )}
            </div>
        </div>
    );
}
