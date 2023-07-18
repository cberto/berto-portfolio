import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../../App';
import skills from '../../components/icons/icons.json';
import { AppWrap, MotionWrap } from '../../wrapper';
import { AboutIcon, Formation, HatIcon, StarIcon, TemplateSkill } from '../../components';
import Experience from '../../components/Experience/Experience';

const About = () => {
    const langContext = useContext(LangContext);
    const lang = langContext.aboutme;

    const imageTexts = lang.imageTexts;
    const aboutme = lang.about;
    const formation = lang.formation;
    const titleSkills = lang.skills.title;

    const experience = lang.experience;

    return (
        <div className="app__container max-w-screen-lg mx-auto mt-10 md:mt-20 mb-4 px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-8">
                <motion.div
                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="sticky top-20 hidden md:flex flex-col gap-3"
                >
                    <div className="h-60 w-60 rounded-full border-4 border-purple-300 overflow-hidden">
                        <img src="./me.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h3 className="text-center font-Prompt text-2xl font-bold uppercase italic">
                        Camila Bertolani
                    </h3>
                    <div className="animation mt-[-1.5rem] flex flex-col gap-1">
                        <span className="text-center text-sm uppercase text-CustomBlack">{imageTexts.text1}</span>
                        <span className="text-center text-sm uppercase">{imageTexts.text2}</span>
                    </div>
                </motion.div>
                <div className="flex-1 md:mt-8"> {/* Agregada clase md:mt-8 */}
                    <motion.div
                        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-4 flex items-center gap-4">
                            <AboutIcon />
                            <h2 className="text-3xl font-bold text-purple-500">{aboutme.title}</h2>
                        </div>
                        <div className="flex flex-col gap-6 tracking-wide">
                            <p>{aboutme.paragraph1}</p>
                            <p>{aboutme.paragraph2}</p>
                            <div className="mb-8">
                                <p>{aboutme.paragraph3}</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full md:w-1/2">
                                <div className="mb-4 flex items-center gap-4">
                                    <HatIcon />
                                    <h2 className="text-3xl font-bold text-purple-500">{formation.title}</h2>
                                </div>
                                <div>
                                    {formation.formationDetails.map((item, index) => (
                                        <Formation item={item} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="mb-4 flex items-center gap-4">
                                    <AboutIcon />
                                    <h2 className="text-3xl font-bold text-purple-500">{experience.title}</h2>
                                </div>
                                <div>
                                    {experience.experienceDetails.map((item, index) => (
                                        <Experience item={item} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="mb-4 flex items-center gap-4">
                            <StarIcon />
                            <h2 className="text-3xl font-bold text-purple-500">{titleSkills}</h2>
                        </div>
                        <motion.div className="flex flex-wrap justify-center">
                            {skills.skills.map((item, index) => {
                                return <TemplateSkill item={item} key={index} />;
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AppWrap(MotionWrap(About), 'aboutme', 'bg-white', '');
