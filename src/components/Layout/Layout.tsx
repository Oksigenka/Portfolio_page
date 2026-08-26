import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Experience } from "../Experience";
import { Skills } from "../Skills";
import { Projects } from "../Projects";
import { Education } from "../Education";
import { Hobbies } from "../Hobbies";
import { Hire } from "../Hire";
import { About } from "../About";

export default function Layout() {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Hobbies />
      <Hire />
      <Outlet />
    </>
  );
}