import React from 'react';
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";
import Reveal from "react-reveal/Reveal";
import HeadShake from "react-reveal/HeadShake";
import Jello from "react-reveal/Jello";
import Jump from "react-reveal/Jump";
import Pulse from "react-reveal/Pulse";
import RubberBand from "react-reveal/RubberBand";
import Shake from "react-reveal/Shake";
import Spin from "react-reveal/Spin";
import Swing from "react-reveal/Swing";
import Tada from "react-reveal/Tada";
import Wobble from "react-reveal/Wobble";


const RevealPage = () => {
    return (
        <div className="App">
      {/* ================================= react-reveal ================================= */}
      
      <Fade duration={1000} top cascade >
        {/* Content that will be animated */}
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Fade>
      
      <Fade top cascade>
        <ul className="some-class">
          <li>First Item</li>
          <li>Another Item</li>
          <li>Last Item</li>
        </ul>
      </Fade>

      <Fade top cascade>
        <h1>Text to reveal</h1>
      </Fade>

      <Zoom duration={3000}>
        <p>Markup that will be revealed first</p>
      </Zoom>
      <Zoom delay={4000}>
        <p>Markup that will be revealed a bit later</p>
      </Zoom>

      <Wobble>
        <h1>Your content goes here</h1>
      </Wobble>
      <Tada>
        <h1>Your content goes here</h1>
      </Tada>
      <Swing>
        <h1>Your content goes here</h1>
      </Swing>
      <Spin>
        <h1>Your content goes here</h1>
      </Spin>
      <Shake>
        <h1>Your content goes here</h1>
      </Shake>
      <RubberBand>
        <h1>Your content goes here</h1>
      </RubberBand>
      <Pulse>
        <h1>Your content goes here</h1>
      </Pulse>

      <HeadShake>
        <h1>Your content goes here</h1>
      </HeadShake>

      <Jello>
        <h1>Your content goes here</h1>
      </Jello>

      <Jump>
        <h1>Your content goes here</h1>
      </Jump>

      <Fade left>
        <h1>React Reveal</h1>
      </Fade>
      <Fade right>
        <h1>React Reveal</h1>
      </Fade>
      <Fade>
        <h1>React Reveal</h1>
      </Fade>
      <Flip left>
        <h1>React Reveal</h1>
      </Flip>
      <Flip top>
        <h1>React Reveal</h1>
      </Flip>
      <Flip bottom>
        <h1>React Reveal</h1>
      </Flip>
      <Rotate top left>
        <h1>React Reveal</h1>
      </Rotate>
      <Rotate>
        <h1>React Reveal</h1>
      </Rotate>
      <Zoom top>
        <h1>React Reveal</h1>
      </Zoom>

      <Zoom>
       <h1>img</h1>
      </Zoom>
      <Bounce left>
        <h1>React Reveal</h1>
      </Bounce>
      <Bounce top>
        <h1>React Reveal</h1>
      </Bounce>
      <Bounce>
        <h1>React Reveal</h1>
      </Bounce>
      <Slide top>
        <h1>React Reveal</h1>
      </Slide>
      <Slide left>
        <h1>React Reveal</h1>
      </Slide>
      <Roll left>
        <h1>React Reveal</h1>
      </Roll>
      <LightSpeed>
        <h1>React Reveal</h1>
      </LightSpeed>
      <LightSpeed left>
        <h1>React Reveal</h1>
      </LightSpeed>
      <Reveal effect="fadeInUp">
        <h1>React Reveal</h1>
      </Reveal>
      {/* ================================= react-reveal ================================= */}
    </div>
    );
}

export default RevealPage;
