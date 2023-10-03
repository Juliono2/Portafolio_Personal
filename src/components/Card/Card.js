import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons'

import './Card.css';
import Modal from "../Modal/Modal";

function Card(props) {
  const { projectName, githubLink, projectPhoto, openModal } = props;

    return (
        <div class="card">
          <div class="card__img">
            <img src={projectPhoto} alt="Proyecto" />
          </div>
          <div class="card__info">
            <div class="card__title">
                <h2>{projectName}</h2>
            </div>
            <div class="card__proyect-links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
                <a href="">
                <FontAwesomeIcon icon={faGlobe} size="2x"/>
                </a>
                <a href="">
                <FontAwesomeIcon icon={faCode} size="2x"/>
                </a>
            </div>
            <div class="button-content">
                <button class="detail-button" onClick={() => openModal(projectName)}>
                <a href="#">Project Details</a>
                </button>
            </div>
          </div>
        </div>
    )
}

export default Card;