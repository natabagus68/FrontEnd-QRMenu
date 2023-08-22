import { useNavigate, useParams } from "react-router-dom";

export const useItemModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const toForm = (id?: string | undefined) => {
    id ? navigate(`${id}/edit`) : navigate("add");
  };

  return {
    id,
    toForm,
  };
};
