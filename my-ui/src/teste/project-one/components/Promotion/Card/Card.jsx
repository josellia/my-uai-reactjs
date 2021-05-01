import React from "react";
import "../../../card.css";

const PromotionCard = ({ promotion }) => {
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={promotion.imageUrl}
        alt={promotion.title}
      />
      <div>
        <h1 className="card-title">{promotion.title}</h1>
        <span>R$ {promotion.price}</span>
        <footer className="card-footer">
          {promotion.comments.length > 0 && (
            <div>"{promotion.comments[0].comment}"</div>
          )}
          <div>{promotion.comments.length} comentários</div>
          <a
            className="card-link"
            href={promotion.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            IR PARA O SITE
          </a>
        </footer>
      </div>
    </div>
  );
};

export default PromotionCard;
