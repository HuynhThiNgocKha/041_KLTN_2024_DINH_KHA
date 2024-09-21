import React from 'react';

const Home = () => {
  const floors = [
    { id: 'Image 1' },
    { id: 'Image 2' },
    { id: 'Image 3' }
  
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

export default Home;
