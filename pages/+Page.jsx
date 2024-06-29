import { Share } from "../src/app/share/index";

export default Page;

import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function Page() {
  return (
    <>
      <b></b>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/share">Share</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
    </div>
  );
}

function About() {
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
