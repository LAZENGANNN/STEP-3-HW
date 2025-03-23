export class EstateClass {
    name:string;
    imgLink: string;
    price: number;
    roomsCount: number;
    liveSquare: number;
    floor: number;
    type: string;

    constructor(
        name:string,
        imgLink: string,
        price: number,
        roomsCount: number,
        liveSquare: number,
        floor: number,
        type: string
    ) {
        this.name = name;
        this.imgLink = imgLink;
        this.price = price;
        this.roomsCount = roomsCount;
        this.liveSquare = liveSquare;
        this.floor = floor;
        this.type = type;
    }
}