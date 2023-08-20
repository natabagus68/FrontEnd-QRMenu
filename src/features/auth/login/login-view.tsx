import { useLoginView } from "./login-view-model";
import { EyeIcon, EyeOffIcon, Mail, QrCodeIcon } from "lucide-react";
import { Card, CardBody, Button, Input } from "@material-tailwind/react";
export const LoginView = () => {
  const model = useLoginView();
  return (
    <>
      <Card className="w-[80%]">
        <CardBody className="py-8 pr-10">
          <h1 className="font-[600] text-[24px] flex items-center gap-2 text-[#514E4E]">
            <QrCodeIcon color="black" size={32} /> QRMenu
          </h1>
          <h1 className="mt-4 text-[32px] text-[#514E4E] font-bold">Welcome</h1>
          <p>Please sign in with registered account!</p>
          <form>
            <div className="mt-8 flex flex-col gap-4">
              <Input
                type="email"
                className=""
                variant="outlined"
                color="blue"
                label="email"
                crossOrigin={undefined}
                icon={<Mail color="#514E4E" size={15} />}
              />
              <Input
                type={model.eye ? "text" : "password"}
                className=""
                variant="outlined"
                label="password"
                color="blue"
                crossOrigin={undefined}
                icon={
                  model.eye ? (
                    <EyeIcon
                      color="#514E4E"
                      size={15}
                      onClick={model.onPassword}
                    />
                  ) : (
                    <EyeOffIcon
                      color="#514E4E"
                      size={15}
                      onClick={model.onPassword}
                    />
                  )
                }
              />
              <Button type="submit" color="blue" children={"Login"} />
            </div>
          </form>
          <div className="text-center mt-3">
            <p>
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={model.toSignUp}
              >
                Sign up
              </span>{" "}
              .
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
