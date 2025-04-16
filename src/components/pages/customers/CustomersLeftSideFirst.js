import React from 'react'
import Image from 'next/image'
import Styles from '@/styles/CustomersDetail.module.css'

const foodData = [
  {
    id: 1,
    image: '/ramkaa.png',
    title: 'Medium Spicy Spaghetti Italiano',
    category: 'SPAGHETTI',
    serving: 'Serves for 4 Person',
    price: '$12.56',
    icon: '/3.png',
  },
  {
    id: 2,
    image: '/ramkaa.png',
    title: 'Medium Spicy Spaghetti Italiano',
    category: 'PASTA',
    serving: 'Serves for 2 Person',
    price: '$10.99',
    icon: '/3.png',
  },
  {
    id: 3,
    image: '/ramkaa.png',
    title: 'Medium Spicy Spaghetti Italiano',
    category: 'LASAGNA',
    serving: 'Serves for 3 Person',
    price: '$9.45',
    icon: '/3.png',
  },
  {
    id: 4,
    image: '/ramkaa.png',
    title: 'Medium Spicy Spaghetti Italiano',
    category: 'LASAGNA',
    serving: 'Serves for 3 Person',
    price: '$9.45',
    icon: '/3.png',
  },
  {
    id: 5,
    image: '/ramkaa.png',
    title: 'Medium Spicy Spaghetti Italiano',
    category: 'LASAGNA',
    serving: 'Serves for 3 Person',
    price: '$9.45',
    icon: '/3.png',
  },
]

function CustomersLeftSideFirst() {
  return (
    <div className={Styles['border_huge']}>
      <div className={Styles['dfc']}>
        <div>
          <h1 className={Styles['ptop']}>Most Ordered Food</h1>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className={Styles['border']}>
          <p className={Styles['borderca']}>Monthly</p>
          <p className={Styles['mtop1']}>Weekly</p>
          <p className={Styles['mtop1']}>Daily</p>
        </div>
      </div>

      {foodData.map((food) => (
        <div key={food.id} className={Styles['nn']}>
          <Image src={food.image} width={90} height={90} alt={food.title} />
          <div>
            <h3>{food.title}</h3>
            <p className={Styles['blue']}>{food.category}</p>
            <p className={Styles['graytxt']}>{food.serving}</p>
          </div>
          <div className={Styles['dfg']}>
            <p>{food.price}</p>
            <Image src={food.icon} width={20} height={20} alt="icon" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CustomersLeftSideFirst
