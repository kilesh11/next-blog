import Container from '@/components/container';
import Project from '@/components/project';
import Intro from '@/components/intro';
import Layout from '@/components/layout';
import About from '@/components/about';
import Skill from '@/components/skill';
import { getRecentProfile, getAllProjectForHome } from '@/lib/api';
import { MY_NAME } from '@/lib/constants';

import Head from 'next/head';

export default function Index({ profile, projects }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{MY_NAME}</title>
                </Head>
                <Container>
                    <Intro title="C'mon in." secondTitle="Blog" secondHref="/blog" />
                    <About url={profile.icon.url} description={profile.description} />
                    <Skill skills={profile.skills} />
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
