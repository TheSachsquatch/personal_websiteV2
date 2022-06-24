import React from "react";
import projImage from './project_image.JPG';
import Bot from "./Bot"
import ProjectCont from "./ProjectCont";
import proj2Image from './project_image_2.JPG'
import proj3Image from './project3.JPG'
import {motion} from 'framer-motion'

function Projects(){
  document.title = "Projects";

  const p1_desc=  `Flask app calling Spotify API to generate responsive search box for songs.
  Basic cosine similarity recommendation system used for generation using features generated from spotify.
  Selenium web scraping used to create youtube embeds for recommendations generated. Database storage using PostgresQL.
  Hosted on Heroku using Heroku database hobbyist plan.`
  const p1_title = "Cosine-Sim Song Recommendation System"
  const p1_link = "https://s-recommender-cosine.herokuapp.com/"

  const p2_desc = `React app using Spotify Web Playback SDK and Web API to randomly select songs based on search criteria, then playback songs for the user to guess.
  Frontend hosted on netlify and light Express/Node.js backend hosted on Heroku.  Backend uses express sessions stored on PSQL database to log in users through spotify portal,
  with PSQL hosted on Heroku.`
  const p2_title = "Guess the Song"
  const p2_link = "https://song-guess.netlify.app/"

  const P3_desc = `Full-stack MERN web app designed to create and save workout routines.  React frontend hosted on netlify, uses Tailwind UI.  Express and Node.js backend
  with secure JWT login and Google sign-in support.  Playwright web scraping to find videos based on exercise.  User login information and video URLs stored using Mongo DB Atlas.  Drag
  and drop UI functionality`
  const p3_title = "Routinify"
  const p3_link = "https://routinifly.netlify.app/dashboard"

  return(
    <div className = "home">
      <div className= "container col-5 mt-3 mb-3">
        <motion.div className= "mb-5" initial = {{x:-500}} animate= {{x:0}} transition = {{type: "spring", duration: 1}}>
          <ProjectCont projImage={projImage} project_descrip= {p1_desc} project_link = {p1_link} project_title = {p1_title}/>
        </motion.div>
        <motion.div className= "mb-5" initial = {{x:-500}} animate= {{x:0}} transition = {{type: "spring", duration: 1}}>
          <ProjectCont projImage={proj2Image} project_descrip= {p2_desc} project_link = {p2_link} project_title = {p2_title}/>
        </motion.div>
        <motion.div className= "mb-5" initial = {{x:-500}} animate= {{x:0}} transition = {{type: "spring", duration: 1}}>
          <ProjectCont projImage={proj3Image} project_descrip= {P3_desc} project_link = {p3_link} project_title = {p3_title}/>
        </motion.div>
      </div>
      <div className = "bottom">
            <Bot />
        </div>
    </div>
  );

}

export default Projects;
