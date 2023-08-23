import { useNavigate } from "react-router-dom";

export const useCategoryModel = () => {
  const navigate = useNavigate();
  const toForm = (id?: string | null) => {
    id ? navigate(`${id}/edit`) : navigate(`add`);
  };

  return {
    toForm,
  };
};
