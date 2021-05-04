import React, { useEffect, useState } from "react";
import PromotionCard from "../../../components/Promotion/Card/Card";
import axios from "axios";

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3006/promotion?_embed=comments")
      .then((response) => {
        setPromotions(response.data);
      });
  }, []);

  return (
    <div>
      {promotions.map((promotion) => (
        <PromotionCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  );
};

export default PromotionSearch;
