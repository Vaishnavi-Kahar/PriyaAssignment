// src/components/QRGenerator.js
import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

const QRGenerator = () => {
  const [component, setComponent] = useState('C1');
  const [dateReceived, setDateReceived] = useState('');
  const [itemsReceived, setItemsReceived] = useState(0);
  const [qrCode, setQrCode] = useState('');

  const handleGenerateQR = async () => {
    const item = {
      name: `Component ${component}`,
      dateReceived: new Date(dateReceived),
      balanceItems: itemsReceived,
      qrCode: `Component-${component}-${Date.now()}`
    };

    const response = await axios.post('http://localhost:3000/api/items', item, { withCredentials: true });
    setQrCode(response.data.qrCode);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <form>
        <label>
          Component:
          <select value={component} onChange={(e) => setComponent(e.target.value)}>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
            <option value="C4">C4</option>
            <option value="C5">C5</option>
          </select>
        </label>
        <label>
          Date Received:
          <input type="date" value={dateReceived} onChange={(e) => setDateReceived(e.target.value)} />
        </label>
        <label>
          Items Received:
          <input type="number" value={itemsReceived} onChange={(e) => setItemsReceived(e.target.value)} />
        </label>
        <button type="button" onClick={handleGenerateQR}>Generate QR</button>
      </form>
      {qrCode && <QRCode value={qrCode} />}
    </div>
  );
};

export default QRGenerator;
