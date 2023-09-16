import Primary from "../../Components/Buttons/primary";

export const Contato = () =>{
    return(
        <div className="col-md-8 ms-sm-auto col-lg-9 p-0 edit">
            <section className="contact-section" id="section_4">
                    <div className="section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <h3 className="mb-4">Resgatamos e compartilhamos o nosso legado</h3>
                                    
                                    <ul className="social-icon">
                                        <li className="social-icon-item">
                                            <a href="www.facebook.com.br" className="social-icon-link bi-facebook">
                                            </a>
                                        </li>
                                        <li className="social-icon-item">
                                            <a href="www.instagram.com.br" className="social-icon-link bi-instagram">
                                            </a>
                                        </li>
                                        <li className="social-icon-item">
                                            <a href="mailto:mnsjdr.quilombourbano@gmail.com" className="social-icon-link bi-envelope-fill">
                                            </a>
                                        </li>

                                        <li className="social-icon-item">
                                            <a href="www.twitter.com.br" className="social-icon-link bi-twitter">
                                            </a>
                                        </li>

                                        <li className="social-icon-item">
                                            <a href="www.youtube.com.br" className="social-icon-link bi-youtube">
                                            </a>
                                        </li>

                                        <li className="social-icon-item">
                                            <a href="www.whatsapp.com.br" className="social-icon-link bi-whatsapp">
                                            </a>
                                        </li>
                                        
                                    </ul>
                                    
                                </div>

                                <div className="col-lg-5 col-12 contact-block-wrap mt-5 mt-lg-0 pt-4 pt-lg-0 mx-auto">
                                    <div className="contact-block">
                                        <h6 className="mb-0">
                                            <a href="/mensagem"><span>Entre em<br/>contato<br/> e participe <br/> com a gente!</span></a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <footer className="site-footer">
                        <div className="site-footer-bottom">
                        
                            <div className="container">
                                <div className="row align-items-center">
    
                                    <div className="col-lg-8 col-12 mt-4">
                                    <p className="text-white d-flex">
                                        <a href="https://www.canva.com/design/DAFaG-e2cPc/XQt2a3rkgu_PAl1OeZWURQ/view?utm_content=DAFaG-e2cPc&utm_campaign=designshare&utm_medium=link&utm_source=viewer" className="site-footer-link">
                                            Clique para saber mais informações 
                                        </a>
                                    </p>
                                        <p className="copyright-text mb-0">Página feita para o trabalho de Introdução à Engenharia de Software - Ciência da Computação UFSJ</p>
                                    </div>
    
                                    <div className="col-lg-2 col-md-3 col-3 mt-lg-4 ms-auto">
                    <Primary IrPara={'/mensagem'} label={"Enviar mensagem"}></Primary>

                                    </div>
    
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>

        </div>

    );
};
