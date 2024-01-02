import React from 'react';
import tableSlice from './tableSlice';

import { useSelector, useDispatch } from 'react-redux';
import { useGetTableQuery } from './api'; // Replace with your API file
import { setData, toggleDetails } from './tableSlice';
import {
  StyledTable,
  StyledHeaderRow,
  StyledCell,
  StyledHeaderCell,
} from './TableStyle';

const columns = [
  'nordwest1',
  'carnot1',
  'carnot2',
  'fichte1',
  'fichte2',
  'sued1',
  'mmks1',
  'nord1',
];

const detailsMap = {
  nordwest1: ['Cluster', 'Kundenanzahl'],
  carnot1: ['Cluster', 'Kundenanzahl'],
  carnot2: ['Cluster', 'Kundenanzahl'],
  fichte1: ['Cluster', 'Kundenanzahl'],
  fichte2: ['Cluster', 'Kundenanzahl'],
  sued1: ['Cluster', 'Kundenanzahl'],
  mmks1: ['Cluster', 'Kundenanzahl'],
  nord1: ['Cluster', 'Kundenanzahl'],
};
const Table = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.table.data);
  const showDetails = useSelector((state) => state.table.showDetails);

  const { data: backendData = [], error } = useGetTableQuery();

  React.useEffect(() => {
    if (!error) {
      dispatch(setData(backendData));
    }
  }, [dispatch, backendData, error]);

  const handleToggleDetails = (column) => {
    dispatch(toggleDetails({ column }));
  };

  return (
    <StyledTable>
      <thead>
        <StyledHeaderRow>
          <StyledHeaderCell>Gerät</StyledHeaderCell>
          {columns.map((column) => (
            <React.Fragment key={column}>
              <StyledHeaderCell onClick={() => handleToggleDetails(column)}>
                {column}
              </StyledHeaderCell>
              {showDetails[column] &&
                detailsMap[column].map((detail, index) => (
                  <StyledHeaderCell key={index}>{detail}</StyledHeaderCell>
                ))}
            </React.Fragment>
          ))}
        </StyledHeaderRow>
      </thead>
      <tbody>
        {/* Überprüfe, ob Daten vorhanden sind oder ob ein Fehler vorliegt */}
        {error ? (
          <tr>
            <StyledCell colSpan={columns.length + 1}>
              Error loading data. Please try again.
            </StyledCell>
          </tr>
        ) : (
          tableData.length === 0 && (
            <tr>
              <StyledCell colSpan={columns.length + 1}>No data available</StyledCell>
            </tr>
          )
        )}

        {/* Wenn Daten vorhanden sind, zeige die Tabellenzeilen */}
        {tableData.map((row, index) => (
          <tr key={index}>
            <StyledCell>{row.device}</StyledCell>
            {columns.map((column) => (
              <React.Fragment key={column}>
                <StyledCell>{row[column]}</StyledCell>
                {showDetails[column] &&
                  detailsMap[column].map((detail, index) =>(
                    <StyledCell key={index}>{row[detail.toLowerCase()]}</StyledCell>
                  ))}
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;