'use client'

import Image from "next/image";
// import { useTranslations } from "next-intl";
import { Socials } from "../../../constants";
import LocalSwitcher from "../sub/local-switcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faHome, faLanguage, faMoon, faSun, faTools } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
    // const t = useTranslations('Navbar')
    // const [darkMode, setDarkMode] = useState('false)
    const darkMode = true

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg  bg-transparent z-50 px-10">
            <div className="w-full h-full grid grid-cols-3 gap-4 items-center justify-between m-auto px-[10px]">
                <a
                    href="#about-me"
                    className="h-auto w-auto col-span-1 flex items-center"
                >
                    <Image
                        src="/logo_e.png"
                        alt="logo"
                        width={50}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    />

                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Mj Aristizabal
                    </span>
                </a>
                <div className="col-span-1 gap-5 flex items-center justify-center">
                    <motion.div
                        className="flex items-center p-1 h-auto justify-center border border-solid border-gray-500 rounded-full"
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                    >
                        {/* Burbuja 1 - Inicio */}
                        <div className="bubble-container">
                            <div className="bubble hover:bubble-expand">
                                <FontAwesomeIcon icon={faHome} className="icon" />
                                <span className="label">Inicio</span>
                            </div>
                        </div>

                        {/* Burbuja 2 - Habilidades */}
                        <div className="bubble-container">
                            <div className="bubble hover:bubble-expand">
                                <FontAwesomeIcon icon={faTools} className="icon" />
                                <span className="label">Habilidades</span>
                            </div>
                        </div>

                        {/* Burbuja 3 - Proyectos */}
                        <div className="bubble-container">
                            <div className="bubble hover:bubble-expand">
                                <FontAwesomeIcon icon={faFolderOpen} className="icon" />
                                <span className="label">Proyectos</span>
                            </div>
                        </div>

                        {/* Burbuja 4 - Dark Mode/Light Mode */}
                        <div className="bubble-container">
                            <div className="bubble hover:bubble-expand">
                                <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="icon" />
                                <span className="label">{darkMode ? 'Modo Oscuro' : 'Modo Claro'}</span>
                            </div>
                        </div>

                        {/* Burbuja 5 - Idioma */}
                        <div className="bubble-container">
                            <div className="bubble hover:bubble-expand">
                                <FontAwesomeIcon icon={faLanguage} className="icon" />
                                {/* <LocalSwitcher /> */}
                                <span className="label">Idioma</span>
                                <LocalSwitcher />
                            </div>
                        </div>
                    </motion.div>
                </div>





                <div className="col-span-1 gap-5 flex items-center justify-center">
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;