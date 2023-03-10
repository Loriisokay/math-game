import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
// import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesConfetti = (props) => {
    // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
    const options = useMemo(() => {
        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
        return {
            background: {
                color: "#000", // this sets a background color for the canvas
            },
            fullScreen: {
                zIndex: -1
            },
            particles: {
                color: {
                    value: [
                        "#FFFFFF",
                        "#FFd700"
                    ]
                },
                move: {
                    direction: "bottom",
                    enable: true,
                    outModes: {
                        default: "out"
                    },
                    size: true,
                    speed: {
                        min: 1,
                        max: 3
                    }
                },
                number: {
                    value: 500,
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                opacity: {
                    value: 1,
                    animation: {
                        enable: false,
                        startValue: "max",
                        destroy: "min",
                        speed: 0.3,
                        sync: true
                    }
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360
                    },
                    direction: "random",
                    move: true,
                    animation: {
                        enable: true,
                        speed: 60
                    }
                },
                tilt: {
                    direction: "random",
                    enable: true,
                    move: true,
                    value: {
                        min: 0,
                        max: 360
                    },
                    animation: {
                        enable: true,
                        speed: 60
                    }
                },
                shape: {
                    type: [
                        "circle",
                        "square",
                        "image"
                    ],
                    options: {
                        image: [
                            {
                                src: "https://particles.js.org/images/fruits/apple.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/avocado.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/banana.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/berries.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/cherry.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/grapes.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/lemon.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/orange.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/peach.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/pear.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/pepper.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/plum.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/star.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/strawberry.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/watermelon.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            },
                            {
                                src: "https://particles.js.org/images/fruits/watermelon_slice.png",
                                width: 32,
                                height: 32,
                                particles: {
                                    size: {
                                        value: 16
                                    }
                                }
                            }
                        ]
                    }
                },
                size: {
                    value: {
                        min: 2,
                        max: 4
                    }
                },
                roll: {
                    darken: {
                        enable: true,
                        value: 30
                    },
                    enlighten: {
                        enable: true,
                        value: 30
                    },
                    enable: true,
                    speed: {
                        min: 15,
                        max: 25
                    }
                },
                wobble: {
                    distance: 30,
                    enable: true,
                    move: true,
                    speed: {
                        min: -15,
                        max: 15
                    }
                }
            }
        }
    }, []);

    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
    }, []);

    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
    return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesConfetti;
