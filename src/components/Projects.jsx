import React from "react";
import projImage from './project_image.JPG';
import Bot from "./Bot"
function Projects(){

  return(
    <div className = "home">
      <div class= "container col-5 mt-3">
          <div class = "card shadow-sm bg-info border-0">
              <h3 class = "card-title mt-3 px-4">
                Cosine-Sim Song Recommendation System
              </h3>
              <div class = "card-img-top px-5 mt-2 mb-3">
                    <img class="rounded mx-auto d-block img-fluid" src={projImage} alt="Second slide"/>
              </div>
              <p class = "card-text px-4">
                Flask app calling Spotify API to generate responsive search box for songs.
                Basic cosine similarity recommendation system used for generation using features generated from spotify.
                Selenium web scraping used to create youtube embeds for recommendations generated. Database storage using PostgresQL.
                Hosted on Heroku using Heroku database hobbyist plan.
              </p>
              <a href = "https://s-recommender-cosine.herokuapp.com/" target = "_blank" class = "btn btn-primary bg-secondary text-white border-0">
                <h3>
                  link to project
                </h3>
              </a>
            </div>
          </div>
          <div class = "bottom">
            <Bot />
          </div>
         
      </div>
  );

}

export default Projects;
