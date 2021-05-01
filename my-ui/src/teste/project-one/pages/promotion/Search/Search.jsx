import React from "react";
import PromotionCard from "../../../components/Promotion/Card/Card";

const PromotionSearch = () => {
  const promotion = {
    id: 1,
    title: "Skate street",
    price: 200,
    url: "https://www.kanui.com.br/skate/skates-street/",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/11/07/11/13/skateboard-1030929__340.jpg",
    comments: [
      {
        id: 1,
        comment: "Muito legal!",
      },
    ],
  };
  return (
    <div>
      <PromotionCard promotion={promotion} />
    </div>
  );
};

export default PromotionSearch;
