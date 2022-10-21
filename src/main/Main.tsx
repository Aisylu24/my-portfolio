import React, {useCallback} from 'react';
import s from './Main.module.scss'
import commonStyle from '../common/styles/Container.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import {loadFull} from "tsparticles";

export const Main = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
            <div className={s.mainBlock}>
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
                        <span>Welcome!</span>
                        <h1>I am Timirshina Aysylu</h1>
                        <p>FRONTEND - DEVELOPER</p>
                        <div>
                            <span> Kazan, Tatarstan </span>
                            <FontAwesomeIcon icon={faLocationDot} className={s.locationIcon}/>
                        </div>
                    </div>
                    <div className={s.photo}></div>
                </div>
            </div>
    );
};