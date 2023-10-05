import React from "react";

const ProductCard = ({
  title,
  description,
  amazonLink,
  subtitle,
  src,
  alt,
  imgLink,
}) => {
  return (
    <li className="product-card">
      <h4>{title}</h4>
      <a href={imgLink} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} />
      </a>
      <p>
        <em>{subtitle}</em> {description}
      </p>
      <div id="linkAmazon">
        <a href={amazonLink} target="_blank" rel="noopener noreferrer">
          Voir le produit
        </a>
      </div>
    </li>
  );
};

export default ProductCard;
