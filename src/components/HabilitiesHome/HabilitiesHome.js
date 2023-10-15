import React from 'react';
import Skills from '../Skills/Skills';
import Certifications from '../Certifications/Certifications';

import './HabilitiesHome.css'

function HabilitiesHome() {
    return (
        <div className="habilities-home">
            <div className="half">
                <Skills />
            </div>
            <div className="half">
                <Certifications />
            </div>
        </div>
    );
}

export default HabilitiesHome;