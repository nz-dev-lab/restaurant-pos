import initDB from "~/IndexedDB";

// Insert menu items into IndexedDB
export const insertMenuItems = async (menuItems: any[]) => {
    const db = await initDB();
    const tx = db.transaction('menu_items', 'readwrite');
    const store = tx.objectStore('menu_items');
    menuItems.forEach((item) => {
      store.put(item);
    });
    await tx.done;
  };
  
  // Fetch all menu items from IndexedDB
  export const getMenuItems = async () => {
    const db = await initDB();
    const tx = db.transaction('menu_items', 'readonly');
    const store = tx.objectStore('menu_items');
    return await store.getAll(); // Fetch all items from the store
  };