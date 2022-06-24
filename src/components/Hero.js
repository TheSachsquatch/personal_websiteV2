import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Circle from './circle.svg';

const Section = styled.section`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items:center;
    background: white;
`;

const Image = styled(motion.img)`
    position:absolute;
    width:300%;
    height:300%;
    max-width:200px;
    max-height:200px;
`;
const Bottom = styled.div`
    display: flex;
    padding:3rem;
    position:relative;
    ${Image}:nth-child(1){
        right:500px;
        top:10px;
    }

    ${Image}:nth-child(2){
        right:200px;
        
    }

    ${Image}:nth-child(3){
        top:10px;
        left:0px;
    }

    ${Image}:nth-child(4){
        top:50px;
        left:240px;
    }
`;

const Hero = () => {
    return (
        <Section>
             <Bottom>
                <Image src={Circle} alt="circle" 
                    whileTap = {{scale:0.9}}
                    drag={true}
                    dragConstraints = {{left:-100, right: 1000, bottom:100, top:0}}
                    initial= {{opacity:0, x:-100}}
                    animate= {{opacity: 1, x:0, transition: {duration:1}}}
                />
                <Image src={Circle} alt="circle" 
                    whileTap = {{scale:0.9}}
                    drag={true}
                    dragConstraints = {{left:-450, right: 700, bottom:100, top:0}}
                    initial= {{opacity:0, y:-100}}
                    animate= {{opacity: 1, y:0, transition: {duration:1}}}
                />
                <Image src={Circle} alt="circle" 
                    whileTap = {{scale:0.9}}
                    drag={true}
                    dragConstraints = {{left:-700, right: 500, bottom:100, top:0}}
                    initial= {{opacity:0, y:100}}
                    animate= {{opacity: 1, y:0, transition: {duration:1}}}
                />
                <Image src={Circle} alt="circle" 
                    whileTap = {{scale:0.9}}
                    drag={true}
                    dragConstraints = {{left:-850, right: 250, bottom:100, top:0}}
                    initial= {{opacity:0, x:100}}
                    animate= {{opacity: 1, x:0, transition: {duration:1}}}
                />
            </Bottom>
        </Section>
    );
};

export default Hero;
