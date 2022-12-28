import styles from "./Samples.module.css";

import data from "../data/data.json";

import { Grid, Col, Row } from "@zendeskgarden/react-grid";
import { Well } from "@zendeskgarden/react-notifications";

const Samples = ({ tag }) => {
	// loops over data.json and returns app cards based on the tag.
	const apps = data.apps.map((app, i) => {
		if (app.tags && app.tags.includes(tag)) {
			return (
				<>
					<Col lg={4} sm={6} xs={12} style={{ marginBottom: "20px" }} >
						<a className={styles.cardLink} rel="noreferrer" target="_blank" href={app.href}>
							<Well style={{ minHeight: "150px" }}>
								<h4 className={styles.cardHeader}>{app.name}</h4>
								<p className={styles.cardDesc}>{app.description}</p>
							</Well>
						</a>
					</Col>

					{/* {i % 3 === 2 && <div style={{ width: "100%", marginTop: "24px" }} />} */}
				</>
			);
		}
	});

	return (
		<Grid gutters="md">
			<Row alignItemsXs={'center'}>{apps}</Row>
		</Grid>
	);
};

export default Samples;
