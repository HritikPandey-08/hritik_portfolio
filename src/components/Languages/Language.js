import React from "react";
import css from "./Language.module.scss";
import { imagePath } from "../../utils/paths";
const ProgrammingLanguageIcon = ({ language }) => {
  // Assuming all icon images are located in the "/icons" folder
  const iconPath = imagePath + `${language.toLowerCase()}.png`;

  return <img src={iconPath} alt={language} />;
};

export default function Languages() {
  return (
    <div id="languages" className={`paddings  ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className="heading text-center">
          {" "}
          <span className="primaryText ">
            Programming languages and tools I have worked on
          </span>
        </div>

        <div className={`text-center ${css.languages}`}>
          <ProgrammingLanguageIcon language="html5" />
          <ProgrammingLanguageIcon language="css" />
          <ProgrammingLanguageIcon language="javascript" />
          <ProgrammingLanguageIcon language="bootstrap" />
          <ProgrammingLanguageIcon language="scss" />
          <ProgrammingLanguageIcon language="mysqldb" />
          <ProgrammingLanguageIcon language="python" />
          <ProgrammingLanguageIcon language="java" />
          <ProgrammingLanguageIcon language="django" />
          <ProgrammingLanguageIcon language="mongodb" />
          <ProgrammingLanguageIcon language="php" />
          <ProgrammingLanguageIcon language="googlecloud" />
          <ProgrammingLanguageIcon language="react" />
          <ProgrammingLanguageIcon language="git" />
          <ProgrammingLanguageIcon language="github" />
          <ProgrammingLanguageIcon language="vsstudio" />
        </div>
        <div className="heading text-center">
          {" "}
          <span className="primaryText ">Familier with</span>
        </div>
        <div className={`text-center ${css.languages}`}>
          
          <ProgrammingLanguageIcon language="postgresql" />
          <ProgrammingLanguageIcon language="nodejs" />
          <ProgrammingLanguageIcon language="vitejs" />
          <ProgrammingLanguageIcon language="digitalocean" />
        </div>
      </div>
    </div>
  );
}
