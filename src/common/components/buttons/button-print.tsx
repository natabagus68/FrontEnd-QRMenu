import { Button } from "@material-tailwind/react";
import { Printer } from "lucide-react";

export const ButtonPrint = () => {
  return (
    <Button color="blue" className="p-2">
      <Printer color="white" size={15} />
    </Button>
  );
};
