import styles from "./Samples.module.css";

import data from "../data/tutorials.json";

import { Col, Row } from "@zendeskgarden/react-grid";
import { Well } from "@zendeskgarden/react-notifications";

const Tutorials = () => {
	// loops over data.json and returns app cards based on the tag.
	const tutorials = data.tutorials.map((tutorial, i) => {
		return (
			<>
				<Col size={4}>
					<a className={styles.cardLink} rel="noreferrer" target="_blank" href={tutorial.href}>
						<Well style={{ minHeight: "150px" }}>
							<h4 className={styles.cardHeader}>{tutorial.name}</h4>
							<p className={styles.cardDesc}>{tutorial.description}</p>
						</Well>
					</a>
				</Col>

				{i % 3 === 2 && <div style={{ width: "100%", marginTop: "24px" }} />}
			</>
		);
	});

	return <Row>{tutorials}</Row>;
};

export default Tutorials;
