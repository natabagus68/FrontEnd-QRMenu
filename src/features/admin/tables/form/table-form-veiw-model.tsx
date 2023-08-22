import { useNavigate, useParams } from "react-router-dom";

export const useTableFormModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toBack = () => navigate(`/admin/table`);

  return {
    id,
    toBack,
  };
};
