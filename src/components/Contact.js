import React from "react";
import { init } from "@dreamcoder-uzbek/telegramjs";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const tg = new init(
    "5561354461:AAFGbW9w8BQpvU7DfPT_GxfRSBFkrytc7PM",
    "1291007595",
    "html",
  );

  const send = (e) => {
    e.preventDefault();
    let tgUsername = e.target[0].value;
    let textarea = e.target[1].value;

    tg.sendMessage(
      ` username: <i>@${tgUsername}</i>\n content: <b>${textarea}</b>`,
      null,
      true,
      true,
    );
    toast.success("Request submitted", {
      position: "bottom-center",
    });
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <Wrapper>
      <Toaster />
      <div className="section-center">
        <h3>take -20% sale </h3>

        <div className="content">
          <p>
            If you want to get 20% discount. contact us and leave your email. We
            will call you
          </p>
          <form
            // action="https://formspree.io/f/mqkjedag"
            // method="POST"
            className="contact-form"
            onSubmit={send}
          >
            <input
              type="username"
              name="_replyto"
              className="form-input"
              placeholder=" your telegram username"
              required
              min="4"
              autoComplete="off"
            />
            <textarea
              id="message"
              name="message"
              required
              placeholder=" your question"
            />

            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    display: flex;
    flex-direction: column;
  }
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
  }

  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    margin: 1rem auto;
    width: 70%;
    text-align: center;
  }

  .form-input {
    width: 100%;
    border: 2px solid #aaa;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
  }

  .form-input:focus {
    border-color: var(--clr-primary-5);

    box-shadow: var(--clr-primary-5);
  }

  //button

  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @keyframes button-loading {
    0% {
    }

    20% {
      color: transparent;
      transform: scale(1, 1);
    }

    40% {
      border-color: #5585ff;
      background-color: transparent;
      transform: scale(1, 1);
    }

    60% {
      transform: scale(0.7, 1.1);

      margin-left: 1.25rem;
      width: 2.5rem;
      text-indent: -0.6125rem;

      color: transparent;
      border-color: #5585ff;
      background-color: #5585ff;
    }

    80% {
      transform: scale(1, 1);
    }

    100% {
      margin-left: 1.25rem;
      width: 2.5rem;

      background-color: #5585ff;
      border-color: #5585ff;
      color: transparent;
    }
  }

  @keyframes button-dot-intro {
    0% {
      opacity: 0;
    }

    60% {
      opacity: 1;
      transform: scale(1, 1);
    }

    100% {
      transform: scale(0.75, 0.75);
    }
  }

  @keyframes button-dot-pulse {
    0% {
      opacity: 1;
      transform: scale(0.75, 0.75);
    }

    15% {
      transform: scale(0.85, 0.85);
    }

    45% {
      transform: scale(0.75, 0.75);
    }

    55% {
      transform: scale(0.95, 0.95);
    }

    85% {
      transform: scale(0.75, 0.75);
    }

    100% {
      opacity: 1;
      transform: scale(0.75, 0.75);
    }
  }

  @keyframes button-ready {
    0% {
      margin-left: 1.25rem;
      width: 2.5rem;
    }

    10% {
      background-color: #5585ff;
      border-color: #5585ff;
    }

    70% {
      margin: 0;
      width: 7.25rem;
      background-color: #fff;
      transform: scale(1.1, 1.1);
    }

    100% {
      margin: 0;
      width: 7rem;
      border-color: #8cce1e;
      background-color: #fff;
    }
  }

  @keyframes button-dot-outro {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: scale(1, 1);
    }
  }

  @keyframes button-ready-label {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .submit-btn {
    position: relative;
    overflow: hidden;
    width: 10rem;
    background: var(--clr-primary-5);
    border: 2px solid var(--clr-primary-7);
    color: white;
    cursor: pointer;
    line-height: 2;
    margin: 2 auto;
    padding: 0;
    border-radius: 1.5rem;
    font-size: 1.125rem;
    text-transform: lowercase;
    outline: none;
    transition: transform 0.125s;

    &:active {
      transform: scale(0.9, 0.9);
    }

    &:before,
    &:after {
      position: absolute;
      opacity: 0;

      border-radius: 50%;
      background-color: #fff;
      top: 50%;
      left: 50%;
      margin-top: -1.125rem;
      margin-left: -1.125rem;
      width: 2.25rem;
      height: 2.25rem;

      content: "";
      z-index: 1;
    }

    &.loading {
      animation: button-loading 0.5s forwards;
    }

    &.loading:before {
      opacity: 1;
      animation: button-dot-intro 0.5s forwards;
    }

    &.loading:after {
      opacity: 0;
      animation: button-dot-pulse 1.5s infinite 0.5s;
    }

    &.ready {
      text-indent: 0;
      color: transparent;
      background-color: #5585ff;
      animation: button-ready 0.333s forwards;
    }

    &.ready:before {
      position: absolute;
      left: 0;
      right: 0;
      top: auto;
      margin: 0;
      width: auto;
      height: auto;
      border-radius: 0;
      background-color: transparent;
      color: #8cce1e;
      content: "ready";
      opacity: 0;
      z-index: 2;
      animation: button-ready-label 0.5s forwards 0.275s;
    }

    &.ready:after {
      opacity: 1;
      animation: button-dot-outro 0.333s;
    }
  }

  #message {
    display: block;
    margin-top: 10px;

    width: 100%;
    height: 100px;
    resize: none;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
    border-image: none;
    border-radius: 6px 6px 6px 6px;
    border-style: none solid solid none;
    border-width: medium 1px 1px medium;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
    color: #555555;
    font-family: Arial, sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;
  }

  textarea:focus {
    background: none repeat scroll 0 0 #ffffff;
    outline-width: 0;
  }
  @media (min-width: 992px) {
    #message {
      width: 100%;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;
export default Contact;
