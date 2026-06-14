// src/components/MenuCard.jsx
import React from "react";

export default function MenuCard({ item, currency }) {
  return (
    <article
      style={{
        background: "#ffffff",
        border: "1px solid #e8e3db",
        borderRadius: 10,
        padding: "1rem 1.1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "1rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        position: "relative",
      }}
    >
      {/* Veg / Non-veg indicator */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1.1rem",
          width: 14,
          height: 14,
          border: `2px solid ${item.veg ? "#16a34a" : "#dc2626"}`,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
        title={item.veg ? "Vegetarian" : "Non-vegetarian"}
        aria-label={item.veg ? "Vegetarian" : "Non-vegetarian"}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: item.veg ? "#16a34a" : "#dc2626",
          }}
        />
      </div>

      <div style={{ flex: 1, paddingRight: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#1c1917",
            }}
          >
            {item.name}
          </h3>
          {item.popular && (
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                background: "#fdf0e8",
                color: "#b85c2a",
                padding: "2px 7px",
                borderRadius: 999,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              Popular
            </span>
          )}
        </div>
        <p style={{ fontSize: "0.83rem", color: "#78716c", lineHeight: 1.5 }}>
          {item.description}
        </p>
      </div>

      <div
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "#1c1917",
          whiteSpace: "nowrap",
          paddingTop: "0.1rem",
        }}
      >
        {currency}{item.price}
      </div>
    </article>
  );
}
