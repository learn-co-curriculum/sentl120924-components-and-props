const ProjectCard = ({name, about, phase, image}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{about}</p>
            <p>Phase {phase}</p>
            <img style={{maxHeight: '200px'}} src={image} alt="image of my application" />
        </div>
    )
}

export default ProjectCard