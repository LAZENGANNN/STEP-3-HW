export class Contact {
  nickname: string;
  last: string;
  number: string;
  email: string;
  img: string;
  isChat: boolean;
  chat: string[];

  constructor(
    nickname: string,
    last: string,
    number: string,
    email: string,
    img: string,
    isChat: boolean,
    chat: string[],
  ) {
    this.nickname = nickname;
    this.last = last;
    this.number = number;
    this.email = email;
    this.img = img;
    this.isChat = isChat
    this.chat= chat
  }
}
