import { Fade } from "react-reveal";

import "./Section.css";

interface IProps {
  title: string;
  children: any;
}

export default function Section(props: IProps) {
  return (
    <section className={props.title.toLowerCase()}>
      <Fade left duration={1000} distance="70px">
        <h2 className="section-title"> {props.title} </h2>
      </Fade>
      <Fade right duration={1000}>
        <div className="underline"></div>
      </Fade>
      {props.children}
    </section>
  );
}
