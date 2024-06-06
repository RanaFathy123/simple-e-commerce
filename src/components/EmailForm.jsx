import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";

const EmailForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0r0ye6j", "template_szj1av7", form.current, {
        publicKey: "ZAXTmdm_iFIyPcwCy",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container mt-5">
      <form className="position-relative" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <textarea
            className="form-control mb-3"
            placeholder="Your message"
            name="message"
          ></textarea>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your email"
            name="user_email"
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn   z-3"
              style={{ marginLeft: "-2.5em" }}
            >
              <MdEmail style={{ fontSize: "1.5em" }} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
