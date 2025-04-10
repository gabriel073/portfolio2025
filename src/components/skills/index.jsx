

function Skills() {
    return (
        <div id="skills" className="justify-center items-center flex flex-col my-10">
            <h1 className="text-3xl mb-4" >Skills</h1>
            {/* flexDirection='row' flexWrap='wrap' gap='50' alignContent='center' justifyContent='center'  */}
            <div className="flex row gap-6 flex-wrap w-[80%] justify-center items-center">
                <img src='https://icongr.am/devicon/javascript-original.svg?size=64&color=currentColor' alt="icon-js" width='60' data-toggle="tooltip" title="Javascript" />
                <img src="https://icongr.am/devicon/nodejs-plain.svg?size=64&color=currentColor" alt="icon-nodeJs" width='60' data-toggle="tooltip" title="NodeJs" />
                <img src="https://icongr.am/devicon/typescript-original.svg?size=64&color=currentColor" alt="icon-typescript" width='60' data-toggle="tooltip" title="Typescript" />
                <img src="../public/assets/express.svg" alt="icon-express" width='60' data-toggle="tooltip" title="Express" />
                <img src="https://icongr.am/devicon/npm-original-wordmark.svg?size=64&color=currentColor" alt="icon-npm" width='60' data-toggle="tooltip" title="npm" />
                <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=64&color=currentColor" alt="icon-react" width='60' data-toggle="tooltip" title="React" />
                <img src="../public/assets/redux.svg" alt="icon-redux" width='60' data-toggle="tooltip" title="Redux" />
                <img src="https://icongr.am/devicon/mysql-original-wordmark.svg?size=64&color=currentColor" alt="icon-mySql" width='60' data-toggle="tooltip" title="MySQL" />
                <img src="https://icongr.am/devicon/sequelize-original.svg?size=64&color=currentColor" alt="icon-sequelize" width='60' data-toggle="tooltip" title="Sequelize" />
                <img src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=64&color=currentColor" alt="icon-postgresSql" width='60' data-toggle="tooltip" title="PostgresSQL" />
                <img src="https://icongr.am/devicon/css3-original-wordmark.svg?size=64&color=currentColor" alt="icon-css" width='60' data-toggle="tooltip" title="CSS" />
                <img src="https://icongr.am/devicon/sass-original.svg?size=64&color=currentColor" alt="icon-sass" width='60' data-toggle="tooltip" title="SASS" />
                <img src="../public/assets/chakraui.svg" alt="icon-chakraUI" width='60' data-toggle="tooltip" title="ChakraUI" />
                <img src="https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=64&color=currentColor" alt="icon-boostrap" width='60' data-toggle="tooltip" title="Boostrap" />
                <img src="../public/assets/tailwindcss.svg" alt="icon-tailwind" width='60' data-toggle="tooltip" title="Tailwind" />
                <img src="https://icongr.am/devicon/git-original.svg?size=64&color=currentColor" alt="icon-git" width='60' data-toggle="tooltip" title="GIT" />
                <img src="https://icongr.am/devicon/github-original-wordmark.svg?size=64&color=currentColor" alt="icon-github" width='60' data-toggle="tooltip" title="Github" />
                <img src="../public/assets/scrum-48x48.ico" alt="icon-scrum" width='60' data-toggle="tooltip" title="Scrum" />
                <img src="https://icongr.am/devicon/trello-plain.svg?size=64&color=currentColor" alt="icon-trello" width='60' data-toggle="tooltip" title="Trello" />
                <img src="../public/assets/notion.svg" alt="icon-notion" width='60' data-toggle="tooltip" title="Notion" />

            </div>
        </div >
    )
}

export default Skills;