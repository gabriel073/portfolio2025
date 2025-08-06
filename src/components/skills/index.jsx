import './style.css'

function Skills() {
    return (
        <div
            id="skills"
            className="bg-gradient-to-b from-blue-800 to-white p-4 flex flex-col items-center justify-center min-h-screen max-h-[90vh] overflow-y-auto opacity-85 space-y-14"
        >
            <h1 className="text-center text-4xl text-white">Tecnologías</h1>

            <div className="flex flex-wrap gap-8 w-[90%] justify-center items-center mb-12">
                {[
                    {
                        src: "https://icongr.am/devicon/javascript-original.svg?size=64&color=currentColor",
                        alt: "icon-js",
                        title: "Javascript"
                    },
                    {
                        src: "https://icongr.am/devicon/nodejs-plain.svg?size=64&color=currentColor",
                        alt: "icon-nodeJs",
                        title: "NodeJs"
                    },
                    {
                        src: "https://icongr.am/devicon/typescript-original.svg?size=64&color=currentColor",
                        alt: "icon-typescript",
                        title: "Typescript"
                    },
                    {
                        src: "../assets/express.svg",
                        alt: "icon-express",
                        title: "Express"
                    },
                    {
                        src: "https://icongr.am/devicon/npm-original-wordmark.svg?size=64&color=currentColor",
                        alt: "icon-npm",
                        title: "npm"
                    },
                    {
                        src: "https://icongr.am/devicon/react-original-wordmark.svg?size=64&color=currentColor",
                        alt: "icon-react",
                        title: "React"
                    },
                    {
                        src: "../assets/redux.svg",
                        alt: "icon-redux",
                        title: "Redux"
                    },
                    {
                        src: "https://icongr.am/devicon/mysql-original-wordmark.svg?size=64&color=currentColor",
                        alt: "icon-mySql",
                        title: "MySQL"
                    },
                    {
                        src: "https://icongr.am/devicon/sequelize-original.svg?size=64&color=currentColor",
                        alt: "icon-sequelize",
                        title: "Sequelize"
                    },
                    {
                        src: "https://icongr.am/devicon/postgresql-original-wordmark.svg?size=64&color=currentColor",
                        alt: "icon-postgresSql",
                        title: "PostgresSQL"
                    },
                    {
                        src: "https://icongr.am/devicon/css3-original-wordmark.svg?size=64&color=currentColor",
                        alt: "icon-css",
                        title: "CSS"
                    },
                    {
                        src: "https://icongr.am/devicon/sass-original.svg?size=64&color=currentColor",
                        alt: "icon-sass",
                        title: "SASS"
                    },
                    {
                        src: "../assets/chakraui.svg",
                        alt: "icon-chakraUI",
                        title: "ChakraUI"
                    },
                    {
                        src: "https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=64&color=currentColor",
                        alt: "icon-boostrap",
                        title: "Bootstrap"
                    },
                    {
                        src: "../assets/tailwindcss.svg",
                        alt: "icon-tailwind",
                        title: "Tailwind"
                    },
                    {
                        src: "https://icongr.am/devicon/git-original.svg?size=64&color=currentColor",
                        alt: "icon-git",
                        title: "GIT"
                    },
                    {
                        src: "https://icongr.am/devicon/github-original-wordmark.svg?size=64&color=currentColor",
                        alt: "icon-github",
                        title: "Github"
                    },
                    {
                        src: "../assets/scrum-48x48.ico",
                        alt: "icon-scrum",
                        title: "Scrum"
                    },
                    {
                        src: "https://icongr.am/devicon/trello-plain.svg?size=64&color=currentColor",
                        alt: "icon-trello",
                        title: "Trello"
                    },
                    {
                        src: "../assets/notion.svg",
                        alt: "icon-notion",
                        title: "Notion"
                    }
                ].map((icon, index) => (
                    <img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        title={icon.title}
                        className="w-12 sm:w-16 md:w-[90px] p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300 transition-all gap-6"
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;