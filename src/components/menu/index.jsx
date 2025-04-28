import "./style.css";
function MenuFlotatnte() {
    const menu = document.getElementById("menu-flotante");
    const scrollThreshold = 50; // Definir a partir de qué scroll se muestra

    window.addEventListener("scroll", () => {
        if (window.scrollY > scrollThreshold) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    return (
        <section>
            <nav className=" menu_scale-up fade-away">
                <article id="menu-flotante" className=" border-2 border-solid border-black  rounded-3xl text-center p-4 space-x-6" >
                    <a href="#proyects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </article>
            </nav>
        </section>
    )
}

export default MenuFlotatnte;