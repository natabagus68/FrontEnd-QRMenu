import { useCategoryModel } from "./category-view-model";
import { Pagination } from "@common/components/Pagination";
import { ButtonEdit } from "@common/components/buttons/button-edit";
import { ButtonPrint } from "@common/components/buttons/button-print";
import { ButtonTrash } from "@common/components/buttons/button-trash";
import { Button, Input } from "@material-tailwind/react";
import { Plus, Search } from "lucide-react";
export const CategoryView = () => {
  const model = useCategoryModel();
  return (
    <div className="w-full border border-[#afb3b6] rounded-md py-2 shadow-lg">
      <div className="py-4 px-8">
        <h1 className="text-[#404446] text-[24px] font-bold">Categories</h1>
      </div>
      <div className="w-full p-3 flex items-center justify-between bg-[#F0F1F3] border-y-2 border-[#E7EAEE]">
        <div className="w-80 bg-white rounded-lg">
          <Input
            label="Search category"
            size="lg"
            crossOrigin={undefined}
            color="blue"
            icon={<Search size={16} />}
          />
        </div>
        <Button
          type="button"
          onClick={() => model.toForm(null)}
          color="blue"
          className="flex items-center gap-2"
        >
          <Plus size={14} />
          Add Category
        </Button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <td className="p-4 font-bold text-[14px] text-[#404446]">
              Category Name
            </td>
            <td className="p-4 font-bold text-[14px] text-[#404446] w-0">
              Actions
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-4 text-[14px] text-[#404446] font-[600]">
              Makanan
            </td>
            <td className="p-4 text-[14px] text-[#404446] w-0">
              <div className="flex items-center gap-4">
                <ButtonEdit handleClick={() => model.toForm("3761289736")} />
                <ButtonTrash />
                <ButtonPrint />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-end my-4 px-8">
        <Pagination />
      </div>
    </div>
  );
};
