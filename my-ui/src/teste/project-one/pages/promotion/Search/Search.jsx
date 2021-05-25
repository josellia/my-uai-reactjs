import React, { useEffect, useState } from "react";
import PromotionCard from "../../../components/Promotion/Card/Card";
import axios from "axios";
import UseFullPageLoader from "../../../../../components/loader/UseFullPageLoader";

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get("http://localhost:3006/promotion?_embed=comments")
        .then((response) => {
          setPromotions(response.data);
        });
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <UseFullPageLoader />}
      {!loading && (
        <>
          {promotions.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </>
      )}
    </div>
  );
};

export default PromotionSearch;
