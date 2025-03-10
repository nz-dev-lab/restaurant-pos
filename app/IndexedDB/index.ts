import { openDB } from 'idb'; // Import the idb library

// Initialize the IndexedDB
const initDB = async () => {
  // Open or create the database named 'menuDB' (version 1)
  const db = await openDB('menuDB', 1, {
    upgrade(db) {
      // Create the 'menu_items' object store (table) with 'id' as the primary key
      db.createObjectStore('menu_items', { keyPath: 'id' });
    },
  });
  return db;
};

export default initDB;