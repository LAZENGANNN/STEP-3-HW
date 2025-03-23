function getRandomInt(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function getRandomSymbols(count: number): string {
  let result: string = '';
  const stringL: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i: number = 1; i <= count; i++) {
    result += stringL.charAt(getRandomInt(0, stringL.length));
  }
  return result;
}

export class Product {
  imgLink: string | null;
  name: string | null;
  bel: number | null;
  jir: number | null;
  ugl: number | null;
  kal: number | null;

  constructor(
    imgLink: string | null,
    name: string | null,
    bel: number | null,
    jir: number | null,
    ugl: number | null,
    kal: number | null
  ) {
    this.imgLink = imgLink;
    this.name = name;
    this.bel = bel;
    this.jir = jir;
    this.ugl = ugl;
    this.kal = kal;
  }
}

const productsArr: Product[] = [];

const linsArr: string[] = [
  `https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?quality=90&webp=true&resize=600,545`,
  `https://domf5oio6qrcr.cloudfront.net/medialibrary/8371/bigstock-Hamburger-And-French-Fries-263887.jpg`,
  `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXDG0-l9aJOTOV4TECMqrEzPkzSNtePSeWw&s`,
];

for (let i: number = 0; i <= getRandomInt(10, 20); i++) {
  productsArr.push(
    new Product(
      linsArr[getRandomInt(0, 2)],
      getRandomSymbols(10),
      getRandomInt(0, 100),
      getRandomInt(0, 100),
      getRandomInt(0, 100),
      getRandomInt(0, 100)
    )
  );

  const killnum: number = getRandomInt(1, 10);

  switch (killnum) {
    case 1:
      productsArr.push(
        new Product(
          null,
          getRandomSymbols(10),
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          getRandomInt(0, 100)
        )
      );
      break;
    case 2:
      productsArr.push(
        new Product(
          linsArr[getRandomInt(0, 2)],
          null,
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          getRandomInt(0, 100)
        )
      );

      break;
    case 3:
      productsArr.push(
        new Product(
          linsArr[getRandomInt(0, 2)],
          getRandomSymbols(10),
          null,
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          getRandomInt(0, 100)
        )
      );
      break;
    case 4:
      productsArr.push(
        new Product(
          linsArr[getRandomInt(0, 2)],
          getRandomSymbols(10),
          getRandomInt(0, 100),
          null,
          getRandomInt(0, 100),
          getRandomInt(0, 100)
        )
      );
      break;
    case 5:
      productsArr.push(
        new Product(
          linsArr[getRandomInt(0, 2)],
          getRandomSymbols(10),
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          null,
          getRandomInt(0, 100)
        )
      );
      break;
    case 6:
      productsArr.push(
        new Product(
          linsArr[getRandomInt(0, 2)],
          getRandomSymbols(10),
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          null
        )
      );
      break;
    default:
      productsArr.push(
        new Product(
          linsArr[getRandomInt(0, 2)],
          getRandomSymbols(10),
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          getRandomInt(0, 100),
          getRandomInt(0, 100)
        )
      );
      break;
  }
}

console.log(productsArr, '  234525');


export { productsArr };
