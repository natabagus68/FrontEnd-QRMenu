import { Outlet } from "react-router-dom";
import { useLayoutView } from "./auth-layout-view-model";
import { QrCodeIcon, Smartphone } from "lucide-react";
export const AuthLayoutView = () => {
  const model = useLayoutView();
  return (
    <>
      <main className="w-full h-screen flex">
        <section className="w-[60%] h-full bg-gradient-to-b from-white via-blue-300 to-blue-700 flex flex-col justify-center items-center">
          <div className="flex items-center">
            <Smartphone size={50} />
            <QrCodeIcon size={50} />
            <h1 className="ml-5 text-white text-[50px] font-bold">
              QrMenu ...
            </h1>
          </div>
        </section>
        <section className="w-1/2 h-full flex justify-center items-center">
          <Outlet />
        </section>
      </main>
    </>
  );
};
