import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

function DataProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [archive, setArchive] = useState([]);
  const [deleted, setDelete] = useState([]);

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archive,
        setArchive,
        deleted,
        setDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
