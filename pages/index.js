import Container from '@/components/container';
import Project from '@/components/project';
import Intro from '@/components/intro';
import Layout from '@/components/layout';
import { getRecentProfile, getAllProjectForHome } from '@/lib/api';
import { MY_NAME } from '@/lib/constants';
import CoverImage from '@/components/cover-image';
// import { LinearProgress } from '@material-ui/core';

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
                    <Intro title="C'mon in~" secondTitle="Blog" secondHref="/blog" />
                    <section className="py-16">
                        <div className="mb-10 flex justify-center">
                            <CoverImage
                                title="profile"
                                url={profile.icon.url}
                                width={250}
                                height={250}
                                rounded
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row items-start lg:mx-10">
                            <div className="items-start w-full lg:w-3/4 lg:pr-2 mb-10 lg:mb-0">
                                <p
                                    className="text-4xl font-medium leading-tight text-left lg:text-right"
                                    style={{ marginTop: -5 }}
                                >
                                    {`Hi, I'm Kyle, glad to meet you. Please feel free take a look around!`}
                                </p>
                            </div>

                            <div className="items-start w-full lg:w-3/4 lg:pl-2 mb-10 lg:mb-0">
                                <p className="text-lg leading-relaxed text-left">
                                    {profile.description}
                                </p>
                                {/* <div className="text-lg leading-relaxed mb-4 w-full">
                                {profile.skills.map((skill) => (
                                    <div
                                        className="flex flex-row w-full my-1 font-medium"
                                        key={skill.name}
                                    >
                                        <span style={{ width: 150 }} className="text-center">
                                            {skill.name}
                                        </span>
                                        <LinearProgress
                                            className="self-center justify-self-end w-full"
                                            style={{ height: 5 }}
                                            variant="determinate"
                                            value={skill.proficiency * 20}
                                        />
                                    </div>
                                ))}
                                </div> */}
                            </div>
                        </div>
                        {/* <CoverImage
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
                        </ul> */}
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
