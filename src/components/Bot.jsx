import React from "react";
import Pdf from './resume.pdf'
function Bot(){
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark pillBot">
            <div className="container">
                <div>
                    <ul className = "nav">
                        <li class = "nav-item">
                            <a class="nav-link cv" href={Pdf} without rel="noopener noreferrer" target="_blank" >
                                <h4>
                                    Check out my CV
                                </h4>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Bot;