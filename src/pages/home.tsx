import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import ImageHome from "../assets/image-home.svg";
import { CoffeeList } from "../components/coffeList";

export function Home() {
  return (
    <div>
      <section className="flex items-center justify-between py-[92px]">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl text-base-title font-nunito font-black">
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>
            <p className="text-xl text-base-subtitle font-roboto font-normal ">
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
              qualquer hora
            </p>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex  flex-col gap-5 ">
              <div className="flex items-center gap-3 justify-start ">
                <span className="w-8 h-8 bg-yellow-dark flex items-center justify-center rounded-full ">
                  <ShoppingCart
                    weight="fill"
                    className="text-white"
                    size={16}
                  />
                </span>
                <p className="text-base text-base-text font-roboto">
                  Compra simples e segura
                </p>
              </div>
              <div className="flex items-center gap-3 justify-start">
                <span className="w-8 h-8 bg-yellow flex items-center justify-center rounded-full ">
                  <Timer weight="fill" className="text-white" size={16} />
                </span>
                <p className="text-base text-base-text font-roboto ">
                  Entrega rápida e rastreada
                </p>
              </div>
            </div>
            <div className="flex justify-start flex-col gap-5">
              <div className="flex gap-3 items-center justify-start">
                <span className="w-8 h-8 bg-base-text flex items-center justify-center rounded-full ">
                  <Package weight="fill" className="text-white" size={16} />
                </span>
                <p className="text-base text-base-text font-roboto">
                  Embalagem mantém o café intacto
                </p>
              </div>
              <div className="flex items-center gap-3 justify-start">
                <span className="w-8 h-8 bg-purple flex items-center justify-center rounded-full ">
                  <Coffee weight="fill" className="text-white" size={16} />
                </span>
                <p className="text-base text-base-text font-roboto">
                  O café chega fresquinho até você
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={ImageHome} />
      </section>
      <section>
        <h2 className="font-nunito text-3xl font-black pt-8 pb-14">
          Nossos cafés
        </h2>
        <div className="pb-8">
          <CoffeeList />
        </div>
      </section>
    </div>
  );
}
