import { LineChart } from "@common/components/charts/line-chart";
import { useDashboardModel } from "./dashboard-view-model";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Select from "react-select";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
export const DashboardView = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const model = useDashboardModel();
  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <>
      <main>
        <div className="flex items-center gap-4 ">
          <Card className="mt-6 w-96">
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Total Balance
              </Typography>
              <Typography variant="h3" color="green">
                Rp.5000.0000
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 w-96">
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Total Pengeluaran
              </Typography>
              <Typography variant="h3" color="red">
                Rp.200.000
              </Typography>
            </CardBody>
          </Card>
        </div>

        <section className="my-6">
          <Card className="w-full py-4 px-2">
            <div className="flex items-center justify-between my-4 px-4">
              <h1 className="text-lg font-bold">Penjualan Per Product</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label htmlFor="prd" className="font-bold">
                    Product
                  </label>
                  <Select
                    id="prd"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    className="w-52 outline-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="date" className="font-bold">
                    Date
                  </label>
                  <Datepicker
                    inputId="date"
                    value={value}
                    onChange={handleValueChange}
                    popoverDirection="down"
                    placeholder="tahun-bulan-tanggal"
                    inputClassName="border border-gray-500 py-2.5 px-4 text-sm rounded-md w-92"
                  />
                </div>
              </div>
            </div>
            <LineChart />
          </Card>
        </section>
      </main>
    </>
  );
};
