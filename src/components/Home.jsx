import React from "react";
import Hero from './Hero';
import Bot from "./Bot"
function Home(){

  return(
    <div className = "home">
      <div class = "container">
        <h1 class = "display-1 mt-5">
          Hi, I'm Sachin Vijayaraj.
        </h1>
        <h1 class = "lead mt-3 text-muted">
          I'm a sophomore at the University of Michigan studying CS.  Currently I'm working on a budget planning website.
          I have experience in a few common languages like C++, Java, and Python, as well as some web frameworks like React and Flask.
          In school, I'm involved with a quantitative investing club, where we're currently exploring methods of algorithmic trading.
          You can see my work on the projects tab or by visiting my github.
        </h1>
      </div>
      <Hero />
      <div class = "bottom">
        <Bot />
      </div>
    </div>
  );

}

export default Home;
