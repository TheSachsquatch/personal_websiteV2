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
const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw-1300px)/2);

    @media screen and (max-width: 768px){
        grid-grid-template-columns: 1fr;
    }
`;
const Image = styled(motion.img)`
    position:absolute;
    width:100%;
    height:100%;
    max-width:200px;
    max-height:200px;
`;
const Bottom = styled.div`
    display: flex;
    padding:3rem
    position:relative;
    ${Image}:nth-child(1){
        right:200px;
    }

    ${Image}:nth-child(2){
        left:200px;
    }

    ${Image}:nth-child(3){
        top: 300px;
        left: 500px;
    }
`;

const Hero = () => {
    return (
        <Section>
             <Bottom>
                <Image src={Circle} alt="circle" 
                    whileTap = {{scale:0.9}}
                    drag={true}
                    dragConstraints = {{left:250, right: 0, bottom:100, top:0}}
                    initial= {{opacity:0, x:-100}}
                    animate= {{opacity: 1, x:0, transition: {duration:1}}}
                />
                <Image src={Circle} alt="circle" 
                    whileTap = {{scale:0.9}}
                    drag={true}
                    dragConstraints = {{left:100, right: 250, bottom:100, top:0}}
                    initial= {{opacity:0, y:-100}}
                    animate= {{opacity: 1, y:0, transition: {duration:1}}}
                />
                <Image src={Circle} alt="circle" 
                    whileTap = {{scale:0.9}}
                    drag={true}
                    dragConstraints = {{left:100, right: 250, bottom:100, top:0}}
                    initial= {{opacity:0, y:100}}
                    animate= {{opacity: 1, y:0, transition: {duration:1}}}
                />
                <Image src={Circle} alt="circle" 
                    whileTap = {{scale:0.9}}
                    drag={true}
                    dragConstraints = {{left:250, right: 100, bottom:100, top:0}}
                    initial= {{opacity:0, x:100}}
                    animate= {{opacity: 1, x:0, transition: {duration:1}}}
                />
            </Bottom>
        </Section>
    );
};

export default Hero;
