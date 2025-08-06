import './style.css'

function Skills() {
    return (
        <div id="skills" className="bg-gradient-to-b  from-blue-800  to-white bg-blur-b-xl p-4 flex flex-col  items-center justify-center h-[48rem] opacity-85 space-y-14">
            <h1 className=" text-center text-4xl " id="skills" >Tecnologías</h1>

            <div className="flex row gap-6  flex-wrap w-[90%] justify-center items-center mb-12">
                <img src='https://icongr.am/devicon/javascript-original.svg?size=64&color=currentColor' alt="icon-js" className=" hover:scale-150 hover:shadow-xl hover:shadow-neutral-300 transition-all" width='90' data-toggle="tooltip" title="Javascript" />
                <img src="https://icongr.am/devicon/nodejs-plain.svg?size=64&color=currentColor" alt="icon-nodeJs" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="NodeJs" />
                <img src="https://icongr.am/devicon/typescript-original.svg?size=64&color=currentColor" alt="icon-typescript" width='90' className="  hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Typescript" />
                <img src="../assets/express.svg" alt="icon-express" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Express" />
                <img src="https://icongr.am/devicon/npm-original-wordmark.svg?size=64&color=currentColor" alt="icon-npm" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="npm" />
                <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=64&color=currentColor" alt="icon-react" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="React" />
                <img src="../assets/redux.svg" alt="icon-redux" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Redux" />
                <img src="https://icongr.am/devicon/mysql-original-wordmark.svg?size=64&color=currentColor" alt="icon-mySql" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="MySQL" />
                <img src="https://icongr.am/devicon/sequelize-original.svg?size=64&color=currentColor" alt="icon-sequelize" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Sequelize" />
                <img src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=64&color=currentColor" alt="icon-postgresSql" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="PostgresSQL" />
                <img src="https://icongr.am/devicon/css3-original-wordmark.svg?size=64&color=currentColor" alt="icon-css" width='90' className=" hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="CSS" />
                <img src="https://icongr.am/devicon/sass-original.svg?size=64&color=currentColor" alt="icon-sass" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="SASS" />
                <img src="../assets/chakraui.svg" alt="icon-chakraUI" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="ChakraUI" />
                <img src="https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=64&color=currentColor" alt="icon-boostrap" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Boostrap" />
                <img src="../assets/tailwindcss.svg" alt="icon-tailwind" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Tailwind" />
                <img src="https://icongr.am/devicon/git-original.svg?size=64&color=currentColor" alt="icon-git" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="GIT" />
                <img src="https://icongr.am/devicon/github-original-wordmark.svg?size=64&color=currentColor" alt="icon-github" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Github" />
                <img src="../assets/scrum-48x48.ico" alt="icon-scrum" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Scrum" />
                <img src="https://icongr.am/devicon/trello-plain.svg?size=64&color=currentColor" alt="icon-trello" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Trello" />
                <img src="../assets/notion.svg" alt="icon-notion" width='90' className="p-1 hover:scale-150 hover:shadow-xl hover:shadow-neutral-300  transition-all" data-toggle="tooltip" title="Notion" />

            </div>
        </div >
    )
}

export default Skills;