// src/components/QRScanner.js
import React, { useState } from 'react';
import axios from 'axios';
import { QrReader } from 'react-qr-reader';


const QRScanner = () => {
  const [scannedData, setScannedData] = useState('');

  const handleScan = async (data) => {
    if (data) {
      const response = await axios.get(`http://localhost:3000/api/items/${data}`, { withCredentials: true });
      const item = response.data;
      if (item) {
        item.balanceItems -= 1;
        await axios.put(`http://localhost:3000/api/items/${item._id}`, item, { withCredentials: true });
        setScannedData(`Scanned: ${item.name} - ${item.balanceItems} items left`);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrReader delay={300} onError={handleError} onScan={handleScan} />
      <p>{scannedData}</p>
    </div>
  );
};

export default QRScanner;
