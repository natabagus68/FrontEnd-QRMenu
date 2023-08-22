import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { FileVideo, ImagePlus } from "lucide-react";
import { useItemFormModel } from "./item-form-view-model";
export const ItemFormView = () => {
  const model = useItemFormModel();
  return (
    <>
      <div className="w-full h-full border border-[#afb3b6] rounded-md py-2 shadow-lg">
        <div className="py-4 px-8">
          <h1 className="text-[#404446] text-[24px] font-bold">
            {`${model.id ? "Edit" : "Add"}`} Product
          </h1>
        </div>
        <div className="mt-6 w-full h-full  pl-6 pb-8">
          <form className="pr-24 h-full  flex flex-col gap-8">
            <div className="w-full bg-white">
              <Input
                crossOrigin={undefined}
                label="Input name product"
                color="blue"
              />
            </div>
            <div className="w-full bg-white">
              <Select label="Select Category">
                <Option>Makanan</Option>
                <Option>Minuman</Option>
              </Select>
            </div>
            <div className="w-full bg-white">
              <Input
                type="number"
                min={0}
                crossOrigin={undefined}
                label="Input price"
                color="blue"
              />
            </div>
            <div className="w-1/3 bg-white">
              <Input
                type="number"
                min={0}
                crossOrigin={undefined}
                label="Input Stock"
                color="blue"
              />
            </div>
            <div className="w-full flex items-center bg-white">
              <div className="w-[200px] py-2 px-2 rounded-l-md bg-gray-200 text-center">
                <label
                  htmlFor="image"
                  className="text-gray-600 w-full h-full cursor-pointer flex items-center gap-2"
                >
                  <ImagePlus size={16} />
                  Choose Image
                </label>
              </div>
              <input
                readOnly
                type="text"
                className="w-full py-1.5 px-4 rounded-r-md border-y border-r border-gray-400 outline-none cursor-default"
              />
              <input type="file" id="image" className="hidden" />
            </div>
            <div className="w-full flex items-center bg-white">
              <div className="w-[200px] py-2 px-2 rounded-l-md bg-gray-200 text-center">
                <label
                  htmlFor="video"
                  className="text-gray-600 w-full h-full cursor-pointer flex items-center gap-2"
                >
                  <FileVideo size={16} />
                  Choose Video
                </label>
              </div>
              <input
                placeholder="Optional...."
                readOnly
                type="text"
                className="w-full py-1.5 px-4 rounded-r-md border-y border-r border-gray-400 outline-none cursor-default"
              />
              <input type="file" id="video" className="hidden" />
            </div>
            <div className="w-full bg-white">
              <Textarea size="lg" label="Description Product" color="blue" />
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
