import {Menu} from '../../Components/Menu'

import '../../Styles/bootstrap-icons.css'
import '../../global.css'
import './index.css'

import Back from '../../Components/Buttons/back'

export const Mensagem = () =>{
    return(
            <section class="booking-section section-padding" id="booking-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-12 mx-auto">
                                <form action="#" method="post" class="custom-form booking-form" id="bb-booking-form" role="form">
                                    <div class="text-center mb-5">
                                        <div className='edit-booking'>
                                            <Back VoltarPara={'/'} label={'Voltar'}></Back>
                                        </div>
                                        <h2 class="mb-1">Contato</h2>
                                        <p>Nos envie uma mensagem</p>
                                    </div>

                                    <div class="booking-form-body">
                                        <div class="row">
                                            <div class="col-lg-6 col-12">
                                                <input type="text" name="bb-name" id="bb-name" class="form-control" placeholder="Nome" required/>
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <input type="email" name="bb-email" id="bb-email" class="form-control" placeholder="Email" required/>
                                            </div>
                                            <textarea name="bb-message" rows="3" class="form-control" id="bb-message" placeholder="Mensagem"></textarea>
                                            

                                        </div>
                                        <div class="col-lg-4 col-md-10 col-8 mx-auto">
                                            <button type="submit" class="form-control">Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

    );
};