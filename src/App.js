import React, { useState } from "react";
import Samples from "./components/Samples";
import Tutorials from "./components/Tutorials";

import { Col, Row } from "@zendeskgarden/react-grid";
import { Well } from "@zendeskgarden/react-notifications";
import { Tabs, TabList, Tab, TabPanel } from "@zendeskgarden/react-tabs";

import styles from "./Home.module.css";

function App() {
	const [selectedTab, setSelectedTab] = useState("all");

	return (
		<div className={styles.main}>
			<div className={styles.heroContainer}>
				<div className={styles.heroWrapper}>
					<Row>
						<Col>
							<div className={styles.heroText}>
								<h1 className={styles.header}>
									Sample apps <br />
									and Tutorials
								</h1>
								<p className={styles.subheader}>
									Learn from and build off of sample apps and tutorials provided directly from the
									Zendesk team! View our sample apps in Github where you can clone the repositories
									and expand on the examples, or use our tutorials as a starting point for building
									your own apps.
								</p>
							</div>
						</Col>
						<Col>
							<div className={styles.heroImg}>
								<div className={styles.image}>
									<img src="https://i.ibb.co/THMVSPp/hero.jpg" alt="" className={styles.img} />
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<div className={styles.sampleContainer}>
				<div className={styles.sampleWrapper}>
					<div className={styles.sampleHeaderContainer}>
						<h1 className={styles.sampleHeader}>Sample Apps</h1>
						<Tabs
							selectedItem={selectedTab}
							onChange={setSelectedTab}
							className={styles.tabContainer}
						>
							<TabList className={styles.tabParent}>
								<Tab item="all">All</Tab>
								<Tab item="data-fetching">Data-fetching</Tab>
								<Tab item="metadata">Metadata</Tab>
								<Tab item="events">Events</Tab>
							</TabList>
							<TabPanel item="all">
								<Samples tag={selectedTab} />
							</TabPanel>
							<TabPanel item="data-fetching">
								<Samples tag={selectedTab} />
							</TabPanel>
							<TabPanel item="metadata">
								<Samples tag={selectedTab} />
							</TabPanel>
							<TabPanel item="events">
								<Samples tag={selectedTab} />
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</div>
			<div className={styles.sampleContainer}>
				<div className={styles.sampleWrapper}>
					<div className={styles.sampleHeaderContainer}>
						<h1 className={styles.sampleHeader}>Tutorials</h1>
					</div>
					<Tutorials />
				</div>
			</div>
		</div>
	);
}

export default App;
