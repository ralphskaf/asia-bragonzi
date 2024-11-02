import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../History/History.css";

const History = () => {
  const { t } = useTranslation();
  const [key, setKey] = useState("INT Career");

  const tabs = [
    {
      eventKey: "INT Career",
      title: t("int_career"),
      content: (
        <>
          <h4>{t("int_career_text")}</h4>
          {t("int_career_details", { returnObjects: true }).map(
            (detail, index) => (
              <div key={index}>
                <h4>{detail.title}</h4>
                <p>{detail.text}</p>
              </div>
            )
          )}
        </>
      ),
    },
    {
      eventKey: "Personal Life",
      title: t("personal_life"),
      content: (
        <>
          {t("personal_life_details", { returnObjects: true }).map(
            (detail, index) => (
              <div key={index}>
                <h4>{detail.title}</h4>
                <p>{detail.text}</p>
              </div>
            )
          )}
        </>
      ),
    },
    {
      eventKey: "Club Career",
      title: t("club_career"),
      content: (
        <>
          {t("club_career_details", { returnObjects: true }).map(
            (detail, index) => (
              <div key={index}>
                <h4>{detail.title}</h4>
                <p>{detail.text}</p>
              </div>
            )
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2 className="title py-4">
                <span className="font-s40">
                  <span className="mainColor">{t("history")}</span>
                </span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="brdr"></div>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 d-flex justify-content-center"
                mountOnEnter
                unmountOnExit
                transition={false}
              >
                {tabs.map((tab) => (
                  <Tab
                    eventKey={tab.eventKey}
                    title={tab.title}
                    key={tab.eventKey}
                  >
                    <div className="bg">
                      <div className="zin w-100 h-100 p-md-5 p-3">
                        {tab.content}
                      </div>
                    </div>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
