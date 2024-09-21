import React from 'react';
import '../css/floor_css.css'; 

const Floor = () => {
  const floors = [
    { id: 'Tầng 1' },
    { id: 'Tầng 2' },
    { id: 'Tầng 3' },
    { id: 'Tầng 4' },
    { id: 'Tầng 5' },
    { id: 'Tầng 6' },
    { id: 'Tầng 7' },
    { id: 'Tầng 8' },
    { id: 'Tầng 9' }
  ];

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <button>Home</button>
        <button>Giới thiệu</button>
        <button>Quản lý tầng</button>
        <button>Thống kê</button>
      </nav>

      {/* Title Section */}
      <header className="title-section">
        <h1>Tòa Nhà A</h1>
      </header>

      {/* Grid of Floors */}
      <div className="floor-grid">
        {floors.map((floor) => (
          <div className="floor-card" key={floor.id}>
            <img src="https://example.com/floor-image.jpg" alt={floor.id} className="floor-image" />
            <div className="floor-id">{floor.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Floor;
