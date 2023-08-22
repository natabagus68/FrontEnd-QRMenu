import { Button } from "@material-tailwind/react";
import { Edit } from "lucide-react";

export const ButtonEdit = ({ handleClick }) => {
  return (
    <Button onClick={handleClick} className="p-2 bg-[#F79009]">
      <Edit color="white" size={15} />
    </Button>
  );
};
