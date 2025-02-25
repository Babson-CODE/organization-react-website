import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

export default class CODEStartups extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            paddingTop: "40px",
            paddingBottom: "10px",
          }}
        >
          CODE Startups
        </h1>
        <h4 style={{ textAlign: "center" }}>
          Since CODE was founded in 2015, CODE members have founded many
          ventures of their own. Valuations have exceeded $50 Million.
          Additionally, CODE members have assisted hundreds of other startups
          through
          <a href="https://www.eventbrite.com/e/tech-office-hours-with-code-spring-2021-tickets-140291097449">
            {" "}
            Blank Center Office Hours,
          </a>{" "}
          helping friends, late night ideation in our common room. Learn more
          about some specific CODE Startups below.
        </h4>
        <hr
          style={{
            borderTop: "2.5px solid",
            margin: "20px 200px 0px 200px",
          }}
        />
        <div className="row" style={{ margin: "0px 40px 40px 40px" }}>
          <div className="col-lg-6" style={{ marginTop: "40px" }}>
            <SingleStartup
              company_name="Vini VR"
              website="https://www.vinci-vr.com"
              logo="Vinci Logo.png"
              about="VINCI creates proprietary software and utilizes consumer hardware to lower the cost of creating and using VR."
            />
          </div>
          <div className="col-lg-6" style={{ marginTop: "40px" }}>
            <SingleStartup
              company_name="XHighlight"
              website="https://www.xhighlight.com"
              logo="XHighlight Logo.png"
              about="XHighlight is the Fastest and Easiest way to create your sports highlight videos."
            />
          </div>
        </div>
        <div className="row" style={{ margin: "40px" }}>
          <div className="col-lg-6" style={{ marginTop: "40px" }}>
            <SingleStartup
              company_name="Jinn, LLC"
              website="https://www.crunchbase.com/organization/jinn-llc"
              logo="Jinn Logo.webp"
              about="Jinn was a full-service technology development company known for producing high-quality results at a lightning pace."
            />
          </div>
          <div className="col-lg-6" style={{ marginTop: "40px" }}>
            <SingleStartup
              company_name="BaboBikes"
              website="https://www.babobikes.com/"
              logo="BaboBikes.webp"
              about="BaboBikes is transforming on-campus, student transportation."
            />
          </div>
        </div>

        <div className="row" style={{ margin: "40px" }}>
          <div className="col-lg-6" style={{ marginTop: "40px" }}>
            <SingleStartup
              company_name="Esto"
              website="https://apps.apple.com/us/app/esto/id1425521172"
              logo="Esto.png"
              about="Esto uses Machine learning to translate objects from English to Spanish, helping the quickly growing Spanish speaking community"
            />
          </div>
          <div className="col-lg-6" style={{ marginTop: "40px" }}>
            <SingleStartup
              company_name="Bytes Coding"
              website="https://bytescoding.com/"
              logo="Bytes Coding.png"
              about="Bytes Coding is empowering underprivileged youths by increasing their technological acumen and providing them with exposure to STEM education. As such, we truly believe in our motto: Empower through technology."
            />
          </div>
        </div>
      </div>
    );
  }
}

export class SingleStartup extends Component {
  render() {
    return (
      <div style={{ marginTop: "15px" }}>
        {console.log(this.props.logo)}
        <Paper elevation={3} square={true} style={{ padding: "30px" }}>
          <a
            href={this.props.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <h1 style={{ textAlign: "center" }}>{this.props.company_name}</h1>
            <p style={{ textAlign: "center" }}>
              <img
                src={require("../../Assets/img/CODE Startups/" +
                  this.props.logo)}
                alt={""}
                width={"100%"}
              ></img>
            </p>
          </a>
          <br></br>
          <h5>{this.props.about}</h5>
        </Paper>
      </div>
    );
  }
}
