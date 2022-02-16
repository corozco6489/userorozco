import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import { contentPortfolio, contentPortafolio } from "../../data";
import { useState, useEffect } from "react";
export default function Main() {
  const idioma = useContext(langContext);

  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    setPortfolio(contentPortfolio);
  }, [true]);

  const formRef = useRef();

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g7n6n8m",
        "template_9n4oap7",
        formRef.current,
        "user_yqimngPQxBoZsByq1zEN0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <main>
      <div className="hero-section">
        <div className="wrapper">
          <div className="hero-content">
            <img
              src="assets/img/images/user1.png"
              className="hero-img"
              width="110px"
              height="110px"
              alt=""
            />
            <h1>
              <FormattedMessage
                id="home.name"
                defaultMessage="Hi , I'm Carlos Orozco"
              />
              <br />
            </h1>

            <h1>
              <FormattedMessage
                id="home.perfil"
                defaultMessage="Electronic Engineer"
              />
            </h1>
            <p>
              <FormattedMessage
                id="home.description"
                defaultMessage="I am a professional with experience in Telecommunications, Servers and Programming"
              />
            </p>

            <div className="connect-btn">
              <a
                href=""
                href="assets/docs/CarlosOrozco.pdf"
                target="_blank"
                download="CarlosOrozco.pdf"
              >
                <FormattedMessage
                  id="home.download"
                  defaultMessage="Download CV"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-stack">
        <div className="wrapper">
          <h3>
            <FormattedMessage
              id="home.skill"
              defaultMessage="I Carlos Orozco"
              defaultMessage="Skills and Knowledge
            "
            />
          </h3>
          <div className="skill-wrapper">
            <div className="skill">
              <img src="assets/img/works/pngegg.png" />
              <small>Arduino</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/labview.png" />
              <small>LabView</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/matlab.png" />
              <small>Matlab</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/proteus.png" />
              <small>Proteus</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/python.png" />
              <small>Python</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/linux.png" />
              <small>Linux</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/tia.png" />
              <small>Tia Portal</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/react.png" />
              <small>React</small>
            </div>
          </div>
          <div className="skill-wrapper">
            <div className="skill">
              <img src="assets/img/works/sql.png" />
              <small>SQL</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/rasberry.png" />
              <small>Raspberry</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/node.png" />
              <small>Node Red</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/virtual.png" />
              <small>Virtual Box</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/factory.png" />
              <small>Factory IO</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/aws.png" />
              <small>AWS</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/multisim.png" />
              <small>Multisim</small>
            </div>
            <div className="skill">
              <img src="assets/img/works/office.png" />
              <small>Microsoft Office</small>
            </div>
          </div>
        </div>
      </div>

      <div className="works" id="works">
        <div className="wrapper">
          <h3>
            <FormattedMessage
              id="home.works"
              defaultMessage=" Some of my Works"
            />{" "}
            <small>
              <span className="ti-arrow-right"></span>
            </small>
          </h3>
          <br />

          <div className="works-wrapper">
            {/* {portfolio.map((d) => (
              <div className="grid-2x work-grid">
                <div className="work-image">
                  <img
                    src={d.img}
                    alt=""
                  />
                </div>
                <div className="work-info">
                  <h2>{d.title}</h2>
                  <p>
                   {d.description}
                  </p>
                  <div className="work-tech">
                    <span
                      className="iconify"
                      data-icon={d.span}
                    ></span>
                  </div>
                  <div className="work-btn">
                    <a
                      href="https://la.mathworks.com/matlabcentral/fileexchange/96942-modulaciones-digitales-aplicado-a-imagenes-matlab"
                      target="_blank"
                      className="btn btn-outline-main"
                    >
                      Preview (In works)
                    </a>
                  </div>
                </div>
              </div>
            ))} */}
            <div className="grid-2x work-grid">
              <div className="work-image">
                <img
                  src="https://i.ytimg.com/vi/12cHkBRj3QY/maxresdefault.jpg"
                  alt=""
                />
              </div>
              <div className="work-info">
                <h2>
                  <FormattedMessage
                    id="project.title1"
                    defaultMessage="Digital Modulations Applied to Images"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="project.description1"
                    defaultMessage=" Simulation in MATLAB of the Digital Modulations M_ASK, M_FSK,
                  M_PSK, M_QAM, 64 bits of the TX of images of 5 formats: gif,
                  png, jpg, among others. Obtain from the project data of the
                  modulation and demodulation that are: Equation, index of AB
                  modulation, Waveform obtain the Spectral Density of the
                  Signal."
                  />
                </p>
                <div className="work-tech">
                  <span
                    className="iconify"
                    data-icon="file-icons:matlab"
                  ></span>
                </div>
                <div className="work-btn">
                  <a
                    href="https://la.mathworks.com/matlabcentral/fileexchange/96942-modulaciones-digitales-aplicado-a-imagenes-matlab"
                    target="_blank"
                    className="btn btn-outline-main"
                  >
                                        <FormattedMessage id="project.view" defaultMessage='View'/>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid-2x work-grid">
              <div className="work-image">
                <img
                  src="https://images.unsplash.com/photo-1521931961826-fe48677230a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div className="work-info">
                <h2>
                  <FormattedMessage
                    id="project.title2"
                    defaultMessage="Botduino (ChatBot)"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="project.description2"
                    defaultMessage="Security system through chatbot, the telegram api is used to control real-time notifications of the person at the door, access control through arduino and esp32cam."
                  />
                </p>
                <div className="work-tech">
                  <span
                    className="iconify"
                    data-icon="file-icons:matlab"
                  ></span>
                </div>
                <div className="work-btn">
                  <a
                    href="https://la.mathworks.com/matlabcentral/fileexchange/96942-modulaciones-digitales-aplicado-a-imagenes-matlab"
                    target="_blank"
                    className="btn btn-outline-main"
                  >
                                        <FormattedMessage id="project.view" defaultMessage='View'/>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid-2x work-grid">
              <div className="work-image">
                <img src="assets/img/images/tiaportal.png" alt="" />
              </div>
              <div className="work-info">
                <h2>
                  <FormattedMessage
                    id="project.title3"
                    defaultMessage="Bottling HMI"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="project.description3"
                    defaultMessage="HMI of the automation process of a liquid bottling plant using a S7-1500 plc and Labview to visualize the process in real time."
                  />
                </p>
                <div className="work-tech">
                  <span
                    className="iconify"
                    data-icon="file-icons:matlab"
                  ></span>
                </div>
                <div className="work-btn">
                  <a
                    href="https://la.mathworks.com/matlabcentral/fileexchange/96942-modulaciones-digitales-aplicado-a-imagenes-matlab"
                    target="_blank"
                    className="btn btn-outline-main"
                  >
                                        <FormattedMessage id="project.view" defaultMessage='View'/>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid-2x work-grid">
              <div className="work-image">
                <img src="assets/img/images/modbus.png" alt="" />
              </div>
              <div className="work-info">
                <h2>
                  <FormattedMessage
                    id="project.title4"
                    defaultMessage="Modbus Communication"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="project.description4"
                    defaultMessage="Automation of a bottling crate plant using tia portal, node red and rasberry pi."
                  />
                </p>
                <div className="work-tech">
                  <span
                    className="iconify"
                    data-icon="file-icons:matlab"
                  ></span>
                </div>
                <div className="work-btn">
                  <a
                    href="https://la.mathworks.com/matlabcentral/fileexchange/96942-modulaciones-digitales-aplicado-a-imagenes-matlab"
                    target="_blank"
                    className="btn btn-outline-main"
                  >
                                        <FormattedMessage id="project.view" defaultMessage='View'/>
 
                  </a>
                </div>
              </div>
            </div>

            <div className="grid-2x work-grid">
              <div className="work-image">
                <img
                  src="https://images.unsplash.com/photo-1519069060891-f8c50519bf39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>

              <div className="work-info">
                <h2>
                  <FormattedMessage
                    id="project.title5"
                    defaultMessage="Chatbot whatsapp"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="project.description5"
                    defaultMessage="Security system through chatbot, the whatsapp api is used to control real-time notifications of the person at the door, access control through arduino and esp32cam."
                  />
                </p>
                <div className="work-tech">
                  <span
                    className="iconify"
                    data-icon="file-icons:matlab"
                  ></span>
                </div>
                <div className="work-btn">
                  <a
                    href="https://la.mathworks.com/matlabcentral/fileexchange/96942-modulaciones-digitales-aplicado-a-imagenes-matlab"
                    target="_blank"
                    className="btn btn-outline-main"
                  >
                                        <FormattedMessage id="project.view" defaultMessage='View'/>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid-2x work-grid">
              <div className="work-image">
                <img
                  src="https://la.mathworks.com/matlabcentral/mlc-downloads/downloads/daea137a-5cd3-485e-9855-ceef8b7ce951/8c87c747-d9db-4653-b2e8-893d4e4cc9b2/images/1617204293.PNG"
                  alt=""
                />
              </div>

              <div className="work-info">
                <h2>
                  <FormattedMessage
                    id="project.title6"
                    defaultMessage="Optical Character Recognition (OCR)"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="project.description6"
                    defaultMessage="Recognition of Characters in an image using OCR (Optical Character Recognition)."
                  />
                </p>
                <div className="work-tech">
                  <span
                    className="iconify"
                    data-icon="file-icons:matlab"
                  ></span>
                </div>
                <div className="work-btn">
                  <a
                    href="https://la.mathworks.com/matlabcentral/fileexchange/96942-modulaciones-digitales-aplicado-a-imagenes-matlab"
                    target="_blank"
                    className="btn btn-outline-main"
                  >
                                        <FormattedMessage id="project.view" defaultMessage='View'/>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid-2x work-grid">
              <div className="work-image">
                <img src="assets/img/images/react1.png" alt="" />
              </div>

              <div className="work-info">
                <h2>
                  <FormattedMessage
                    id="project.title7"
                    defaultMessage="Portfolio React"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="project.description7"
                    defaultMessage="Landing page using reacts js and sass."
                  />
                </p>
                <div className="work-tech">
                  <span
                    className="iconify"
                    data-icon="file-icons:matlab"
                  ></span>
                </div>
                <div className="work-btn">
                  <a
                    href="https://la.mathworks.com/matlabcentral/fileexchange/96942-modulaciones-digitales-aplicado-a-imagenes-matlab"
                    target="_blank"
                    className="btn btn-outline-main"
                  >
                                        <FormattedMessage id="project.view" defaultMessage='View'/>
                  </a>
                </div>
              </div>
            </div>

            <a
              className="btn btn-main"
              href="https://inforozco.ml/"
              target="_blank"
            >
              <FormattedMessage id="project.btn" defaultMessage='More Projects'/>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-me" id="contact">
        <div className="wrapper">
          <div className="grid-2x contact-grid">
            <div className="contact-info">
              <h3>
                <FormattedMessage id="contact.title" defaultMessage='Contact'/>
              </h3>
              <div className="contact-info-grid">
                <div className="contact-icon">
                  <span className="ti-email"></span>
                </div>
                <div>
                  <small>
                  <FormattedMessage id="contact.subtitle" defaultMessage='Get in touch'/>

                    </small>
                  <h2>

                    
                    corozco6489@gmail.com</h2>
                </div>
              </div>
              <div className="contact-info-grid">
                <div className="contact-icon">
                  <span className="ti-location-pin"></span>
                </div>
                <div>
                  <small>                <FormattedMessage id="contact.subtitle1" defaultMessage='Ubication'/>

                    
                    </small>
                  <h2>Ambato - Ecuador</h2>
                </div>
              </div>
              <div className="contact-info-grid">
                <div className="contact-icon">
                  <span className="ti-info-alt"></span>
                </div>
                <div>
                  <small>
                  <FormattedMessage id="contact.subtitle2" defaultMessage='Reach me through'/>

                    
                    </small>
                  <div className="social-contact">
                    <a href="mailto: corozco6489@gmail.com" target="_blank">
                      <span className="ti-email"></span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/carlosorozco6489/"
                      target="_blank"
                    >
                      <span className="ti-linkedin"></span>
                    </a>
                    <a href="https://github.com/corozco6489" target="_blank">
                      <span className="lab la-github"></span>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ"
                      target="_blank"
                    >
                      <span className="lab la-youtube"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>
              <FormattedMessage id="contact.subtitle3" defaultMessage='Interested in working together?'/>

                
               </h3>
              <small>

              <FormattedMessage id="contact.subtitle4" defaultMessage='Ready to get started? Let create something extraordinary!'/>

               
              </small>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="your name"
                    name="user_name"
                    required
                  />
                  <input
                    type="number"
                    placeholder="your number"
                    name="user_number"
                    required
                  />
                </div>

                <div className="inputBox">
                  <input
                    type="email"
                    placeholder="your email"
                    name="user_email"
                    required
                  />
                  <input
                    type="text"
                    placeholder="your subject"
                    name="user_subject"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="your message"
                  id=""
                  cols="30"
                  rows="10"
                  required
                ></textarea>

                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-main"
                />
                <br />
                <p> {message && " Thank You...."}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
