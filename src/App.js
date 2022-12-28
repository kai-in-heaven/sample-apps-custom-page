import React, { useState } from "react";
import Samples from "./components/Samples";

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
								<Samples tag={selectedTab}/>
							</TabPanel>
							<TabPanel item="data-fetching">
								<Samples tag={selectedTab}/>
							</TabPanel>
							<TabPanel item="metadata">
								<Samples tag={selectedTab}/>
							</TabPanel>
							<TabPanel item="events">
								<Samples tag={selectedTab}/>
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
				</div>
				<div className={styles.sampleWrapper}>
					<Row>
						<Col>
							<a
								className={styles.cardLink}
								rel="noreferrer"
								target="_blank"
								href="https://developer.zendesk.com/documentation/apps/getting-started/zendesk-app-quick-start/"
							>
								<Well style={{ minHeight: "150px" }}>
									<h4 className={styles.cardHeader}>Zendesk app quick start</h4>
									<p className={styles.cardDesc}>
										In this 15-minute quick start, you'll use the Zendesk Apps framework to access
										ticket data.
									</p>
								</Well>
							</a>
						</Col>
						<Col>
							<a
								className={styles.cardLink}
								rel="noreferrer"
								target="_blank"
								href="https://developer.zendesk.com/documentation/apps/build-an-app/build-your-first-support-app/part-1-laying-the-groundwork/"
							>
								<Well style={{ minHeight: "150px" }}>
									<h4 className={styles.cardHeader}>Building your first Support app</h4>
									<p className={styles.cardDesc}>
										The app will display the requester's name, any tags applied to the requester,
										when they were added and more
									</p>
								</Well>
							</a>
						</Col>
						<Col>
							<a
								className={styles.cardLink}
								rel="noreferrer"
								target="_blank"
								href="https://developer.zendesk.com/documentation/apps/build-an-app/build-your-first-sell-app/building-your-first-sell-app-part-1-laying-the-groundwork/"
							>
								<Well style={{ minHeight: "150px" }}>
									<h4 className={styles.cardHeader}>Building your first Sell app</h4>
									<p className={styles.cardDesc}>
										The “Related Leads” app displays new leads for an organization associated with a
										deal.
									</p>
								</Well>
							</a>
						</Col>
						<div style={{ width: "100%", marginTop: "24px" }} />

						<Col>
							<a
								className={styles.cardLink}
								rel="noreferrer"
								target="_blank"
								href="https://developer.zendesk.com/documentation/apps/build-an-app/build-your-first-chat-app/part-1-laying-the-groundwork/"
							>
								<Well style={{ minHeight: "150px" }}>
									<h4 className={styles.cardHeader}>Building your first Chat app</h4>
									<p className={styles.cardDesc}>
										The app “Learn More” is designed to let a chat agent send a visitor links to
										more information about any subject.
									</p>
								</Well>
							</a>
						</Col>
						<Col>
							<a
								className={styles.cardLink}
								rel="noreferrer"
								target="_blank"
								href="https://developer.zendesk.com/documentation/apps/build-an-app/building-a-server-side-app/part-1-core-concepts/"
							>
								<Well style={{ minHeight: "150px" }}>
									<h4 className={styles.cardHeader}>Building a server-side app</h4>
									<p className={styles.cardDesc}>
										Because a Zendesk app runs in an iframe, you can use a server-side web
										application to generate the content for the iframe.
									</p>
								</Well>
							</a>
						</Col>
						<Col>
							<a
								className={styles.cardLink}
								rel="noreferrer"
								target="_blank"
								href="https://developer.zendesk.com/documentation/apps/build-an-app/using-react-in-a-support-app/"
							>
								<Well style={{ minHeight: "150px" }}>
									<h4 className={styles.cardHeader}>Using React in a Support app</h4>
									<p className={styles.cardDesc}>
										In this tutorial, you'll use React to create a Zendesk Support app.
									</p>
								</Well>
							</a>
						</Col>
						<div style={{ width: "100%", marginTop: "24px" }} />
						<Col>
							<a
								className={styles.cardLink}
								rel="noreferrer"
								target="_blank"
								href="https://developer.zendesk.com/documentation/apps/build-an-app/adding-third-party-oauth-to-a-support-app/"
							>
								<Well style={{ minHeight: "150px" }}>
									<h4 className={styles.cardHeader}>Adding third-party OAuth to a Support app</h4>
									<p className={styles.cardDesc}>
										In this tutorial, you'll create a private Zendesk Support app that uses an oauth
										setting to manage third-party OAuth access tokens.
									</p>
								</Well>
							</a>
						</Col>
						<Col>
							<a
								className={styles.cardLink}
								rel="noreferrer"
								target="_blank"
								href="https://developer.zendesk.com/documentation/apps/build-an-app/dynamically-changing-app-icons/"
							>
								<Well style={{ minHeight: "150px" }}>
									<h4 className={styles.cardHeader}>Dynamically changing app icons</h4>
									<p className={styles.cardDesc}>
										In this tutorial, you'll create a top bar app that changes its icon based on
										data from a third-party API.
									</p>
								</Well>
							</a>
						</Col>
						<Col></Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default App;
