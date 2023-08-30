import { ButtonEdit } from "@common/components/buttons/button-edit";
import { ButtonPrint } from "@common/components/buttons/button-print";
import { ButtonTrash } from "@common/components/buttons/button-trash";
import { Button, Chip, Input } from "@material-tailwind/react";
import { BellDot, Plus, Search } from "lucide-react";
import { useOrderModel } from "./order-view-model";

export const OrderView = () => {
  const model = useOrderModel();
  return (
    <>
      <div className="w-full border border-[#afb3b6] rounded-md py-2 shadow-lg">
        <div className="py-4 px-8">
          <div className="flex gap-3 items-center">
            <h1 className="text-[#404446] text-[24px] font-bold flex items-center gap-4">
              Orders
              <Chip
                value={1}
                size="lg"
                variant="ghost"
                color="green"
                className="rounded-full"
              />
            </h1>

            <p className="text-sm flex items-center gap-1">
              <BellDot size={17} color="green" />
              Online orders...
            </p>
          </div>
        </div>
        <div className="w-full p-3 flex items-center justify-between bg-[#F0F1F3] border-y-2 border-[#E7EAEE]">
          <div className="w-80 bg-white rounded-lg">
            <Input
              label="Search Table"
              size="lg"
              crossOrigin={undefined}
              color="blue"
              icon={<Search size={16} />}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              onClick={() => model.toForm(null)}
              color="blue"
              className="flex items-center gap-2"
            >
              <Plus size={14} />
              manual order
            </Button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <td className="p-4 font-bold text-[14px] text-[#404446]">
                table
              </td>
              <td className="p-4 font-bold text-[14px] text-[#404446]">date</td>

              <td className="p-4 font-bold text-[14px] text-[#404446]">
                total
              </td>
              <td className="p-4 font-bold text-[14px] text-[#404446]">
                status
              </td>
              <td className="p-4 font-bold text-[14px] text-[#404446] w-0">
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-4 text-[14px] text-[#404446] ">12 A</td>
              <td className="p-4 text-[14px] text-[#404446] ">
                23/8/2023 09:58
              </td>
              <td className="p-4 text-[14px] text-[#404446] ">
                Rp.40.000.000,00
              </td>
              <td className="p-4 text-[14px] text-[#404446] ">
                Makan di Tempat
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
      </div>
    </>
  );
};
