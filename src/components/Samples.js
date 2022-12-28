import styles from "./Samples.module.css";

import data from "../data/data.json";

import { Col, Row } from "@zendeskgarden/react-grid";
import { Well } from "@zendeskgarden/react-notifications";

const Samples = ({ tag }) => {
	console.log(tag);

    // loops over data.json and returns app cards based on the tag
	const apps = data.apps.map((app, i) => {
		if (app.tags.includes(tag)) {
			return (
				<>
					<Col>
						<a className={styles.cardLink} rel="noreferrer" target="_blank" href={app.href}>
							<Well style={{ minHeight: "150px" }}>
								<h4 className={styles.cardHeader}>{app.name}</h4>
								<p className={styles.cardDesc}>{app.description}</p>
							</Well>
						</a>
					</Col>

					{i % 3 === 2 && <div style={{ width: "100%", marginTop: "24px" }} />}
					{i === data.apps.length - 2 && (
						<>
							<Col></Col>
							<Col></Col>
						</>
					)}  
				</>
			);
		}
	});

	return (
		<div className={styles.sampleWrapper}>
			<Row>{apps}</Row>
		</div>
	);
};

export default Samples;
