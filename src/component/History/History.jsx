import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../History/History.css";

const History = () => {
  const [key, setKey] = useState("INT Career");

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2 className="title py-4">
                <span className="font-s40">
                  <span className="mainColor">HISTORY</span>
                </span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="brdr"></div>
            </div>
          </div>
        </div>
        <div className="container mt-4 py-5">
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
                <Tab eventKey="INT Career" title="INT Career">
                  <div className="bg">
                    <div className="zin w-100 h-100 p-md-5 p-3">
                      <h4>
                        I have represented Italy at various youth levels in
                        international football.
                      </h4>
                      <p>
                        I have been a regular feature in Italy's youth squads,
                        particularly excelling in the Under-19 and Under-23
                        teams.
                      </p>
                      <h4>Italy U19:</h4>
                      <p>
                        I was part of the Italian U19 national team, where I
                        made a significant impact in several competitions. I
                        have been recognized for my goal-scoring abilities at
                        this level, contributing to Italy's performance in youth
                        tournaments.
                      </p>
                      <h4>Italy U23:</h4>
                      <p>
                        I have also progressed to the Italy U23 squad,
                        continuing my development and representing my country at
                        a higher level. My performances in the youth ranks have
                        made me a player to watch for potential inclusion in the
                        senior squad.
                      </p>
                      <p>
                        As of now, I have not made a full debut for the Italian
                        senior national team but remain a promising talent in
                        Italian football, with the potential to break into the
                        senior squad in the future.
                      </p>
                    </div>
                  </div>
                </Tab>

                <Tab eventKey="Personal Life" title="Personal Life">
                  <div className="bg">
                    <div className="zin p-md-5 p-3 w-100 h-100">
                      <h4>
                        Information about my personal life is relatively
                        limited, as I prefer to keep my private life away from
                        the public eye. However, here are some insights:
                      </h4>
                      <p>
                        Family Support: I've mentioned my family's influence on
                        my football career, particularly my mother, who
                        initially had reservations about me pursuing football
                        but eventually became my biggest supporter.
                      </p>
                      <h4>
                        Passion for Football: I have a deep passion for football
                        and have emphasized that it was the only sport I wanted
                        to pursue, despite my mother's attempts to introduce me
                        to other activities.
                      </h4>
                      <p>
                        Social Media Presence: I'm active on social media, where
                        I share glimpses of my life, training, and moments with
                        teammates. This platform often provides fans with a more
                        personal view of my experiences as a player.
                      </p>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Club Career" title="Club Career">
                  <div className="bg">
                    <div className="zin p-md-5 p-3 w-100 h-100 pading">
                      <h4>
                        I have had a notable club career across several Italian
                        football clubs, primarily as a forward. Here is an
                        overview:
                      </h4>
                      <h4>
                        Juventus (2018–2020): I started my professional career
                        with Juventus.
                      </h4>
                      <p>
                        I scored five goals in eight appearances, contributing
                        to the team's success.
                      </p>
                      <h4>Hellas Verona (2020–2021):</h4>
                      <p>
                        After Juventus, I moved to Hellas Verona, where I spent
                        a season to gain more playing time and experience.
                      </p>
                      <h4>Sassuolo (2022):</h4>
                      <p>
                        I had a brief spell with Sassuolo, gaining further
                        top-flight experience in Serie A.
                      </p>
                      <h4>Pomigliano (2023):</h4>
                      <p>
                        Before joining Sampdoria, I spent some time with
                        Pomigliano, continuing my progress as an effective
                        striker.
                      </p>
                      <h4>Sampdoria (2023):</h4>
                      <p>
                        My time at Sampdoria was highlighted by a crucial goal
                        against Juventus late in 2023.
                      </p>
                      <h4>Return to Juventus (2024):</h4>
                      <p>
                        In early 2024, I returned to Juventus, ready to
                        contribute to the team's success once again.
                      </p>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
