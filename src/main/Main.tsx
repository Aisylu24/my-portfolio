import React, {useCallback} from 'react';
import s from './Main.module.scss'
import commonStyle from '../common/styles/Container.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import {loadFull} from "tsparticles"
import mine from '../assets/images/mine.jpg'
import Title from "../common/components/title/Title";
import ReactTypingEffect from "react-typing-effect";

export const Main = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
            <div className={s.mainBlock} id={'home'}>
                <Particles
                    init={particlesInit}
                    className={s.particles}
                    options={{
                        fullScreen: {enable: true},
                        fpsLimit: 120,
                        interactivity: {
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.2,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.2,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: {min: 1, max: 5},
                            },
                        },
                        detectRetina: true,
                    }}
                    loaded={particlesLoaded}
                />
                <div className={commonStyle.container}>
                    <div className={s.text}>
                        <Title title={'Welcome!'} />
                        <h1>I am Timirshina Aysylu</h1>
                        <ReactTypingEffect text={"FRONTEND - DEVELOPER"}/>
                        <div>
                            <span> Kazan, Tatarstan </span>
                            <FontAwesomeIcon icon={faLocationDot} className={s.locationIcon}/>
                        </div>
                    </div>
                    <div className={s.photoDiv}>
                        <img src={mine} alt={"it's me"} className={s.photo}/>
                        <div className={s.photoFrame}/>
                    </div>

                </div>
            </div>
    );
};