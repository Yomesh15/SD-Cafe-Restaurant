import React from "react";

// Sample food items
const foodItems = [
  { name: "Burger", rating: 4.5, available: true, category: "Veg", best: true, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Sandwich", rating: 4.2, available: true, category: "Veg", best: false, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Coffee", rating: 4.8, available: true, category: "Veg", best: true, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Maggie", rating: 4.0, available: true, category: "Veg", best: false, image: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Patties", rating: 4.3, available: true, category: "Veg", best: false, image: "https://tse2.mm.bing.net/th/id/OIP.LDR_Bk6m9f8DIs_uhoFCVwHaJQ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Pizza", rating: 4.7, available: true, category: "Veg", best: true, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const FoodCards = () => {
  return (
    <section className="food-cards" id="menu">
      <h2>Our Popular Foods</h2>
      <div className="cards-container">
        {foodItems.map((item, index) => (
          <div className={`food-card ${item.best ? "best" : ""}`} key={index}>
            {item.best && <span className="best-badge">Best Seller</span>}
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="rating">⭐ {item.rating}</p>
            <p className={`availability ${item.available ? "available" : "unavailable"}`}>
              {item.available ? "Available" : "Out of Stock"}
            </p>
            <p className={`category ${item.category === "Veg" ? "veg" : "non-veg"}`}>
              {item.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCards;
