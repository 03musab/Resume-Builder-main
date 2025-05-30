import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import Resume1 from "../Resume/Resume1"
import Resume2 from "../Resume/Resume2"
import Footer from "../Footer/Footer"
import styles from "./Body.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function Body() {
  const colors = ["#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.heading}>AI-Resume Builder</p>
        <div className={styles.main}>
          <Editor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
        </div>
        <div className={styles.toolbar}>
          <div className={styles.colors}>
            {colors.map((item) => (
              <span
                key={item}
                style={{ backgroundColor: item }}
                className={`${styles.color} ${activeColor === item ? styles.active : ""
                  }`}
                onClick={() => setActiveColor(item)}
              />
            ))}
          </div>
          <ReactToPrint
            trigger={() => {
              return (
                <button>
                  Download <ArrowDown />
                </button>
              );
            }}
            content={() => resumeRef.current}
          />
        </div>
        <Tabs>
            <TabList>
              <Tab>Template 1</Tab>
              <Tab>Template 2</Tab>
            </TabList>

            <TabPanel>
            <Resume
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
          />
            </TabPanel>
            <TabPanel>
            <Resume1
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
          />
            </TabPanel>
            <TabPanel>
            <Resume2
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
          />
            </TabPanel>
          </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default Body;