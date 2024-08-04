import Metadata from "@/components/utilities/metadata";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
  SiGnubash,
  SiApache,
  SiArduino,
  SiCpanel,
  SiFirebase,
  SiVmware,
  SiWebmin,
  SiAndroidstudio,
  SiKotlin,
  SiJava,
  SiUnity,
  SiCsharp,
  SiVisualstudiocode,
  SiVisualstudio,
  SiLaragon,
  SiWordpress,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";

const SkillsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const grayscales = document.querySelectorAll(".grayscale");
    const iconSkills = document.querySelectorAll(".icon-skill");

    const animateGrayscale = () => {
      if (activeIndex < grayscales.length) {
        grayscales[activeIndex].classList.remove("grayscale", "opacity-60");
        grayscales[activeIndex].classList.add(
          "grayscale-0",
          "opacity-100",
          "scale-110"
        );

        iconSkills[activeIndex].classList.remove("scale-0");
        iconSkills[activeIndex].classList.add("scale-110");

        setTimeout(() => {
          grayscales[activeIndex].classList.remove(
            "grayscale-0",
            "opacity-100",
            "scale-110"
          );

          iconSkills[activeIndex].classList.remove("scale-110");

          grayscales[activeIndex].classList.add("grayscale", "opacity-60");
          iconSkills[activeIndex].classList.add("scale-0");
          setActiveIndex(activeIndex + 1);
        }, 500);
      } else {
        setActiveIndex(0);
      }
    };

    //animateGrayscale(); //Uncomment ini jika mau pakai animasi
  }, [activeIndex]);

  return (
    <>
      <Metadata
        title="Portofolio - Skills"
        description="Berikut adalah list Teknologi, Programming Laguage dan Tools yang saya kuasai."
        image="/metadata/home.png"
        url="skills"
      />

      <section id="skills" className="pt-36 pb-36 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Skills
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Penguasaan Teknologi, Programming Language dan Tools
              </h2>
              <p className="text-medium font-medium text-secondary md:text-lg mt-10">
                 <br />
                <br />
                Berikut adalah list Teknologi, Programming Language dan Tools
                yang pernah saya kuasai.
              </p>
            </div>
          </div>

          <div className="w-full pr-5">
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4 items-center justify-center">
  
              {/* Android Studio */}
              <a
                href="https://developer.android.com/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiAndroidstudio className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Android Studio
                </span>
              </a>

              {/* Kotlin */}
              <a
                href="https://kotlinlang.org/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiKotlin className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Kotlin
                </span>
              </a>

              {/* Java */}
              <a
                href="https://www.java.com/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <FaJava className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Java
                </span>
              </a>

              {/* Vscode */}
              <a
                href="https://visualstudio.microsoft.com/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiVisualstudiocode className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Visual Studio Code
                </span>
              </a>

              {/* Unity */}
              <a
                href="https://unity.com/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiUnity className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Unity
                </span>
              </a>

              {/* Visual Studio */}
              <a
                href="https://visualstudio.microsoft.com/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiVisualstudio className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Visual Studio
                </span>
              </a>

              {/* C# */}
              <a
                href="https://unity.com/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiCsharp className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  C#
                </span>
              </a>

              {/* Laragon */}
              <a
                href="https://laragon.org/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiLaragon className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Laragon
                </span>
              </a>

              {/* HTML */}
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiHtml5 className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  HTML5
                </span>
              </a>

              {/* CSS */}
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiCss3 className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  CSS3
                </span>
              </a>

              {/* Bootstrap */}
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                className="group mx-4 max-w-[65px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiBootstrap className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Bootstrap
                </span>
              </a>

              {/* Tailwind CSS */}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="group mx-4 max-w-[80px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiTailwindcss className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[1rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  TailwindCSS
                </span>
              </a>

              {/* Javascript */}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiJavascript className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.9rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  JavaScript
                </span>
              </a>

              {/* NodeJS */}
              <a
                href="https://nodejs.org/en"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <FaNodeJs className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Node.js
                </span>
              </a>

              {/* Next JS */}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <TbBrandNextjs className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Next.js
                </span>
              </a>

              {/* PHP */}
              <a
                href="https://www.php.net/"
                target="_blank"
                className="group mx-4 max-w-[80px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiPhp className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  PHP
                </span>
              </a>

              {/* MySQL */}
              <a
                href="https://www.mysql.com/"
                target="_blank"
                className="group mx-4 max-w-[80px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiMysql className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[1.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  MySQL/MariaDB
                </span>
              </a>

              {/* Firebase */}
              <a
                href="https://firebase.google.com/"
                target="_blank"
                className="group mx-4 max-w-[80px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiFirebase className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.3rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Firebase
                </span>
              </a>

              {/* Git */}
              <a
                href="https://git-scm.com/"
                target="_blank"
                className="group mx-4 max-w-[70px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiGit className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Git
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                className="group mx-4 max-w-[70px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiGithub className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  GitHub
                </span>
              </a>

              {/* Linux */}
              <a
                href="https://www.linux.org/"
                target="_blank"
                className="group mx-4 max-w-[80px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiLinux className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.7rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  GNU/Linux
                </span>
              </a>

              {/* GNU Bash */}
              <a
                href="https://www.gnu.org/software/bash/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiGnubash className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[1rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  GNU BASH
                </span>
              </a>

              {/* Apache */}
              <a
                href="https://httpd.apache.org/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiApache className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Apache
                </span>
              </a>

              {/* VMware */}
              <a
                href="https://www.vmware.com"
                target="_blank"
                className="group mx-4 max-w-[140px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiVmware className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] -right-[0.3rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  VMware
                </span>
              </a>

              {/* Cpanel */}
              <a
                href="https://cpanel.net/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiCpanel className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] right-[0.3rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  cPanel
                </span>
              </a>

              {/* Webmin */}
              <a
                href="https://webmin.com/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiWebmin className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] right-[0.3rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Webmin
                </span>
              </a>

              {/* Wordpress */}
              <a
                href="https://id.wordpress.org/"
                target="_blank"
                className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
              >
                <SiWordpress className="w-16 h-16" />
                <span className="icon-skill absolute top-[5.5rem] right-[0.3rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Wordpress
                </span>
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
