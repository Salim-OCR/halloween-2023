// import Navigation from "../components/Navigation";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="pageHome">
      <h1>esprit d'halloween</h1>
      <div className="infos-container">
        <div className="infos">
          <h2>Idées de cadeaux</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, esse
            optio. Deleniti reiciendis architecto recusandae dolore similique
            officiis cupiditate qui aliquid incidunt accusantium ut explicabo,
            dolores suscipit labore assumenda pariatur?
          </p>
          <nav className="navigation">
            <ul>
              <li>
                <Link to={"/mask"}>mask</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="img-right">
        <img
          src="./media/c.jpg"
          alt="image d'un homme avec une tête de citrouillle"
        />
      </div>
      <div className="img-left">
        <img
          src="./media/b.jpg"
          alt="image de deux citrouille avec un sourire diablotin"
        />
      </div>
    </section>
  );
}
export default Home;
