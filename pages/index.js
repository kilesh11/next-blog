import Container from '@/components/container';
import Project from '@/components/project';
import Intro from '@/components/intro';
import Layout from '@/components/layout';
import { getRecentProfile, getAllProjectForHome } from '@/lib/api';
import { MY_NAME } from '@/lib/constants';
import CoverImage from '@/components/cover-image';

import Head from 'next/head';

export default function Index({ profile, projects }) {
    // console.log('kyle_debug ~ file: index.js ~ line 13 ~ Index ~ projects', projects);
    // console.log('kyle_debug ~ file: index.js ~ line 11 ~ Index ~ profile', profile);

    return (
        <>
            <Layout>
                <Head>
                    <title>{MY_NAME}</title>
                </Head>
                <Container>
                    <Intro title={`${MY_NAME}.`} secondTitle="Blog" secondHref="/blog" />
                    <section>
                        <CoverImage
                            title="profile"
                            url={profile.icon.url}
                            width={200}
                            height={200}
                            rounded
                        />
                        <div>
                            <p className="text-lg leading-relaxed mb-4">{profile.description}</p>
                        </div>
                        <ul className="text-lg leading-relaxed mb-4">
                            {profile.skills.map((skill) => (
                                <li key={skill.name}>
                                    <span>{`${skill.name} | ${skill.proficiency}`}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    {projects.length > 0 && <Project projects={projects} postsPerPage={4} />}
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const { profiles } = await getRecentProfile();
    const { projects } = await getAllProjectForHome();

    return {
        props: { profile: profiles[0] ?? {}, projects },
    };
}
