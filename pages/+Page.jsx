import {Share} from "../src/app/share/index.js";

export default Page;

import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function Page() {
  return (
    <>
      <b>
        <i>
          Time elapsed: <TimeElapsed />
        </i>
        <Counter />
      </b>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/share" element={<About />} />
      <Route path="/share" element={<Share />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Example of client-side routing with React Router and SSR.</p>
      <p>
        This page is rendered to HTML, see <Code>view-source:http://localhost:3000</Code>.
      </p>
    </div>
  );
}

function About() {
    const document = useDocument()
    document.title = 'Awesome Product'
    document.head.add(<meta name="description" content="This product helps you with...">)
    document.head.add(<meta property="og:image" content="http://thumbnail.10x10.co.kr/webimage/image/basic600/408/B004089332-1.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false" />)
    return (
    <>
      <h2>About</h2>
      <p>
        Note how the elapsed time above didn't reset when you switched to the <Code>/about</Code> page.
      </p>
      <p>
        This page is rendered to HTML, see <Code>view-source:http://localhost:3000/about</Code>.
      </p>
    </>
  );
}
