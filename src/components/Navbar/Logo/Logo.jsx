import React from 'react';

function Logo({ textColor }) {
    const logoLeft = '<';
    const logoRigth = '/>';

    return (
        <a className="flex items-center font-[Prompt] text-2xl font-bold leading-none" href="#home">
            <span className="text-purple-400">{logoLeft} </span>
            <span className={`font-medium ${textColor}`}>cberto</span>
            <span className="text-purple-400"> {logoRigth}</span>
        </a>
    );
}

export default Logo;
