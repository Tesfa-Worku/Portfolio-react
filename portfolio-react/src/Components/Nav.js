
const Nav = () => {
    return(
        <header className="d-flex flex-column justify-content-evenly bg-dark p-3">
            <nav className="navbar navbar-dark bg-dark flex-wrap h-100 w-100 align-content-end">
                <a className="navbar-brand text-light p-lg-2" href="/">
                    <span className="fs-3">Hi, I'm <strong>Tesfa Worku</strong></span><br/>
                    <small>I build things for the <strong>web</strong></small>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon m-3 p-3"></span>
                </button>
                <div className="collapse navbar-collapse mt-lg-5" id="mainMenu">
                    <ul className="navbar-nav flex-column border-light border-top w-100">
                        <li className="nav-item border-light border-bottom">
                            <a className="nav-link active" aria-current="page" href="/">Profile</a>
                        </li>
                        <li className="nav-item border-light border-bottom">
                            <a className="nav-link" href="career-development.html">Career Development</a>
                        </li>
                        <li className="nav-item border-light border-bottom">
                            <a className="nav-link" href="portfolio.html">Portfolio</a>
                        </li>
                        <li className="nav-item border-light border-bottom">
                            <a className="nav-link" href="education.html">Education</a>
                        </li>
                        <li className="nav-item border-light border-bottom">
                            <a className="nav-link" href="contact.html">Contact Tesfa</a>
                        </li>
                    </ul>
                </div>                
            </nav>
        </header>
    )
}

export default Nav;