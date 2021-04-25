import { useState, useCallback } from 'react';
import ProjectPreview from '@/components/project-preview';
import { Pagination } from '@material-ui/lab';

export default function Project({ projects, postsPerPage = null }) {
    const [page, setPage] = useState(1);
    const slicedProjects = postsPerPage
        ? projects.slice((page - 1) * postsPerPage, page * postsPerPage)
        : projects;
    const handlePageChange = useCallback((_, newPage) => setPage(newPage), []);
    return (
        <section>
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                Projects.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-16 md:grid-rows-2">
                {slicedProjects.map((project) => (
                    <ProjectPreview
                        key={project.slug}
                        slug={project.slug}
                        title={project.title}
                        coverImage={project.coverImage}
                        excerpt={project.excerpt}
                        skills={project.skills}
                        demo={project.demo}
                        github={project.github}
                    />
                ))}
            </div>
            {postsPerPage && (
                <div className="flex-row flex justify-center mb-16">
                    <Pagination
                        count={Math.ceil(projects.length / postsPerPage)}
                        onChange={handlePageChange}
                        shape="rounded"
                    />
                </div>
            )}
        </section>
    );
}
