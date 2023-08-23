import { useNavigate, useParams } from "react-router-dom";

export const useCategoryFormModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toBack = () => navigate(`/admin/product/category`);

  return {
    id,
    toBack,
  };
};
