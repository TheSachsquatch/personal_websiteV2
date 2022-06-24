import React from 'react'

export default function ProjectCont({project_title, project_link, project_descrip, projImage}) {
  return (
    <div class = "card shadow-sm bg-info border-0">
              <h3 class = "card-title mt-3 px-4">
                {project_title}
              </h3>
              <div class = "card-img-top px-5 mt-2 mb-3">
                    <img class="rounded mx-auto d-block img-fluid" src={projImage} alt="Second slide"/>
              </div>
              <p class = "card-text px-4">
                {project_descrip}
              </p>
              <a href = {project_link} target = "_blank" rel = "noreferrer" class = "btn btn-primary bg-secondary text-black border-0 hvr">
                <h3>
                  link to project
                </h3>
              </a>
    </div>
  )
}
