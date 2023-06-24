import './installing.scss'

export default function Installing() {
    return (
        <>
        <section className="wrapper">

        <div className="container">

            <div id="scene" className="scene" data-hover-only="false">


                <div className="circle" data-depth="1.2"></div>

                <div className="one" data-depth="0.9">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="two" data-depth="0.60">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="three" data-depth="0.40">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <p className="p404" data-depth="0.50">505</p>
                <p className="p404" data-depth="0.10">505</p>

            </div>

            <div className="text">
                <article>
                    <p>Jelenleg a konténered telepűl. <br/> Kérlek várj! </p>
                    <a href='/'><button>Vissza a főoldalra</button></a>
                </article>
            </div>

        </div>
        </section>
        </>
    )
}