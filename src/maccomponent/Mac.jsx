import React from "react";
import { useState, useRef } from "react";
import img1 from "../images/Asset 1.png";
import img2 from "../images/gittla.png";
import img3 from "../images/attlassian.png";
import img4 from "../images/ifa-removebg-preview.png";
import img5 from "../images/gooogl.png";
import img6 from "../images/mii-removebg-preview.png";
import img7 from "../images/ffive.png";
import "./Mac.css";
const Mac = () => {
  let p1 = useRef();
  let p2 = useRef();
  let p3 = useRef();
  let p4 = useRef();
  let p5 = useRef();
  let p6 = useRef();
  let checkdrop1 = () => {
    p1.current.classList.toggle("drop1");
  };
  let checkdrop2 = () => {
    p2.current.classList.toggle("drop2");
  };
  let checkdrop3 = () => {
    p3.current.classList.toggle("drop3");
  };
  let checkdrop4 = () => {
    p4.current.classList.toggle("drop4");
  };
  let checkdrop5 = () => {
    p5.current.classList.toggle("drop5");
  };
  let checkdrop6 = () => {
    p6.current.classList.toggle("drop6");
  };

  return (
    <body>
      <section className="sect1">
        <div className="sect1-col1">
          <h1> One of the best learning management system tools available</h1>
          <p>
            Our comprehension eLearning platform is on a mission to empower
            individuals like you with expert-led classes,personalized
            mentorship, and seamless connection to job opportunities
          </p>
        </div>
        <div className="sect1-col2">
          <div>
            <h2>Be part of McAnderson's early users.</h2>
            <h2>join the waitlist now!</h2>
            <p>Enter the fields below to get started</p>
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Enter email" />
            <button>Join waitlist</button>
          </div>
        </div>
      </section>
      <section className="sect2">
        <div>
          <p>Some of Our Partners</p>
        </div>
        <div>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img4} alt="" />
          <img src={img3} alt="" />
        </div>
      </section>
      <section className="sect3">
        <div>
          <p>Why Join Our Waitlist?</p>
          <h1>Get Ready to Revolutionize Your Learning Journey!</h1>
          <div className="sect3-p">
          <p>
            Explore our curated selection of featured courses and programs
            designed to ignite your passion for learning and propel you
            towards success. From cutting-edge technology to timeless artistry,
            we have something for every learner. Dive in and discover 
            your next big breakthrough today!
          </p>
          </div>
        </div>
        <div className="sect3-row2">
          <div className="sect3-row2-col1">
            <p>Full Stack Development</p>
            <p>Website</p>
          </div>
          <div className="sect3-row2-col2">
            <p>Production Mangement</p>
            <p>Website</p>
          </div>
          <div className="sect3-row2-col3">
            <p> UI/UX Design</p>
            <p>Website</p>
          </div>
          <div className="sect3-row2-col4">
            <p>Digital Marketing</p>
            <p>Website</p>
          </div>
          <div className="sect3-row2-col5">
            <p>Data Science</p>
            <p>Website</p>
          </div>
          <div className="sect3-row2-col6">
            <p>Web Design</p>
            <p>Website</p>
          </div>
        </div>
      </section>
      <section className="sect4">
        <div className="sect4-col1">
          <p>Exciting features</p>
          <h1>Unlock Your Potential with Our Featured Offerings</h1>
          <p>
            Don't miss out on this opportunity to be part of something
            extraordinary. Join our waitlist now to secure your spot and be at
            the forefront of the future of learning.
          </p>
        </div>
        <div className="sect4-col2">
          <div className="sect4-col2-1">
            <div>
              <h2>Discover learning from anywhere</h2>
              <p>
                Why confine yourself to a lecture hall when you have the freedom
                to learn from the comfort of your home, the serenity of the
                beach, the creativity of a recording studio, or the familiarity
                of your own shop?
              </p>
            </div>
            <div>
              <h2>Learn from prosperity</h2>
              <p>
                Whether you're charting a career path, embracing fresh
                challenges, or acquiring new skills for professional growth,
                we're here to guide you toward achieving your goals.
              </p>
            </div>
          </div>
          <div className="divimg"> 
            <img src={img7} alt="" />
          </div>
          <div className="sect4-col2-1">
            <div>
              <h2>Learn from proficient</h2>
              <p>
                Our educators are meticulously chosen to ensure optimal learning
                outcomes. They are experts in their respective fields, dedicated
                to providing you with the quality education you deserve.
              </p>
            </div>
            <div>
              <h2>Learning become a community experience</h2>
              <p>
                Learners unite to exchange knowledge, collaborate, and elevate
                their comprehension. Your learning journey is shared, not
                solitary.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sect5">
        <div className="sect5-col1">
          <p>Tagline here</p>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="sect5-col2">
          <div className="sect5-col2-1">
            <div onClick={checkdrop1} className="drop">
            <h3>Can i take course for free?</h3>
            <i class="fa-solid fa-angle-down"></i>
            </div>
            <div  ref={p1} className="drops">
            <p>
              See the most common asked questions and their answers
            </p>
            <h3>Learn More <i class="fa-solid fa-arrow-right"></i></h3>
            </div>
          </div>
          <div className="sect5-col2-1">
            <div onClick={checkdrop2} className="drop">
            <h3>Will i take an assesment to start?</h3>
            <i class="fa-solid fa-angle-down"></i>
            </div>
            <div ref={p2} className="drops">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.
            </p>
            <h3>Learn More <i class="fa-solid fa-arrow-right"></i></h3>
            </div>
          </div>
          <div className="sect5-col2-1">
            <div  onClick={checkdrop3} className="drop">
            <h3>How do I process Refunds?</h3>
            <i class="fa-solid fa-angle-down"></i>
            </div>
            <div  ref={p3} className="drops">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.
            </p>
            <h3>Learn More <i class="fa-solid fa-arrow-right"></i></h3>
          </div>
          </div>
          <div className="sect5-col2-1">
            <div onClick={checkdrop4} className="drop">
            <h3>How to pay the tuition fee?</h3>
            <i class="fa-solid fa-angle-down"></i>
            </div>
            <div ref={p4} className="drops">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.
            </p>
            <h3>Learn More <i class="fa-solid fa-arrow-right"></i></h3>
            </div>
          </div>
          <div className="sect5-col2-1">
            <div  onClick={checkdrop5} className="drop">
            <h3>Is the programs beginner-friendly?</h3>
            <i class="fa-solid fa-angle-down"></i>
            </div>
            <div ref={p5} className="drops">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.
            </p>
            <h3>Learn More <i class="fa-solid fa-arrow-right"></i></h3>
            </div>
          </div>
          <div className="sect5-col2-1">
            <div  onClick={checkdrop6} className="drop">
            <h3>Can I transfer to another program after applying for one?</h3>
            <i class="fa-solid fa-angle-down"></i>
            </div>
            <div ref={p6} className="drops">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.
            </p>
            <h3>Learn More <i class="fa-solid fa-arrow-right"></i></h3>
            </div>
          </div>
        </div>
        <div className="section5-col3">
          <h2>Still have question?</h2>
          <p>If you couldn’t see your question, get in contact with us now to get your answer</p>
          <button>Contact us</button>
        </div>
      </section>
    </body>
  );
};

export default Mac;
