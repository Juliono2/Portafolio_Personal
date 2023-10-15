import {Container, Row, Col} from "react-bootstrap";
import UnWapo from '../../assets/UnWapo.png'
import './Banner.css'

function Banner(){
    return (
        <main class="main">
            <div class="info-content">
                <h1>Hola, soy Julian <span>S</span>anchez</h1>
                <p>Un apasionado desarrollador de software con interés en
                la creacion de aplicaciones web y moviles. Mi objetivo es
                crear soluciones tecnologicas innovadoras y de alta calidad.
                </p>
                <a download href="#"><button class="download-cv">Descargar CV</button></a>
            </div>
            <img src={UnWapo} alt="Foto mia asi too wapo" />
        </main>
    )
}

export default Banner;