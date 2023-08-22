import { Button } from "@material-tailwind/react";
import { Eye } from "lucide-react";

export const ButtonDetail = () => {
  return (
    <Button color="blue" className="p-2">
      <Eye size={15} />
    </Button>
  );
};
