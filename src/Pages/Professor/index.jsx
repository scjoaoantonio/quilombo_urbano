import {Menu} from '../../Components/Menu'

import '../../Styles/bootstrap-icons.css'
import '../../global.css'
import './index.css'

import Back from '../../Components/Buttons/back'

export const Professor = () =>{
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
                                        <h2 class="mb-1">Inscrição (Professor)</h2>
                                        <p>Se inscreva para promover uma atividade</p>
                                    </div>

                                    <div class="booking-form-body">
                                        <div class="row">
                                            <div class="col-lg-6 col-12">
                                                <input type="text" name="bb-name" id="bb-name" class="form-control" placeholder="Nome completo" required/>
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <input type="number" name="bb-cpf" id="bb-cpf" class="form-control" placeholder="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required/>
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <input type="tel" class="form-control" name="bb-phone" placeholder="Celular" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required=""/>
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <input type="email" name="bb-email" id="bb-email" class="form-control" placeholder="Email" required/>
                                            </div>
                                            <textarea name="bb-message" rows="3" class="form-control" id="bb-message" placeholder="Faça uma descrição da atividade (Equipamentos necessários, local indicado, etc)"></textarea>
                                            

                                        </div>
                                        <div class="col-lg-4 col-md-10 col-8 mx-auto">
                                            <button type="submit" class="form-control">Confirmar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

    );
};