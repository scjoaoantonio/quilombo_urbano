import { Menu } from "../../Components/Menu";

import { Inicio } from "../Inicio";
import { Galeria } from "../Galeria";
import { Atividades } from "../Atividades";
import { Contato } from "../Contato";

export const Home = () =>{
    return(
        <>
            <Menu/>
            <Inicio/>
            <Galeria/>
            <Atividades/>
            <Contato/>
        </>
    );
};
