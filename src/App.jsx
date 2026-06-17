// src/App.jsx
import React, { useState, useMemo } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import SearchBar from "./components/SearchBar";
import MenuSection from "./components/MenuSection";
import QRPage from "./components/QRPage";
import { menuItems, restaurant } from "./data/menuData";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return menuItems;
    const q = search.toLowerCase();
    return menuItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [search]);

  // Show QR generator at /qr (after all hooks)
  const isQRPage = window.location.pathname === "/qr";

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSearch("");
  };

  if (isQRPage) return <QRPage />;

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", minHeight: "100vh" }}>
      <Header />
      <SearchBar value={search} onChange={setSearch} />
      {!search && (
        <CategoryTabs active={activeCategory} onChange={handleCategoryChange} />
      )}
      <main>
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 1.25rem",
              color: "#78716c",
            }}
          >
            <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🍽</p>
            <p>No dishes found for "{search}"</p>
          </div>
        ) : (
          <MenuSection
            items={filtered}
            activeCategory={search ? "all" : activeCategory}
            currency={restaurant.currency}
          />
        )}
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "1.5rem",
          fontSize: "0.78rem",
          color: "#a8a29e",
          borderTop: "1px solid #e8e3db",
        }}
      >
        © {new Date().getFullYear()} {restaurant.name} · All prices inclusive of taxes
      </footer>
    </div>
  );
}