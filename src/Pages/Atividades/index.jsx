import PROF from '../../Images/prof.jpeg'
import AULA from '../../Images/aula.jpeg'


export const Atividades = () =>{
    return(
        <div className="col-md-8 ms-sm-auto col-lg-9 p-0 edit">
            <section className="about-section section-padding" id="section_3">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-12 col-12 mx-auto">
                                    <h2 className="mb-4">Atividades</h2>

                                    <div className="border-bottom pb-3 mb-5">
                                        <p> Centro Cultural Quilombo Urbano funciona como um lugar de encontro e estudo, um laboratório de experimentações e desenvolvimento de habilidades, por meio da viabilização de um cronograma de atividades pontuais, semanais, quinzenais e mensais, para toda comunidade do São Dimas e interessados nas vivências proporcionadas pelo mesmo </p>
                                    </div>
                                </div>

                                    <h6 className="mb-5">Inscrições</h6>

                                        <div className="col-lg-5 col-12 custom-block-bg-overlay-wrap me-lg-5 mb-5 mb-lg-0">
                                            <img src={PROF} className="custom-block-bg-overlay-image img-fluid" alt=""/>

                                            <div className="team-info d-flex align-items-center flex-wrap">
                                                <a  href='/professor' className="mb-0">Quero ensinar</a>

                                                <ul className="social-icon ms-auto">
                                                    <li className="social-icon-item">
                                                        <a href="/professor" className="social-icon-link bi bi-arrow-up-right">
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-12 custom-block-bg-overlay-wrap mt-4 mt-lg-0 mb-5 mb-lg-0">
                                            
                                            <img src={AULA}className="custom-block-bg-overlay-image img-fluid" alt=""/>

                                            <div className="team-info d-flex align-items-center flex-wrap">
                                                <a href='/aluno' className="mb-0">Quero aprender</a>

                                                <ul className="social-icon ms-auto">
                                                    <li className="social-icon-item">
                                                        <a href="/aluno" className="social-icon-link bi bi-arrow-up-right">
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                </div>

                            </div>
                        </div>
                    </section>
        </div>

    );
};

