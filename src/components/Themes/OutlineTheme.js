import React from 'react';
const OutlineTheme = ({ config }) => {
    const { title, bgColor, pattern, author, icon, font, customIcon } = config;

    return (
        <div className="p-4 bg-white border">


            <div className={`cover rounded flex flex-col text-gray-800 items-center border-4 border-gray-800 ${pattern} `}
                style={{ backgroundColor: bgColor }}
            >


                <div className={`${font} bg-white rounded md:w-10/12 border-4 border-gray-800 m-auto flex flex-col py-12 px-6 `}>
                    <div className="px-12">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-center">{title}</h1>
                        </div>
                    </div>


                </div>

                <div className={`${font} w-full border-gray-800 border-t-4 flex  mt-10 p-2 px-6  items-center bg-white`}>
                    {
                        customIcon ?
                            <div className="w-12 h-12  ">
                                <img src={customIcon} alt="img" className="rounded-full bg-white p-1 border-white" />
                            </div>
                            :
                            <div className=" rounded-full p-6 w-32 h-32 bg-white mx-auto items-center justify-center flex">
                                <i className={`devicon-${icon.value}-plain  p-4 dev-icon text-7xl`}></i>
                            </div>
                    }
                    <h2 className="text-xl ml-auto mr-2 font-semibold">{author}</h2>

                </div>

            </div>


        </div>
    );
}

export default OutlineTheme;