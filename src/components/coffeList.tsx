import { CoffeeCard } from "./coffeeCard";
import CoffeeExpresso from "../assets/types-coffee/coffee-expresso.svg";
import CoffeeAmericano from "../assets/types-coffee/coffee-americano.svg";
import CoffeeExpressoCremoso from "../assets/types-coffee/coffee-expresso-cremoso.svg";
import CoffeeGelado from "../assets/types-coffee/coffee-gelado.svg";
import CoffeeComLeite from "../assets/types-coffee/coffee-com-leite.svg";
import CoffeeLatte from "../assets/types-coffee/coffee-latte.svg";
import CoffeeCapuccino from "../assets/types-coffee/coffee-capuccino.svg";
import CoffeeMacchiato from "../assets/types-coffee/coffee-macchiato.svg";
import CoffeeMocaccino from "../assets/types-coffee/coffee-mocaccino.svg";
import CoffeeChocolateQuente from "../assets/types-coffee/coffee-chocolate-quente.svg";
import CoffeeCubano from "../assets/types-coffee/coffee-cubano.svg";
import CoffeeHavaiano from "../assets/types-coffee/coffee-havaiano.svg";
import CoffeeArabe from "../assets/types-coffee/coffee-arabe.svg";
import CoffeeIrlandes from "../assets/types-coffee/coffee-irlandes.svg";

export function CoffeeList() {
  const coffees = [
    {
      id: 1,
      image: CoffeeExpresso,
      tags: ["Tradicional"],
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: "9,90",
    },
    {
      id: 2,
      image: CoffeeAmericano,
      tags: ["Tradicional"],
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: "9,90",
    },
    {
      id: 3,
      image: CoffeeExpressoCremoso,
      tags: ["Tradicional"],
      name: "Expresso cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: "9,90",
    },
    {
      id: 4,
      image: CoffeeGelado,
      tags: ["Tradicional", "Gelado"],
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: "9,90",
    },
    {
      id: 5,
      image: CoffeeComLeite,
      tags: ["Tradicional", "Com leite"],
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: "9,90",
    },
    {
      id: 6,
      image: CoffeeLatte,
      tags: ["Tradicional", "Com leite"],
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: "9,90",
    },
    {
      id: 7,
      image: CoffeeCapuccino,
      tags: ["Tradicional", "Com leite"],
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: "9,90",
    },
    {
      id: 8,
      image: CoffeeMacchiato,
      tags: ["Tradicional", "Com leite"],
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: "9,90",
    },
    {
      id: 9,
      image: CoffeeMocaccino,
      tags: ["Tradicional", "Com leite"],
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: "9,90",
    },
    {
      id: 10,
      image: CoffeeChocolateQuente,
      tags: ["Especial", "Com leite"],
      name: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: "9,90",
    },
    {
      id: 11,
      image: CoffeeCubano,
      tags: ["Especial", "alcoólico", "Gelado"],
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "9,90",
    },
    {
      id: 12,
      image: CoffeeHavaiano,
      tags: ["Especial"],
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: "9,90",
    },
    {
      id: 13,
      image: CoffeeArabe,
      tags: ["Especial"],
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: "9,90",
    },
    {
      id: 14,
      image: CoffeeIrlandes,
      tags: ["Especial", "alcoólico"],
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "9,90",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-10">
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          id={coffee.id}
          image={coffee.image}
          tags={coffee.tags}
          name={coffee.name}
          description={coffee.description}
          price={coffee.price}
        />
      ))}
    </div>
  );
}
