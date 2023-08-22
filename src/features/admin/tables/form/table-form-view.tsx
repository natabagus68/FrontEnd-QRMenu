import { Button, Input } from "@material-tailwind/react";
import { useTableFormModel } from "./table-form-veiw-model";

export const TableFormView = () => {
  const model = useTableFormModel();
  return (
    <>
      <div className="w-full h-full border border-[#afb3b6] rounded-md py-2 shadow-lg">
        <div className="py-4 px-8">
          <h1 className="text-[#404446] text-[24px] font-bold">
            {`${model.id ? "Edit" : "Add"} Tables Number`}
          </h1>
        </div>
        <div className="mt-6 w-full h-full  pl-6 pb-8">
          <form className="pr-24 h-full  flex flex-col gap-40">
            <div className="w-full bg-white">
              <Input
                crossOrigin={undefined}
                label="Input Table Number"
                color="blue"
              />
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit" color="blue">
                Submit
              </Button>
              <Button onClick={model.toBack} type="button" variant="outlined">
                cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
