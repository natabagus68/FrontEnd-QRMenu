import { Button, Tooltip } from "@material-tailwind/react";
import { Rocket } from "lucide-react";

export const ButtonRocket = () => {
  return (
    <Tooltip content="take a look at the appearance on the landing page">
      <Button color="blue" className="p-2">
        <Rocket color="white" size={15} />
      </Button>
    </Tooltip>
  );
};
