// MenuDisplay.jsx

import React, { useState } from 'react';
import './MenuDisplay.css';

const images = {
  chickenBucket: 'https://www.yellow.ug/img/ug/n/1602349003-35-kfc-kabalagala.jpg',
  biscuits: 'https://i.ytimg.com/vi/Pyi1IXwNMrc/maxresdefault.jpg',
  mashedPotatoes: 'https://media.istockphoto.com/id/140442599/photo/fried-chicken-dinner.jpg?s=612x612&w=0&k=20&c=kxx6iprKNCOlDbE2mqsF7ng9z7pMRi8wYon8TLHAxyc=',
  coleslaw: 'https://emirates-restaurants.com/wp-content/uploads/86_Kfc_Small_coleslaw.jpg',
  soda: 'https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/x25z3apuzgelqxblafc0',
  iceCream: 'https://pbs.twimg.com/media/ERxGvE_W4AAabB_.jpg',
  chickenGrilled: 'https://i.ytimg.com/vi/JpZr251lNL8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZncMNcsH1bigKTNeERi3EURlmHw',
  chickenWrap: 'https://assets.change.org/photos/2/zo/po/KazoPoranuNrDDA-400x400-noPad.jpg?1556911413',
  chickenSalad: 'https://www.kfc.co.at/img/asset/YXNzZXRzL3Byb2R1Y3RzL1NhbGFkLUJvd2wucG5n?fm=png&w=1000&h=1000&s=6bd8e34292ded6c599046bdd598c773e',
  chocolateCake: 'https://www.foodstoragemoms.com/wp-content/uploads/2016/12/Best-Chocolate-Cake-Ever-14.jpeg',
  strawberryCheesecake: 'https://media.barakatfresh.ae/media/catalog/product/cache/991eeaa3837399618b43d1cd04e346f4/s/t/strawberry_cheesecake_1.jpg',
  tiramisu: 'https://pbs.twimg.com/media/CWLzgKuWcAAVcQk?format=jpg&name=4096x4096',
  mangoSmoothie: 'https://pbs.twimg.com/media/Fo5-sbqWcAEeuVt.jpg',
  icedCoffee: 'https://images.yummy.ph/yummy/uploads/2020/06/kfc-philippines-iced-coffee-2.jpg',
  lemonade: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqvO9NCWiRsTr_AQxd5DpI4p9sSbfqAJx983874-DRypwlbReXG3eKJbytmStxCOplQo&usqp=CAU',
};

function MenuDisplay() {
  const [orders, setOrders] = useState([]);

  const menuItems = [
    // Chicken Dishes
    { id: 1, name: 'Chicken Bucket', description: 'A bucket of our famous fried chicken.', image: images.chickenBucket, price: 19.99 },
    { id: 2, name: 'Grilled Chicken', description: 'Juicy grilled chicken for a healthier option.', image: images.chickenGrilled, price: 15.99 },
    { id: 3, name: 'Chicken Wrap', description: 'Delicious chicken wrap with fresh veggies.', image: images.chickenWrap, price: 12.99 },
    { id: 4, name: 'Chicken Salad', description: 'Fresh salad with tender chicken pieces.', image: images.chickenSalad, price: 14.99 },
    { id: 5, name: 'Coleslaw', description: 'Fresh and crunchy coleslaw with our special dressing.', image: images.coleslaw, price: 3.49 },
    { id: 6, name: 'Mashed Potatoes', description: 'Creamy mashed potatoes made with real butter and milk.', image: images.mashedPotatoes, price: 2.99 },

    // Desserts
    { id: 7, name: 'Chocolate Cake', description: 'Decadent chocolate cake for chocolate lovers.', image: images.chocolateCake, price: 8.99 },
    { id: 8, name: 'Strawberry Cheesecake', description: 'Creamy cheesecake with fresh strawberries.', image: images.strawberryCheesecake, price: 10.99 },
    { id: 9, name: 'Tiramisu', description: 'Classic Italian tiramisu with coffee flavor.', image: images.tiramisu, price: 9.99 },
    { id: 10, name: 'Ice Cream', description: 'Vanilla ice cream topped with your choice of syrup.', image: images.iceCream, price: 6.99 },
    { id: 11, name: 'Mango Smoothie', description: 'Refreshing mango smoothie for a tropical treat.', image: images.mangoSmoothie, price: 5.99 },

    // Drinks
    { id: 12, name: 'Iced Coffee', description: 'Chilled coffee to keep you refreshed.', image: images.icedCoffee, price: 4.99 },
    { id: 13, name: 'Lemonade', description: 'Homemade lemonade for a zesty flavor.', image: images.lemonade, price: 3.99 },
    { id: 14, name: 'Soda', description: 'Choose from a variety of refreshing sodas.', image: images.soda, price: 1.99 },
    { id: 15, name: 'Iced Tea', description: 'Cool and soothing iced tea for tea enthusiasts.', image: images.icedTea, price: 2.49 },
  ];

  const addOrder = (menuItem) => {
    setOrders((prevOrders) => [...prevOrders, menuItem]);
  };

  const calculateTotal = () => {
    return orders.reduce((total, order) => total + order.price, 0);
  };

  return (
    <div className="menu-display">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="menu-item">
            <img src={menuItem.image} alt={menuItem.name} />
            <h3>{menuItem.name}</h3>
            <p>{menuItem.description}</p>
            <p>Shs {menuItem.price.toFixed(2)}</p>
            <button onClick={() => addOrder(menuItem)}>Add to Order</button>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>Cart</h3>
        {orders.length > 0 ? (
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                {order.name} - Shs{order.price.toFixed(2)}
              </li>
            ))}
            <li className="total">Total: Shs{calculateTotal().toFixed(2)}</li>
          </ul>
        ) : (
          <p>No items in your order</p>
        )}
      </div>
    </div>
  );
}

export default MenuDisplay;
