import React from 'react'
import s from './item.module.scss'
// import images from '../../../images/kitchen.webp'

const Item = ({ obj, setModalActive, setItemCardModalActive, setShowItemModal }: any) => {

  return (
    <>
      <div className={s.card}>
        <div className={s.imgWrap}>
          <img src={''} alt="picture" />
        </div>
        <div className={s.contentWrap}>
          <h3 className={s.title}>{obj.name}</h3>
          <p className={s.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p>Цена: <span className={s.price}>{obj.price}</span></p>
          <div className={s.toggleWrap}>
            <p className={s.toggleInfo} onClick={() => {
              setItemCardModalActive(true)
              setShowItemModal(obj)
            }}>Подробнее..</p>
            <button className={s.toggleBuy} onClick={() => setModalActive(true)}>Заказать</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item