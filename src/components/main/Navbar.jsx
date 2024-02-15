import Image from "next/image";
import { useTranslations } from "next-intl";
import { Socials } from "../../../constants";
import LocalSwitcher from "../sub/local-switcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faHome, faLanguage, faMoon, faSun, faTools } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const t = useTranslations('Navbar')
    // const [darkMode, setDarkMode] = useState('false)
    const darkMode = false

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#fff]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full grid grid-cols-12 gap-4 items-center justify-between m-auto px-[10px]">
                <a
                    href="#about-me"
                    className="h-auto w-auto col-span-3 flex items-center"
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


                <div className="w-[500px] h-full col-span-6 flex items-center  justify-center md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto">
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
                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-span-3 gap-5 flex items-center justify-center">
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