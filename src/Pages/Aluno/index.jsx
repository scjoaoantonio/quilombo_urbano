import {Menu} from '../../Components/Menu'

import '../../Styles/bootstrap-icons.css'
import '../../global.css'
import './index.css'

import Back from '../../Components/Buttons/back'

export const Aluno = () =>{
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
                                        <h2 class="mb-1">Inscrição (Aluno)</h2>
                                        <p>Se inscreva para participar das aulas</p>
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
                                            <div class="col-lg-6 col-12">
                                                <input type="text" name="bb-name" id="bb-name" class="form-control" placeholder="Responsável"/>
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <select class="form-select form-control" name="bb-branch" id="bb-branch" aria-label="Default select example">
                                                    <option selected="">Atividade 1</option>
                                                    <option value="Grünberger">Atividade 2</option>
                                                    <option value="Behrenstraße">Atividade 3</option>
                                                    <option value="Weinbergsweg">Atividade 4</option>
                                                </select>

                                            </div>
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