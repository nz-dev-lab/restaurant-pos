import React, { useState } from "react";

const DineInDetails: React.FC<{ onTableSelect: (table: number) => void; selectedTable: number | null }> = ({
    onTableSelect,
    selectedTable,
}) => {
    const [isTableModalOpen, setIsTableModalOpen] = useState(false);

    return (
        <>
            <button
                className="bg-blue-600 text-white w-[50%] px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setIsTableModalOpen(true)}
            >
                {selectedTable ? `Table ${selectedTable}` : "Select Table"}
            </button>

            {isTableModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-bold mb-3">Select Table</h2>
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((table) => (
                                <button
                                    key={table}
                                    className={`p-2 rounded ${selectedTable === table ? "bg-green-600 text-white" : "bg-gray-200"}`}
                                    onClick={() => {
                                        onTableSelect(table);
                                        setIsTableModalOpen(false);
                                    }}
                                >
                                    {table}
                                </button>
                            ))}
                        </div>
                        <button
                            className="mt-3 w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
                            onClick={() => setIsTableModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default DineInDetails;
