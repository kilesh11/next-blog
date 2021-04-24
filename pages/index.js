import Container from '@/components/container';
// import MoreStories from '@/components/more-stories';
// import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import Layout from '@/components/layout';
import { getRecentProfile } from '@/lib/api';
import { MY_NAME } from '@/lib/constants';
import CoverImage from '@/components/cover-image';
import Head from 'next/head';

export default function Index({ profile }) {
    console.log('kyle_debug ~ file: index.js ~ line 11 ~ Index ~ profile', profile);

    return (
        <>
            <Layout>
                <Head>
                    <title>{MY_NAME}</title>
                </Head>
                <Container>
                    <Intro title={`${MY_NAME}.`} secondTitle="Blog" secondHref="/blog" />
                    <CoverImage
                        title="profile"
                        url={profile.icon.url}
                        width={200}
                        height={200}
                        rounded
                    />
                    <span>{profile.description}</span>
                    <ul>
                        {profile.skills.map((skill) => (
                            <li key={skill.name}>
                                <span>{`${skill.name} | ${skill.proficiency}`}</span>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const { profiles } = await getRecentProfile();
    return {
        props: { profile: profiles[0] ?? {} },
    };
}
