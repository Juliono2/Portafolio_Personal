import React from "react";
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
    return(
        <div class="skills">
          <h2 class="skills__subtitle">Algunas de mis habilidades</h2>
          <div class="divider"></div>
          <div class="skills__data">
            <h3 class="skills-title">Languages</h3>
            <div class="skills__names">
              <a href="#" class="skills__name"><img src={javascriptIcon} alt="js" /></a>
              <a href="#" class="skills__name"><img src={pythonIcon} alt="python" /></a>
              <a href="#" class="skills__name"><img src={cplusplusIcon} alt="c++" /></a>
              <a href="#" class="skills__name"><img src={javaIcon}alt="java" /></a>
              <a href="#" class="skills__name"><img src={htmlIcon} alt="html" /></a>
              <a href="#" class="skills__name"><img src={cssIcon} alt="css" /></a>
            </div>

            <h3 class="skills-title">Frameworks & Librerias</h3>
            <div class="skills__names">
              <a href="#" class="skills__name"><img src={reactIcon} alt="react" /></a>
              <a href="#" class="skills__name"><img src={flaskIcon} alt="flask" /></a>
              <a href="#" class="skills__name"><img src={angularIcon} alt="angular" /></a>
              <a href="#" class="skills__name"><img src={djangoIcon} alt="django" /></a>
              <a href="#" class="skills__name"><img src={materialUiIcon} alt="materialUI" /></a>
              <a href="#" class="skills__name"><img src={bootstrapIcon} alt="bootstrap" /></a>
            </div>

            <h3 class="skills-title">Tecnologias y Herramientas</h3>
            <div class="skills__names tools">
              <a href="#" class="skills__name"><img src={gitIcon} alt="git" /></a>
              <a href="#" class="skills__name"><img src={githubIcon} alt="github" /></a>
              <a href="#" class="skills__name"><img src={npmIcon} alt="npm" /></a>
              <a href="#" class="skills__name"><img src={nodejsIcon} alt="node" /></a>
              <a href="#" class="skills__name"><img src={vscodeIcon} alt="visual" /></a>
              <a href="#" class="skills__name enterprise"><img src={enterpriseIcon} alt="enterprise" /></a>
              <a href="#" class="skills__name"><img src={accessIcon} alt="access" /></a>
            </div>

            <h3 class="skills-title">Sistemas gestores de bases de datos</h3>
            <div class="skills__names database">
              <a href="#" class="skills__name"><img src={mysqlIcon} alt="Mysql" /></a>
              <a href="#" class="skills__name"><img src={postgresqlIcon} alt="Postgresql" /></a>
              <a href="#" class="skills__name"><img src={oracleIcon} alt="Oracle" /></a>
              <a href="#" class="skills__name plsql"><img src={plsqlIcon} alt="PLSql" /></a>
            </div>
          </div>
        </div>     
    )
}

export default Skills