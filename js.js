const duken = [
  {
    name: "Graduent Shop",
    phoneNumber: "+7(778)234 3638",
  },
];
const product = [
  {
    productName: "Бітіру кешіне арналған көйлектер",
    category: "1)Жаңа үлгілер,2)Сапалы,3)тиімді бағада",
    price: 10500,
    stock: 100,
  },
  {
    productName: "Бітіру кешіне арналған аяқ киімдер",
    category: "1)Сәнді аяқ киімдер,2)Жайлы,3)Тиімді баға",
    price: 7500,
    stock: 75,
  },
  {
    productName: "Косметика өнімдері",
    category: "1)оргинал өнімдер,2)Бетте ұзақ уақыт тұрады,3)брендвый",
    price: 5500,
    stock: 50,
  },
  {
    productName: "Әшекей бұйымдар",
    category: "1)Қазақи ,2)заманауи,3)брендвый",
    price: 4800,
    stock: 65,
  },
];

let num = [
  "Өнімдердің атаулары:",
  "бітіру кешіне арналған көйлектер,",
  "бітіру кешіне арналған аяқ киімдер,",
  "косметика өнімдері,",
  "әшекей бұйымдар,",
];
num.forEach((number) => number.num);

alert(num);

let num1 = [
  "Өнімдердің атаулары:",
  "бітіру кешіне арналған көйлектер,",
  "бітіру кешіне арналған аяқ киімдер,",
  "косметика өнімдері,",
  "әшекей бұйымдар,",
];
let num2 = [...num1, "Шашқа арналған заттар"];

console.log(num2);

function applyDiscountToCategory() {
  return product.flatMap((num) => num.price * 0.85);
}
console.log(applyDiscountToCategory());
