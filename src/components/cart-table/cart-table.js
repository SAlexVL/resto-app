import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCart} from '../../actions';

const CartTable = ({items, deleteFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, amount} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-amount">x&nbsp;{amount}&nbsp;&nbsp;шт.</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => buyItems(items)} className="cart__buyallitems">Оформить заказ</button>
        </>
    );
};

const buyItems = async (items) => {
    await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    });
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);