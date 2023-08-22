import { Button } from "@material-tailwind/react";
import { Trash } from "lucide-react";

export const ButtonTrash = () => {
  return (
    <Button color="red" className="p-2">
      <Trash color="white" size={15} />
    </Button>
  );
};
