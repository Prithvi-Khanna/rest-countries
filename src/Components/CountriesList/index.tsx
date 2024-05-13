import React, { useState, useEffect } from 'react';
import { FixedSizeGrid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const CountriesList: React.FC<{ data: string[] }> = ({ data }) => {
  const [columnCount, setColumnCount] = useState(4);

  useEffect(() => {
    function updateColumnCount() {
      const screenWidth = window.innerWidth;
      // Calculate column count based on screen width
      if (screenWidth >= 1280) {
        setColumnCount(4);
      } else if (screenWidth >= 1024) {
        setColumnCount(3);
      } else if (screenWidth >= 768) {
        setColumnCount(2);
      } else {
        setColumnCount(1);
      }
    }

    // Update column count on window resize
    window.addEventListener('resize', updateColumnCount);
    updateColumnCount(); // Initial calculation
    return () => {
      window.removeEventListener('resize', updateColumnCount);
    };
  }, []);

  const rowCount = Math.ceil(data.length / columnCount);

  const cellRenderer = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex;
    return (
      <div style={style} className="m-10 flex justify-center items-center border border-gray-200">
        {data[index]?.name.common}
      </div>
    );
  };

  return (
    <div className="w-full h-full px-4 bg-red-800">
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeGrid
            columnCount={columnCount}
            columnWidth={400} // Set your column width
            height={height}
            rowCount={rowCount}
            rowHeight={350} // Set your row height
            width={width}
            innerElementType="div"
          >
            {cellRenderer}
          </FixedSizeGrid>
        )}
      </AutoSizer>
    </div>
  );
};

export default CountriesList;
