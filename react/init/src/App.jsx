import { useState } from 'react'
import './App.css'


import CardComponent from './CardComponent/CardComponent'
import OZONcard from './OZONcard/OZONcard'
import ThemeSwitcherComponent from './ThemeSwitcherComponent/ThemeSwitcherComponent'

import UserListComponent from './UserListComponent/UserListComponent'
function App() {
  const usersArr = [
    {
      name: "Алексей Смирнов",
      email: "aleksei.smirnov@example.com",
      avatarUrl: "https://img.freepik.com/premium-vector/social-media-logo_1305298-29989.jpg"
    },
    {
      name: "Мария Иванова",
      email: "maria.ivanova@example.com",
      avatarUrl: "https://img.freepik.com/premium-vector/social-media-logo_1305298-29989.jpg"
    },
    {
      name: "Игорь Кузнецов",
      email: "igor.kuznetsov@example.com",
      avatarUrl: "https://img.freepik.com/premium-vector/social-media-logo_1305298-29989.jpg"
    }
  ]

  const prodsArr = [
    {
      price: 199.99,
      discount: 15,
      stock: 50,
      name: "Беспроводные наушники",
      rating: 4.7,
      reviews: 1234,
      deliveryDate: "2025-03-25"
    },
    {
      price: 999.99,
      discount: 20,
      stock: 30,
      name: "Ноутбук",
      rating: 4.8,
      reviews: 847,
      deliveryDate: "2025-03-28"
    },
    {
      price: 49.99,
      discount: 10,
      stock: 200,
      name: "Спортивная бутылка",
      rating: 4.5,
      reviews: 512,
      deliveryDate: "2025-03-22"
    },
    {
      price: 25.99,
      discount: 5,
      stock: 100,
      name: "Книга",
      rating: 4.9,
      reviews: 322,
      deliveryDate: "2025-03-20"
    },
    {
      price: 299.99,
      discount: 25,
      stock: 10,
      name: "Смарт-часы",
      rating: 4.6,
      reviews: 578,
      deliveryDate: "2025-03-30"
    }
  ];

  return (
    <>
      <hr />

      <pre>1. Компонент карточки: Создайте компонент CardComponent,
        который принимает следующие “пропсы”:
        title (строка), description (строка) и imageUrl (строка).
        Отобразите эти данные в виде
        карточки с изображением, заголовком и описанием.
      </pre>
      <CardComponent
        title={"название"}
        description={"описание"}
        imageUrl={"https://media.tenor.com/kglDzTqoEUAAAAAM/maxwell-cat.gif"}
      />

      <hr />
      <pre> 2. Список пользователей:
        Создайте компонент UserListComponent, который принимает
        массив из 3-ёх объектов пользователей через “пропс”.
        Каждый объект должен содержать свойства: name, email и avatarUrl.
        Отобразите список пользователей, используя ещё один созданный вами
        компонент UserCardComponent, который принимает данные о пользователе
        в виде объекта через "пропс”. Задание не подразумевает оптимизацию.
        Передавать каждый объект можно через доступ к
        нему по индексам arr[0], arr[1], arr[2] при условии, что их 3 в массиве.
      </pre>
      <UserListComponent arr={usersArr} />

      <hr />
      <pre>3. Настройки темы: Создайте компонент ThemeSwitcherComponent,
        который принимает “пропс” isDarkMode (булевое значение).
        В зависимости от значения этого свойства,
        измените несколько стилистических свойств компонента (например, цвет фона и текст)</pre>
      {/* темный */}
      <ThemeSwitcherComponent bool={true} />
      {/* светлый */}
      <ThemeSwitcherComponent bool={false} />

      <hr />
      <pre>
        Реализуйте для значений,
        выделенных синей рамкой зависимость от друг друга.

        Серым зачёркнута стартовая цена.
        Цена слева должна формироваться от стартовой - указанный процент скидки.

        Остальные значения (осталось шт, название товара, рейтинг, кол-во отзывов и дата доставки),
        которые выделены красной рамкой генерировать случайным образом из заготовленного массива объектов.
        Стартовую стоимость товара рандомить случайным образом.
      </pre>
      <OZONcard data={prodsArr[0]}/>

    </>


  )
}

export default App
