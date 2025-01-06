import projects from '../projects'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
    return (
        <div>
            <h1>All My Projects</h1>
            {/* Cards for all projects to render to page */}
            {projects.map(p => <ProjectCard key={p.id} {...p} />)}
        </div>
    )
}

export default ProjectsList