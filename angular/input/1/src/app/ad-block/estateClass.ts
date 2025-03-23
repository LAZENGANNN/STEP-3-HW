export class EstateClass {
    imgLink: string;
    price: number;
    roomsCount: number;
    liveSquare: number;
    floor: number;
    type: string;

    constructor(
        imgLink: string,
        price: number,
        roomsCount: number,
        liveSquare: number,
        floor: number,
        type: string
    ) {
        this.imgLink = imgLink;
        this.price = price;
        this.roomsCount = roomsCount;
        this.liveSquare = liveSquare;
        this.floor = floor;
        this.type = type;
    }
}