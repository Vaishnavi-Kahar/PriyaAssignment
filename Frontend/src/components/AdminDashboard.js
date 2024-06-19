// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:3000/api/items', { withCredentials: true });
    setItems(response.data);
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
  };

  const handleSave = async () => {
    await axios.put(`http://localhost:3000/api/items/${currentItem._id}`, currentItem, { withCredentials: true });
    setIsEditing(false);
    fetchItems();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/items/${id}`, { withCredentials: true });
    fetchItems();
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Name</th>
            <th>Part Number</th>
            <th>Date Received</th>
            <th>Date Dispatch</th>
            <th>Balance Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.partNumber}</td>
              <td>{new Date(item.dateReceived).toLocaleDateString()}</td>
              <td>{item.dateDispatch ? new Date(item.dateDispatch).toLocaleDateString() : 'N/A'}</td>
              <td>{item.balanceItems}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <div>
          <h2>Edit Item</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                value={currentItem.name}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
              />
            </label>
            <label>
              Part Number:
              <input
                type="text"
                value={currentItem.partNumber}
                onChange={(e) => setCurrentItem({ ...currentItem, partNumber: e.target.value })}
              />
            </label>
            <label>
              Date Received:
              <input
                type="date"
                value={new Date(currentItem.dateReceived).toISOString().substr(0, 10)}
                onChange={(e) => setCurrentItem({ ...currentItem, dateReceived: new Date(e.target.value) })}
              />
            </label>
            <label>
              Balance Items:
              <input
                type="number"
                value={currentItem.balanceItems}
                onChange={(e) => setCurrentItem({ ...currentItem, balanceItems: e.target.value })}
              />
            </label>
            <button type="button" onClick={handleSave}>Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
