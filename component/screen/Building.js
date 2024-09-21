import React from 'react';
import '../css/building_css.css'; 

function Building() {
  const buildings = [
    { id: 'Tòa Nhà A' },
    { id: 'Tòa Nhà B' },
    { id: 'Tòa Nhà C' }
  ];

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <button>Home</button>
        <button>Giới thiệu</button>
        <button>Quản lý tòa nhà</button>
        <button>Thống kê</button>
      </nav>

      {/* Title Section */}
      <header className="title-section">
        <h1>Building</h1>
      </header>

      {/* Grid of Buildings */}
      <div className="building-grid">
        {buildings.map((building) => (
          <div className="building-card" key={building.id}>
            <img src="https://example.com/building.jpg" alt={building.id} className="building-image" />
            <div className="building-id">{building.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Building;
