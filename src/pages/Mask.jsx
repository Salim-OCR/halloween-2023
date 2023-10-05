import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Mask() {
  return (
    <section id="pageMask">
      <nav className="navigation">
        <ul>
          <li>
            <Link to={"/"}>accueil</Link>
          </li>
        </ul>
      </nav>
      <h1>
        Top 3 des meilleurs masques pour <span>halloween</span>
      </h1>

      <div className="container-links">
        <ul>
          <ProductCard
            title="Mask"
            imgLink="/"
            description=" sit amet consectetur adipisicing elit. Odit accusamus sint non sapiente optio nesciunt beatae et inventore! Qui laborum laudantium quisquam sunt iusto quaerat nihil aperiam tempora labore quidem"
            subtitle="Lorem ipsum dolor"
            src="./media/a.jpg"
            alt="image un homme avec une tête de citrouille"
            amazonLink="votre-lien-d-affiliation-princesse-ici"
          />
          <ProductCard
            title="Mask"
            imgLink="/"
            description=" sit amet consectetur adipisicing elit. Odit accusamus sint non sapiente optio nesciunt beatae et inventore! Qui laborum laudantium quisquam sunt iusto quaerat nihil aperiam tempora labore quidem"
            subtitle="Lorem ipsum dolor"
            src="./media/d.jpg"
            alt="image un homme avec une tête de citrouille"
            amazonLink="votre-lien-d-affiliation-princesse-ici"
          />
        </ul>
      </div>
    </section>
  );
}
export default Mask;
