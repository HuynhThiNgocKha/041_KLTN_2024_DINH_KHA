import React from 'react';
import '../css/apartment_css.css'; 
import img from '../img/img2.jpg';

const Apartments= () => { 
  const rooms = [
    { id: '001' },
    { id: '002' },
    { id: '003' },
    { id: '004' },
    { id: '005' },
    { id: '006' },
    { id: '007' },
    { id: '008' },
    { id: '009' }
  ];


  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <button >Home</button>
        <button>Giới thiệu</button>
        <button>Quản lý căn hộ</button>
        <button>Thống kê</button>
      </nav>

      {/* Title Section */}
      <header className="title-section">
        <h1>Tầng 1</h1>
      </header>

      {/* Grid of Rooms */}
      <div className="room-grid">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>           
            <img src="img" alt={`Room ${room.id}`} className="room-image" />
            <div className="room-id">{room.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apartments;
