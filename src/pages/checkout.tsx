import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { ButtonPaymentCard } from "../components/buttonPaymentCard";

export function Checkout() {
  return (
    <div>
      <div>
        <section>
          <h1>Complete seu pedido</h1>
          <div>
            <div>
              <MapPinLine weight="regular" size={22} />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <form action="">
              <input
                type="number"
                name="cep"
                id="cep"
                required
                placeholder="CEP"
              />
              <input
                type="text"
                name="rua"
                id="rua"
                required
                placeholder="Rua"
              />
              <div>
                <input
                  type="number"
                  name="numeber"
                  id="number"
                  required
                  placeholder="Número"
                />
                <div>
                  <input
                    type="text"
                    name="complement"
                    id="complement"
                    required
                    placeholder="Complemento"
                  />
                  <span>Opcional</span>
                </div>
                <div>
                  <input
                    type="text"
                    name="neighborhood"
                    id="neighborhood"
                    placeholder="Bairro"
                  />
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Cidade"
                  />
                  <input type="text" name="state" id="state" placeholder="UF" />
                </div>
              </div>
            </form>
          </div>
        </section>
        <section>
          <div>
            <CurrencyDollar weight="regular" size={22} />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className=" w-full flex">
            <ButtonPaymentCard>
              <CreditCard size={16} className="text-purple" />
              Cartão de crédito
            </ButtonPaymentCard>
            <ButtonPaymentCard>
              <Bank size={16} className="text-purple" />
              cartão de débito
            </ButtonPaymentCard>
            <ButtonPaymentCard>
              <Money size={16} className="text-purple" />
              dinheiro
            </ButtonPaymentCard>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
}
