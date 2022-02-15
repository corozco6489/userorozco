import React from 'react'

export default function Main() {
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
          <h1>Hi , I'm Carlos Orozco <br /></h1>

          <h1>Electronic Engineer</h1>
          <p>
            I am a professional with experience in telecommunications, servers
            and programming.
          </p>

          <div className="connect-btn">
            <a href="">Download CV</a>
          </div>
        </div>
      </div>
    </div>

    <div className="tech-stack">
      <div className="wrapper">
        <h3>Skills and Knowledge</h3>
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
          Some of my Works <small><span className="ti-arrow-right"></span></small>
        </h3>
        <br />

        <div className="works-wrapper">
          <div className="grid-2x work-grid">
            <div className="work-image">
              <img
                src="https://i.ytimg.com/vi/12cHkBRj3QY/maxresdefault.jpg"
                alt=""
              />
            </div>
            <div className="work-info">
              <h2>Digital Modulations Applied to Images</h2>
              <p>
                Simulation in MATLAB of the Digital Modulations M_ASK, M_FSK,
                M_PSK, M_QAM, 64 bits of the TX of images of 5 formats: gif,
                png, jpg, among others. Obtain from the project data of the
                modulation and demodulation that are: Equation, index of AB
                modulation, Waveform obtain the Spectral Density of the
                Signal.
              </p>
              <div className="work-tech">
                <span className="iconify" data-icon="file-icons:matlab"></span>
              </div>
              <div className="work-btn">
                <a
                  href="https://resumenuxt.herokuapp.com"
                  target="_blank"
                  className="btn btn-outline-main"
                  >Preview (In works)</a
                >
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
              <h2>Botduino (ChatBot)</h2>
              <p>
                Security system through chatbot, the telegram api is used to
                control real-time notifications of the person at the door,
                access control through arduino and esp32cam.
              </p>
              <div className="work-tech">
                <span className="lab la-python"></span>
                <span className="lab la-telegram"></span>
                <span className="iconify" data-icon="cib:arduino"></span>
              </div>
              <div className="work-btn">
                <a
                  href="https://wa.link/sd64a9"
                  target="_blank"
                  className="btn btn-outline-main"
                  >Preview</a
                >
              </div>
            </div>
          </div>

          <div className="grid-2x work-grid">
            <div className="work-image">
              <img src="assets/img/images/tiaportal.png" alt="" />
            </div>
            <div className="work-info">
              <h2>Bottling HMI</h2>
              <p>
                HMI of the automation process of a liquid bottling plant using
                a S7-1500 plc and Labview to visualize the process in real
                time.
              </p>
              <div className="work-tech">
                <span className="iconify" data-icon="cib:siemens"></span>
                <span className="iconify" data-icon="simple-icons:labview"></span>
              </div>
              <div className="work-btn">
                <a
                  href="https://fooodie.surge.sh/"
                  target="_blank"
                  className="btn btn-outline-main"
                  >Preview</a
                >
              </div>
            </div>
          </div>

          <div className="grid-2x work-grid">
            <div className="work-image">
              <img src="assets/img/images/modbus.png" alt="" />
            </div>
            <div className="work-info">
              <h2>Modbus Communication</h2>
              <p>
                Automation of a bottling crate plant using tia portal, node
                red and rasberry pi.
              </p>
              <div className="work-tech">
                <span className="iconify" data-icon="cib:siemens"></span>
                <span className="iconify" data-icon="simple-icons:labview"></span>
                <span className="iconify" data-icon="cib:raspberry-pi"></span>
              </div>
              <div className="work-btn">
                <a
                  href="http://listbuy.shop"
                  target="_blank"
                  className="btn btn-outline-main"
                  >Preview</a
                >
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
              <h2>Chatbot whatsapp</h2>
              <p>
                Sistema de seguridad a través de chatbot, se utiliza la api de
                whatsapp para controlar notificaciones en tiempo real de la
                persona en la puerta, control de acceso a través de arduino y
                esp32cam.
              </p>
              <div className="work-tech">
                <span className="lab la-node"></span>
                <span className="lab la-js-square"></span>
                <span className="iconify" data-icon="cib:arduino"></span>
              </div>
              <div className="work-btn">
                <a
                  href="http://hmschool.net"
                  target="_blank"
                  className="btn btn-outline-main"
                  >Preview</a
                >
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
              <h2>Optical Character Recognition (OCR)</h2>
              <p>
                Recognition of Characters in an image using OCR (Optical
                Character Recognition).
              </p>
              <div className="work-tech">
                <span className="iconify" data-icon="file-icons:matlab"></span>
              </div>
              <div className="work-btn">
                <a
                  href="https://sleekadmin.surge.sh"
                  className="btn btn-outline-main"
                  >Preview</a
                >
              </div>
            </div>
          </div>

          <div className="grid-2x work-grid">
            <div className="work-image">
              <img src="assets/img/images/react1.png" alt="" />
            </div>

            <div className="work-info">
              <h2>Portfolio React</h2>
              <p>Landing page using reacts js and sass.</p>
              <div className="work-tech">
                <span className="lab la-react"></span>
              </div>
              <div className="work-btn">
                <a
                  href="https://sleekadmin.surge.sh"
                  className="btn btn-outline-main"
                  >Preview</a
                >
              </div>
            </div>
          </div>

          <a className="btn btn-main">More Projects</a>
        </div>
      </div>
    </div>

    <div className="contact-me" id="contact">
      <div className="wrapper">
        <div className="grid-2x contact-grid">
          <div className="contact-info">
            <h3>Contact</h3>
            <div className="contact-info-grid">
              <div className="contact-icon">
                <span className="ti-email"></span>
              </div>
              <div>
                <small>Get in touch</small>
                <h2>corozco6489@gmail.com</h2>
              </div>
            </div>
            <div className="contact-info-grid">
              <div className="contact-icon">
                <span className="ti-location-pin"></span>
              </div>
              <div>
                <small>Ubication</small>
                <h2>Ambato - Ecuador</h2>
              </div>
            </div>
            <div className="contact-info-grid">
              <div className="contact-icon">
                <span className="ti-info-alt"></span>
              </div>
              <div>
                <small>Reach me through</small>
                <div className="social-contact">
                  <a href="mailto: techadam90@gmail.com" target="_blank"
                    ><span className="ti-email"></span
                  ></a>
                  <a
                    href="https://www.linkedin.com/in/techadam90/"
                    target="_blank"
                    ><span className="ti-linkedin"></span
                  ></a>
                  <a href="https://github.com/techadam" target="_blank"
                    ><span className="lab la-github"></span
                  ></a>
                  <a href="https://youtube.com/coderesource" target="_blank"
                    ><span className="lab la-youtube"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Interested in working together?</h3>
            <small
              >Ready to get started? Let's create something
              extraordinary!</small
            >

            <form action="">
              <div className="contact-form-wrapper">
                <div className="form-wrapper">
                  <label for="">Email</label>
                  <input
                    type="email"
                    placeholder="Your-email@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-wrapper">
                  <label for="">Message</label>
                  <textarea
                    name=""
                    id=""
                    rows="4"
                    placeholder="Enter Your Message"
                    className="form-input"
                  ></textarea>
                </div>

                <div className="form-wrapper">
                  <button className="btn btn-main">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}
