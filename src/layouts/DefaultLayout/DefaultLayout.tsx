import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export function DefaultLayout() {
  return (
    <div className="max-w-[74rem] h-screen my-0 mx-auto bg-background flex flex-col px-3">
      <Header />
      <Outlet />
    </div>
  );
}
