import React, { useState } from "react";

const menuItems = [
  // ⬅️ YOUR SAME ITEMS (unchanged)
  {
    name: "Pizza",
    image: "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: true,
  },
  {
    name: "Cold Coffee",
    image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
    available: true,
    best: false,
  },
  {
    name: "Hot Coffee",
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: true,
  },
  {
    name: "Burger",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    available: true,
    best: true,
  },
  {
    name: "Grilled Sandwich",
    image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: false,
  },
  {
    name: "Maggie",
    image: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: false,
  },
  {
    name: "French Fries",
    image: "https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: false,
  },
  {
    name: "Soft Drinks",
    image: "https://images.unsplash.com/photo-1533007716222-4b465613a984?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: false,
  },
  {
    name: "Samosa",
    image: "https://plus.unsplash.com/premium_photo-1695297516676-04a259917c03?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: false,
  },
  {
    name: "Juices",
    image: "https://plus.unsplash.com/premium_photo-1661427472129-5bc76fe47edf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: false,
  },
  {
    name: "White Sauce Pasta",
    image: "https://images.unsplash.com/photo-1570549986390-6bd150ac3515?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: true,
  },
  {
    name: "Red Sauce Pasta",
    image: "https://images.unsplash.com/photo-1630409352591-abc3cb4635de?q=80&w=1246&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: true,
  },
  {
    name: "Chowmein (Noodles)",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f",
    available: true,
    best: false,
  },
  {
    name: "Chilli Potato",
    image: "https://media.istockphoto.com/id/1155838470/photo/sticky-honey-chilli-potatoes-in-a-spicy-sauce-sesame-seeds-and-green-onions-close-up-on-a.jpg?s=2048x2048&w=is&k=20&c=by17H3lC4pEAfk-oCXjJAgFs_o_lZrvFzx0tYhV9qCk=",
    available: true,
    best: true,
  },
  {
    name: "Cheese Burst",
    image: "https://images.unsplash.com/photo-1707339088654-117df66bd55c?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: true,
    best: false,
  },
  {
    name: "Paneer Mayo Roll",
    image: "https://media.istockphoto.com/id/1352474720/photo/fresh-paneer-roll-with-fresh-tomatos-salad-cheese-and-onions-isolated-on-bright-blue.jpg?s=2048x2048&w=is&k=20&c=dzXc1mMmULJUeIxmwP4nUczH-hQDfSUT17b5heLMsfo=",
    available: true,
    best: true,
  },
  {
    name: "Chikki",
    image: "https://media.istockphoto.com/id/1363840133/photo/indian-sweet-dried-fruit-chikki.jpg?s=2048x2048&w=is&k=20&c=uBt5iUABTEbzY9lKTqylrg94LdLQRbrxnJ_mHMHmf3o=",
    available: true,
    best: true,
  },
  {
    name: "Prediator Drink",
    image: "https://i.pinimg.com/474x/48/95/98/48959879d762cc151517f0f6eb20aa79.jpg",
    available: true,
    best: true,
  },
];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="menu-section">
      <h2 className="menu-title">Our Menu</h2>

      {/* 🔍 Search Input */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <div className="image-wrapper">
                {item.best && <span className="best-badge">BEST</span>}
                <img src={item.image} alt={item.name} />
              </div>

              <div className="menu-info">
                <h3>{item.name}</h3>
                <p className="status available">Available</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-result">No items found 😕</p>
        )}
      </div>
    </section>
  );
};

export default Menu;
