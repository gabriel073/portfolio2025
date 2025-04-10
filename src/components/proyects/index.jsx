/* eslint-disable react/prop-types */


const projects = [
    {
        id: 1,
        title: "Pikapak",
        description: "Desarrollo de Landing Page, creación del diseño, adaptado a pantallas móbiles, más funcionalidades, como un formulario contacto, login controlado, registro de usuarios, recuperación de contraseña, notificaciones por mail, manejo de rutas, implementacion de CEO y google analitics para un buen posicionamiento y control de interacción en la web, despliegue en producción.",
        image: "/../public/assets/pikapak.png",
        technologies: ["Vite", "ReactJs", "Javascript", "axios", "react-router-dom", "Tailwind", "NodeJs", "Express", "JWT", "nodemailer", "prisma", "mysql", "git", "github", "scrum", "trello", "notion", "dotenv", "tailwindCSS", "PostgreSQL"],
        github: "https://github.com/gabriel073/pikapak",
        liveDemo: "https://pikapak.vercel.app/"
    },
    {
        id: 5,
        title: "Libreria Henry",
        description: "Un e-commerce de venta de libros físicos, con funciones como: logueo, panel de control de usuarios, favoritos, dark mode, cambio idioma, simulación de pago con tarjeta. Fue un proyecto con varios desarrolladores, donde se organizó y culminó éste trabajo organizado con metodología scrum.",
        image: "/../public/assets/libreriaHenry.png",
        technologies: ["React", "Tailwind CSS", "Node.js", "Redux", "ChakraUI", "Javascript", "Express", "Nodemailer", "i18n", "postgresSQL", "MySQL", "Sequelize", "Git", "Github", "Scrum", "Trello", "Notion", "tailwindCSS"],
        github: "https://www.notion.so/Repos-App-Libreria-Henry-c8a1a2c5fc3948c09448243d5e1fc4dd",
        liveDemo: "https://henry-library.netlify.app/"
    },
    {
        id: 2,
        title: "MultiGames",
        description: "Multi Games es una aplicación web con un menú que contiene 3 juegos clásicos que atrapa al usuario a entrenerse y salir un poco de la rutina, el clásico juego de memoria donde hay que encontrar en un tablero ramdon, las 2 fichas que coinciden, el tipico tipeador de palabras por tiempo, y adivina pokemon donde aparece la silueta de personajes ramdon detrás de unas hierbas y tendrás que saber de quién se trata.",
        image: "/../public/assets/multiGames.png",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/gabriel073/multiProjects",
        liveDemo: "https://multi-games.vercel.app/"
    },
    {
        id: 4,
        title: "Recipes App",
        description: "Recipes App fue realizada para consultar recetas, crear, actualizar, eliminar, podes filtrar por tipos, ordenar alfabéticamente, fue realizada durante el bootcamp soy henry.",
        image: "../../../public/assets/recipesApp.png",
        technologies: ["React", "Javascript", "Tailwind CSS", "Node.js", "Redux", "ChakraUI", "Express", "Git", "Github", "Scrum", "Notion", "dotenv", "axios"],
        github: "https://github.com/gabriel073/PI_FOOD",
        liveDemo: "https://youtu.be/8bP8FS9GXc0"
    },

    {
        id: 6,
        title: "Tu Asistencia",
        description: "Aplicación para organizar tareas diarias de manera eficiente.",
        image: "../../../public/assets/tuAsistencia.png",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/tu-usuario/task-manager",
        demliveDemo: "https://task-manager.com"
    },
    {
        id: 3,
        title: "psicoEspacio",
        description: "Aplicación para organizar tareas diarias de manera eficiente.",
        image: "../../../public/assets/psicoEspacio.png",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/tu-usuario/task-manager",
        liveDemo: "https://task-manager.com"
    },

];


const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm hover:shadow-lg transition-all">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-4 flex justify-between">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:underline"
                    >
                        Ver Proyecto
                    </a>
                </div>
            </div>
        </div>
    );
};

const ProjectsGrid = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Mis Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsGrid;
