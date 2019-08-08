import React, { Component } from "react";
import { Link } from "gatsby";
import NewsletterForm from "./NewsletterForm";

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Stay in Touch</h1>
        <p>You can find me around the web.</p>
        <ul>
          <li>
            <strong>GitHub</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rrjoson">
              rrjoson
            </a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rrjoson">
              rrjoson
            </a>
          </li>
        </ul>
      </>
    );
  }
}
