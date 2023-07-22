import '../../Styles/bootstrap-icons.css'
import '../../Styles/bootstrap.min.css'

import LOGO from '../../Images/logo.png'

export const Menu = () =>{
    return(
        <>

    <nav id="sidebarMenu" className="col-md-4 col-lg-3 d-md-block sidebar collapse p-0">

        <div className="position-sticky sidebar-sticky d-flex flex-column justify-content-center align-items-center">
            <a className="navbar-brand" href="index.html">
                <img src={LOGO} className="logo-image img-fluid" align=""/>
            </a>

            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_1">Início</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_2">Galeria</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_3">Atividades</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_4">Contato</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_5">Entrar</a>
                </li>
            </ul>
        </div>
    </nav>



    </>
    );
};
