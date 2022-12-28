import styles from "./Samples.module.css";

import data from "../data/tutorials.json";

import { Grid, Col, Row } from "@zendeskgarden/react-grid";
import { Well } from "@zendeskgarden/react-notifications";

const Tutorials = () => {
	// loops over data.json and returns app cards based on the tag.
	const tutorials = data.tutorials.map((tutorial, i) => {
		return (
			<>
				<Col lg={4} sm={6} xs={12} style={{ marginBottom: "20px" }}>
					<a className={styles.cardLink} rel="noreferrer" target="_blank" href={tutorial.href}>
						<Well style={{ minHeight: "150px" }}>
							<h4 className={styles.cardHeader}>{tutorial.name}</h4>
							<p className={styles.cardDesc}>{tutorial.description}</p>
						</Well>
					</a>
				</Col>
			</>
		);
	});

	return (
		<Grid gutters="md">
			<Row>{tutorials}</Row>
		</Grid>
	);
};

export default Tutorials;
