import React, { useState } from "react";
import "./App.css";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = (event) => {
    if (isSidebarVisible && !event.target.closest(".sidebar")) {
      setSidebarVisible(false);
    }
  };

  return (
    <>
    <div className="main" onClick={closeSidebar}>
      <button onClick={toggleSidebar} className="toggle-btn">
        Toggle Sidebar
      </button>
      <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`}> 
        Hello Ahishek      
      </div>
    </div></>
  );
}

export default App;
