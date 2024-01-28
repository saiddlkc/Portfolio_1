import React from "react";
import "./contact.css";
import { IoMdMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoMdMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>saidalkilic@mail.com</h5>
            <a href="mailto:saidalkilic@mail.com"> Send a message</a>
          </article>
          <div className="contact__options">
            <article className="contact__option">
              <FaDiscord className="contact__option-icon" />
              <h4>Discord</h4>
              <h5>said_dlkc</h5>
              <a href="https://discord.com/" target="_blank">
                add me on Discord
              </a>
            </article>
          </div>
          <div className="contact__options">
            <article className="contact__option">
              <FaDiscord className="contact__option-icon" />
              <h4>Discord</h4>
              <h5>said_dlkc</h5>
              <a href="https://discord.com/" target="_blank">
                add me on Discord
              </a>
            </article>
          </div>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input
            type="text"
            name="email
          "
            placeholder="Your Email"
            required
          />
          <textarea
            name="messae"
            rows="10"
            placeholder="Your Message  "
            required
          ></textarea>
          <button type="submit" className="cnt btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
