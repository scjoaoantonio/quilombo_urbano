import FOTO1 from "../../Images/justiça.jpg"
import FOTO2 from "../../Images/mariele.jpg"
import FOTO3 from "../../Images/protesto.jpg"
import FOTO4 from "../../Images/reuniao.jpg"


export const Galeria = () =>{
    return(
        <div className="col-md-8 ms-sm-auto col-lg-9 p-0 edit">
        <div className="services-section section-padding" id="section_2">
            <div className="container">
                <div  className="row">
                    <div className="col-lg-12 col-12">
                        <h2 className="mb-5">Galeria</h2>
                    </div>                      
                    <div className="col-lg-6 col-12 mb-4">
                        <div className="services-thumb">
                            <img src={FOTO1} className="services-image img-fluid" alt=""/>

                            <div className="services-info d-flex align-items-end">
                                <h4 className="mb-0">Atividade</h4>

                                <strong className="services-thumb-price"></strong>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 mb-4">
                        <div className=" services-thumb">
                            <img src={FOTO2} className="services-image img-fluid" alt=""/>

                            <div className="services-info d-flex align-items-end">
                                <h4 className="mb-0">Aula</h4>

                                <strong className="services-thumb-price"></strong>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                        <div className=" services-thumb">
                            <img src={FOTO3} className="services-image img-fluid" alt=""/>

                            <div className=" services-info d-flex align-items-end">
                                <h4 className="mb-0">Evento</h4>

                                <strong className="services-thumb-price"></strong>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className=" services-thumb">
                            <img src={FOTO4} className="services-image img-fluid" alt="" />
                                

                            <div className="services-info d-flex align-items-end">
                                <h4 className="mb-0">Reunião</h4>

                                <strong className="services-thumb-price"></strong>
                            </div>
                        </div>
                    </div>
                    
            
                </div>
            </div>
        </div>
        </div>

    );
};



