import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        height: "80px", // Flatter header is more modern than 20vh
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)", // Subtle gradient
        padding: "0 40px", // More generous padding
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Softer shadow
        position: "sticky", // Sticky header is common in modern UIs
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          fontSize: "1.5rem", // Clean, readable size
          fontWeight: 600, // Semi-bold for modern look
          color: "#ffffff",
          letterSpacing: "0.5px",
          textTransform: "uppercase", // Modern touch
          fontFamily: "'Inter', sans-serif", // Modern font (assumes import)
        }}
      >
        Library Management
      </div>
      <nav
        style={{
          display: "flex",
          gap: "30px", // More breathing room
        }}
      >
        <Link
          to="/"
          style={{
            color: "#e6f1ff", // Softer white for contrast
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 500,
            padding: "8px 16px", // Larger clickable area
            borderRadius: "8px", // Softer corners
            transition: "all 0.3s ease", // Smooth transitions
            backgroundColor: "transparent",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; // Subtle hover
            e.target.style.color = "#ffffff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#e6f1ff";
          }}
        >
          Home
        </Link>
        <Link
          to="/create"
          style={{
            color: "#e6f1ff",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 500,
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            backgroundColor: "transparent",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            e.target.style.color = "#ffffff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#e6f1ff";
          }}
        >
          Create
        </Link>
        <Link
          to="/update"
          style={{
            color: "#e6f1ff",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 500,
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            backgroundColor: "transparent",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            e.target.style.color = "#ffffff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#e6f1ff";
          }}
        >
          Update
        </Link>
      </nav>
    </div>
  );
};

export default Header;