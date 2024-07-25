import {Link, NavLink, useLocation } from 'react-router-dom';

function Nav(){
    //const currentPage=useLocation().pathname;

    return(
        <section className="d-flex flex-row">
            <nav >
                <div>
                <a href="./pages/Portfolio" >Portfolio</a>
                </div>
                <div>
                {/* <Link to="/About" className={currentPage === '/'? 'nav-link active':'nav-link'}>About</Link> */}
                </div>
                <div>
                {/* <Link to="/Resume" className={currentPage === '/'? 'nav-link active':'nav-link'}>Resume</Link> */}
                </div>
                <div>
                {/* <Link to="/Contact" className={currentPage === '/'? 'nav-link active':'nav-link'}>Contact</Link> */}
                </div>
            </nav>
        </section>
    );
}

export default Nav;