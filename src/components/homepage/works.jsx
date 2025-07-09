import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://cdn-icons-png.flaticon.com/512/4804/4804197.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
								LexTech Ecosystem Limited
							</div>
							<div className="work-subtitle">
								Frontend Engineer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://cdn-icons-png.flaticon.com/512/4804/4804197.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Alabian Solution</div>
							<div className="work-subtitle">
								Frontend Developer Jnr
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
						<div className="work">
							<img
								src="https://cdn-icons-png.flaticon.com/512/4804/4804197.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Alabian Solution</div>
							<div className="work-subtitle">
								Frontend Developer Jnr
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
