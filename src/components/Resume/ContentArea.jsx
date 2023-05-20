import React from "react";
import css from "./Resume.module.scss";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const ContentArea = ({ fieldData }) => {
  return (
    <div className={css.content}>
      {/* <FontAwesomeIcon icon={faUserGraduate} /> */}
      {fieldData.map((field, index) => (
        <div key={index} id={`field-${index}`}>
          {Object.entries(field).map(([fieldName, fieldValue], entryIndex) => (
            
            <div key={entryIndex}>
              <h2>{fieldName}</h2>
              <p>{fieldValue}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContentArea;
