import React from "react";
import SwiperAuto from "../SwiperAuto/SwiperAuto";
import './Skills.css';

import javascriptIcon from '../../assets/icon/icons8-javascript.svg';
import pythonIcon from '../../assets/icon/icons8-python.svg';
import cplusplusIcon from '../../assets/icon/icons8-logotipo-de-c-plus-plus.svg';
import javaIcon from '../../assets/icon/icons8-logotipo-de-java-coffee-cup.svg';
import htmlIcon from '../../assets/icon/icons8-html.svg';
import cssIcon from '../../assets/icon/icons8-css.svg';
import plsqlIcon from '../../assets/icon/PLSql-removebg-preview.png';
import enterpriseIcon from '../../assets/icon/PEnterprise-removebg-preview.png';
import angularIcon from '../../assets/icon/icons8-angular.svg';
import bootstrapIcon from '../../assets/icon/icons8-bootstrap.svg';
import djangoIcon from '../../assets/icon/icons8-django.svg';
import flaskIcon from '../../assets/icon/icons8-flask.svg';
import gitIcon from '../../assets/icon/icons8-git.svg';
import githubIcon from '../../assets/icon/icons8-github.svg';
import materialUiIcon from '../../assets/icon/icons8-material-ui.svg';
import accessIcon from '../../assets/icon/icons8-microsoft-access-2019.svg';
import mysqlIcon from '../../assets/icon/icons8-mysql.svg';
import nodejsIcon from '../../assets/icon/icons8-nodejs.svg';
import npmIcon from '../../assets/icon/icons8-npm.svg';
import postgresqlIcon from '../../assets/icon/icons8-postgresql.svg';
import reactIcon from '../../assets/icon/icons8-react.svg';
import vscodeIcon from '../../assets/icon/icons8-visual-studio-code-2019.svg';
import oracleIcon from '../../assets/icon/icons8-logo-de-oracle.svg'

function Skills(){
  const LenguagesImages = [javascriptIcon, pythonIcon, cplusplusIcon, javaIcon, htmlIcon, cssIcon]
  const FrameworksImages = [reactIcon, flaskIcon, angularIcon, djangoIcon, materialUiIcon]
  const TechnologiesImages = [gitIcon, githubIcon, npmIcon, nodejsIcon, vscodeIcon, enterpriseIcon, accessIcon]
  const DatabaseImages = [mysqlIcon, postgresqlIcon, oracleIcon, plsqlIcon]
  
    return(
        <div class="skills">
          <h2 class="skills__subtitle">Algunas de mis habilidades</h2>
          <div class="divider"></div>
          <div class="skills__data">
            <h3 class="skills-title">Languajes</h3>
            <SwiperAuto images={LenguagesImages} />

            <h3 class="skills-title">Frameworks & Librerias</h3>
            <SwiperAuto images={FrameworksImages} />

            <h3 class="skills-title">Tecnologias y Herramientas</h3>
            <SwiperAuto images={TechnologiesImages} />

            <h3 class="skills-title">Sistemas gestores de bases de datos</h3>
            <SwiperAuto images={DatabaseImages} />
          </div>
        </div>     
    )
}

export default Skills