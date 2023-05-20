import React from 'react';
// import { Link } from 'react-scroll';
import css from './Resume.module.scss';

const Sidebar = ({ fields, activeField, onFieldClick }) => {
  return (
    <div className={`secondaryText text-center ${css.sidebar}`}>
      <ul>
        {fields.map((field, index) => (
          <li key={index} onClick={() => onFieldClick(index)}>
            {/* <Link
              activeClass={css.active}
              to={`field-${index}`}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            > */}
              {field}
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
