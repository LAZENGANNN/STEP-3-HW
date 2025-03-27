import { Component } from '@angular/core';

@Component({
  selector: 'app-ozon-card',
  standalone: true,
  templateUrl: './ozon-card.component.html',
  styleUrl: './ozon-card.component.css',
})
export class OzonCardComponent {
  randomObjects: any[] = [
    {
      remain: 7832,
      stars: 3,
      comments: 1243,
      date: '15.4',
      name: 'Игровая Клавиатура',
      description: 'Удобная клавиатура с подсветкой для геймеров.',
    },
    {
      remain: 5920,
      stars: 4,
      comments: 432,
      date: '22.9',
      name: 'Беспроводные Наушники',
      description: 'Высококачественные наушники с шумоподавлением.',
    },
    {
      remain: 1804,
      stars: 1,
      comments: 564,
      date: '2.11',
      name: 'Игровая Мышь',
      description: 'Эргономичная мышь с высоким DPI для точного управления.',
    },
    {
      remain: 6479,
      stars: 5,
      comments: 2987,
      date: '10.6',
      name: 'Монитор 4K',
      description: 'Яркий и четкий монитор с разрешением 4K.',
    },
    {
      remain: 3101,
      stars: 2,
      comments: 1234,
      date: '19.2',
      name: 'Игровая Консоль',
      description: 'Мощная игровая консоль с большим выбором игр.',
    },
    {
      remain: 8520,
      stars: 0,
      comments: 658,
      date: '28.8',
      name: 'Графический Планшет',
      description:
        'Планшет для рисования с высокой чувствительностью к нажатию.',
    },
    {
      remain: 4387,
      stars: 3,
      comments: 1021,
      date: '13.7',
      name: 'Мобильный Телефон',
      description: 'Современный смартфон с мощным процессором.',
    },
    {
      remain: 2940,
      stars: 5,
      comments: 231,
      date: '6.12',
      name: 'Гарнитура VR',
      description: 'Виртуальная реальность с высоким разрешением.',
    },
    {
      remain: 7993,
      stars: 4,
      comments: 1345,
      date: '27.3',
      name: 'Зарядное Устройство',
      description: 'Быстрое и компактное зарядное устройство для устройств.',
    },
    {
      remain: 5071,
      stars: 2,
      comments: 876,
      date: '9.5',
      name: 'Игровое Кресло',
      description:
        'Комфортное кресло с поддержкой поясницы для долгих игровых сессий.',
    },
  ];

  obj = this.randomObjects[this.randomint(0, this.randomObjects.length - 1)];

  oldPrice: number = this.randomint(66000, 400);
  discount: number = this.randomint(100, 1);
  newPrice: number = this.oldPrice * (this.discount / 100);
  remain: number = this.obj.remain;
  name: string = this.obj.name;
  description: string = this.obj.description;
  stars: number = this.obj.stars;
  comments: number = this.obj.comments;
  date: string = this.obj.date;

  randomint(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
