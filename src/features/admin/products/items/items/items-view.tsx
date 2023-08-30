import { Pagination } from "@common/components/Pagination";
import { ButtonDetail } from "@common/components/buttons/button-detail";
import { ButtonEdit } from "@common/components/buttons/button-edit";
import { ButtonRocket } from "@common/components/buttons/button-rocket";
import { ButtonTrash } from "@common/components/buttons/button-trash";
import { Button, Input } from "@material-tailwind/react";
import { Plus, Search } from "lucide-react";
import { useItemModel } from "./item-view-model";

export const ItemView = () => {
  const model = useItemModel();
  return (
    <>
      <div className="w-full border border-[#afb3b6] rounded-md py-2 shadow-lg">
        <div className="py-4 px-8">
          <h1 className="text-[#404446] text-[24px] font-bold">Item Product</h1>
        </div>
        <div className="w-full p-3 flex items-center justify-between bg-[#F0F1F3] border-y-2 border-[#E7EAEE]">
          <div className="w-80 bg-white rounded-lg">
            <Input
              label="Search product"
              size="lg"
              crossOrigin={undefined}
              color="blue"
              icon={<Search size={16} />}
            />
          </div>
          <Button
            type="button"
            color="blue"
            className="flex items-center gap-2"
            onClick={() => model.toForm(undefined)}
          >
            <Plus size={14} />
            Add Item Product
          </Button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <td className="p-4 font-bold text-[14px] text-[#404446]">
                Product Name
              </td>
              <td className="p-4 font-bold text-[14px] text-[#404446]">
                Category
              </td>
              <td className="p-4 font-bold text-[14px] text-[#404446]">
                Stock
              </td>
              <td className="p-4 font-bold text-[14px] text-[#404446]">
                Price
              </td>
              <td className="p-4 font-bold text-[14px] text-[#404446] ">
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-4 text-[14px] text-[#404446] ">Nasi Goreng</td>
              <td className="p-4 text-[14px] text-[#404446] ">Makanan</td>
              <td className="p-4 text-[14px] text-[#404446] ">100 porsi</td>
              <td className="p-4 text-[14px] text-[#404446] ">
                Rp.12.000 / porsi
              </td>
              <td className="p-4 text-[14px] text-[#404446] w-0">
                <div className="flex items-center gap-4">
                  <ButtonRocket />
                  <ButtonDetail />
                  <ButtonEdit handleClick={() => model.toForm("23423dasdf")} />
                  <ButtonTrash />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-end my-4 px-8">
          <Pagination />
        </div>
      </div>
    </>
  );
};
