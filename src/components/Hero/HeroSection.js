import React from "react";
import css from "./hero.module.scss";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
	return (
		<div id="home" className={`paddings bg_primary ${css.wrapper}`}>
			<div className={`innerWidth ${css.container}`}>
				{/* UpperSection */}
				<div className={`${css.upperSection} text-center`}>
					
					<span className="primaryText text-nowrap">
						Hey There,
						<br />
						<TypeAnimation
							sequence={[
								"My Name is Hritik",
								1000,
								"I'm a Designer",
								1000,
								"I'm a Developer",
								1000,
							  ]}
							  speed={50}
							  repeat={Infinity}
						/>
					</span>
					<span className="introtext secondaryText text-nowrap">
						{" "}
						I design beautiful simple things,
						<br />
						And I love what I do{" "}
					</span>
					{/* Email */}

					<a className={css.email} href="mailto:pandeyhritik08@gmail.com">
						pandeyhritik08@gmail.com
					</a>
				</div>

				{/* Person image */}

				<div className={css.person_img}>
					<img src={process.env.PUBLIC_URL + '/images/new_avtar.png'} alt="" />
				</div>
			</div>
		</div>
	);
}
