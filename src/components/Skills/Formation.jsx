import React from 'react';
import { motion } from 'framer-motion';

function Formation({ item }) {
    return (
        <motion.div className="my-4 mx-0 flex flex-wrap">
            <div className="w-full md:w-1/2">
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 flex cursor-pointer flex-col items-start justify-start"
                    data-tip
                    data-for={item.name}
                >
                    <div className="mr-[1rem] lg:mr-[2rem]">
                        <p className="text-purple-800 max-xsm:mr-4">{item.year}</p>
                    </div>
                    <h4 className="font-bold">{item.name}</h4>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-[5px] font-light text-gray-500"
                    >
                        {item.place}
                    </a>
                </motion.div>
            </div>



        </motion.div>
    );
}

export default Formation;
