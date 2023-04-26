import React, { useState } from "react";
import Samples from "./components/Samples";

import { Col, Row } from "@zendeskgarden/react-grid";
import { Well } from "@zendeskgarden/react-notifications";
import TabComponent from "./TabComponent";

import styles from "./Home.module.css";

function App() {

	return (
		<div className={styles.main}>
			<div className={styles.heroContainer}>
				<div className={styles.heroWrapper}>
					<Row>
						<Col>
							<div className={styles.heroText}>
								<h1 className={styles.header}>
									Support Organization Resources
								</h1>
								<p className={styles.subheader}>
									This page provides with you with access to a number of resources related to the Support Organization(s) that you are part of.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<TabComponent/>
		</div>
	);
}

export default App;