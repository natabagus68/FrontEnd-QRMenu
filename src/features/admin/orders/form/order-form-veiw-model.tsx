import { useNavigate, useParams } from "react-router-dom";

export const useOrderFormModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toBack = () => navigate(`/admin/order`);

  return {
    id,
    toBack,
  };
};
