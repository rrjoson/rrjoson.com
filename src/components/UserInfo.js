import React, { Component } from "react";
import rr from '../../content/images/rr.jpg'


export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={rr} alt="RR Joson" />
            </div>
            <div>
              <p>
                {`I'm RR, a classically trained pianist turned
                software engineer who loves working with UX designers
                to build interfaces that are a delight to use.
                `}
              </p>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
