import { useState, useCallback } from 'react';
import PostPreview from './post-preview';

import { Pagination } from '@material-ui/lab';

export default function MoreStories({ posts, postsPerPage = null }) {
    const [page, setPage] = useState(1);
    const slicedPosts = postsPerPage
        ? posts.slice((page - 1) * postsPerPage, page * postsPerPage)
        : posts;
    const handlePageChange = useCallback((_, newPage) => setPage(newPage), []);
    return (
        <section>
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                More Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-16">
                {slicedPosts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
            {postsPerPage && (
                <div className="flex-row flex justify-center mb-16">
                    <Pagination
                        count={Math.ceil(posts.length / postsPerPage)}
                        onChange={handlePageChange}
                        shape="rounded"
                    />
                </div>
            )}
        </section>
    );
}
