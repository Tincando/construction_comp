import React from 'react';

const StaticMap = ({ latitude = 43.70799286674113, longitude = -79.4476538, zoom = 13 }) => {
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=${zoom}&size=650,450&l=map&pt=${longitude},${latitude},pm2rdm`;

  return (
    <img
      src={mapUrl}
      alt="Static map showing location"
      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
    />
  );
};

export default StaticMap;
