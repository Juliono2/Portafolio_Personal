import Progra_melo from '../../assets/Progra_melo.jpg';
import './AboutMe.css';

function AboutMe(){
    return (
        <div class="about">
            <div class="about-info">
                <h2>Sobre mi</h2>
                <div class="divider"></div>
                <p>Soy estudiante de último semestre en Ingeniería de Sistemas de la Universidad Distrital, actualmente no cuento con experiencia en el desarrollo de software, pero no ha sido motivo para estar desactualizado de las tecnologías aplicadas hoy en día.  He trabajado en proyectos académicos desafiantes en áreas como desarrollo web, aplicaciones móviles, haciendo uso de conexiones a bases de datos. Me encanta aprender nuevas tecnologías y abordar problemas complejos."</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores id cumque asperiores fugit, quis repudiandae accusamus quisquam modi numquam laudantium fugiat enim eum pariatur amet illum recusandae debitis reprehenderit sed?</p>
                <button class="download-cv">Leer más</button>
            </div>
            <img src={Progra_melo}alt="Imagen de programado tramador" />
        </div>
    )
}

export default AboutMe;
