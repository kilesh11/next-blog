import Container from '@/components/container';
import MoreStories from '@/components/more-stories';
import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import Layout from '@/components/layout';
import { getAllPostsForHome } from '@/lib/api';
import { MY_NAME } from '@/lib/constants';
import Head from 'next/head';

export default function Index({ allPosts, preview }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{MY_NAME}</title>
                </Head>
                <Container>
                    <Intro title={`${MY_NAME}.`} secondTitle="Blog" secondHref="/blog" />
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} postsPerPage={4} />}
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps({ preview = null }) {
    const allPosts = (await getAllPostsForHome(preview)) || [];
    return {
        props: { allPosts, preview },
    };
}
