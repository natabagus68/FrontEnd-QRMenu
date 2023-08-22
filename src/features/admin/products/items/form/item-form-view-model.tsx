import { useNavigate, useParams } from "react-router-dom";

export const useItemFormModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const toBack = () => navigate("/admin/product/item");

  return {
    id,
    toBack,
  };
};
