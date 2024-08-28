import React, { useState } from 'react';
import Sketch from 'react-p5';
import 'bootstrap/dist/css/bootstrap.min.css';
import './paint.css';

const Paint = () => {
  const [animating1, setAnimating1] = useState(false);
  const [animating2, setAnimating2] = useState(false);
  const [drawing, setDrawing] = useState(false);
  let x1 = 0;
  let speed1 = 2;
  let x2 = 300;
  let y2 = 200;
  let speedX2 = 2;
  let speedY2 = 2;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 400).parent(canvasParentRef);
    p5.background(200);
  };

  const draw = (p5) => {
    if (animating1) {
      p5.clear();
      p5.background(200);
      p5.fill(0);
      p5.ellipse(x1, p5.height / 2, 50, 50);
      x1 += speed1;
      if (x1 > p5.width || x1 < 0) {
        speed1 = -speed1;
      }
    } else if (animating2) {
      p5.clear();
      p5.background(200);
      p5.fill(255, 0, 0);
      p5.rect(x2, y2, 50, 50);
      x2 += speedX2;
      y2 += speedY2;
      if (x2 > p5.width - 50 || x2 < 0) {
        speedX2 = -speedX2;
      }
      if (y2 > p5.height - 50 || y2 < 0) {
        speedY2 = -speedY2;
      }
    }
    if (drawing) {
      p5.stroke(0);
      p5.strokeWeight(2);
      p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
    }
  };

  const mousePressed = () => {
    setDrawing(true);
  };

  const mouseReleased = () => {
    setDrawing(false);
  };

  const toggleAnimation1 = () => {
    setAnimating1(!animating1);
    setAnimating2(false);
  };

  const toggleAnimation2 = () => {
    setAnimating2(!animating2);
    setAnimating1(false);
  };

  return (
    <div className="paint">
      <header>
        <h1>Proyecto Interactivo</h1>
      </header>
      <main>
        <div id="canvas-container2" className="canvas-container">
          <Sketch setup={setup} draw={draw} mousePressed={mousePressed} mouseReleased={mouseReleased} />
        </div>
        <div id="controls">
          <button className='button' id="animate-btn1" onClick={toggleAnimation1}>⚫</button>
          <button className="button" id="animate-btn2" onClick={toggleAnimation2}>🟥</button>
        </div>
      </main>
    </div>
  );
};

export default Paint;