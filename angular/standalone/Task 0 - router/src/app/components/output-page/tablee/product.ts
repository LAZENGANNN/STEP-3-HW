function getRandomInt(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function getRandomSymbols(count: number) {
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 1; i <= count; i++) {
        result += string.charAt(getRandomInt(0, string.length))
    }
    return result
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
        this.imgLink = imgLink || null;
        this.name = name || null;
        this.bel = bel || null;
        this.jir = jir || null;
        this.ugl = ugl || null;
        this.kal = kal || null;
    }
}

const arr: Product[] = []

const linksArr = [
    `https://www.foodiesfeed.com/wp-content/uploads/2024/01/best-burger-in-town.jpg`,
    `https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg`

]

for (let i: number = 0; i <= getRandomInt(7, 20); i++) {
    const killnum = getRandomInt(0, 5)

    switch (killnum) {
        case 0:
            arr.push(new Product(
                null,
                getRandomSymbols(10),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000)
            ))
            break;
        case 1:
            arr.push(new Product(
                linksArr[getRandomInt(0, 1)],
                null,
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000)
            ))

            break;
        case 2:
            arr.push(new Product(
                linksArr[getRandomInt(0, 1)],
                getRandomSymbols(10),
                null,
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000)
            ))
            break;
        case 3:
            arr.push(new Product(
                linksArr[getRandomInt(0, 1)],
                getRandomSymbols(10),
                getRandomInt(0, 1000),
                null,
                getRandomInt(0, 1000),
                getRandomInt(0, 1000)
            ))
            break;
        case 4:
            arr.push(new Product(
                linksArr[getRandomInt(0, 1)],
                getRandomSymbols(10),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                null,
                getRandomInt(0, 1000)
            ))
            break;
        case 5:
            arr.push(new Product(
                linksArr[getRandomInt(0, 1)],
                getRandomSymbols(10),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                null,
            ))
            break;

        default:
            arr.push(new Product(
                linksArr[getRandomInt(0, 1)],
                getRandomSymbols(10),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000),
                getRandomInt(0, 1000)
            ))
            break;
    }

}

// const testarr = [1, 23, 4, 5,]
// export { testarr as arr }
export { arr }

