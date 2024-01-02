//import React from 'react';
//import tableSlice from './tableSlice';
//
//import { useSelector, useDispatch } from 'react-redux';
//import { useGetTableQuery } from './api'; // Replace with your API file
//import { setData, toggleDetails } from './tableSlice';
//import {
//  StyledTable,
//  StyledHeaderRow,
//  StyledCell,
//  StyledHeaderCell,
//} from './TableStyle';
//
//const columns = [
//  'nordwest1',
//  'carnot1',
//  'carnot2',
//  'fichte1',
//  'fichte2',
//  'sued1',
//  'mmks1',
//  'nord1',
//];
//
//const detailsMap = {
//  nordwest1: ['Cluster', 'customers'],
//  carnot1: ['Cluster', 'customers'],
//  carnot2: ['Cluster', 'customers'],
//  fichte1: ['Cluster', 'customers'],
//  fichte2: ['Cluster', 'customers'],
//  sued1: ['Cluster', 'customers'],
//  mmks1: ['Cluster', 'customers'],
//  nord1: ['Cluster', 'customers'],
//};
//const Table = () => {
//  const dispatch = useDispatch();
//  const tableData = useSelector((state) => state.table.data);
//  const showDetails = useSelector((state) => state.table.showDetails);
//
//  const { data: backendData = [], error } = useGetTableQuery();
//
//  React.useEffect(() => {
//    if (!error) {
//      dispatch(setData(backendData));
//    }
//  }, [dispatch, backendData, error]);
//
//  const handleToggleDetails = (column) => {
//    dispatch(toggleDetails({ column }));
//  };
//
//  if (error) {
//    return <div>Error loading data</div>;
//  }
//
//  return (
//    <StyledTable>
//      <thead>
//        <StyledHeaderRow>
//          <StyledHeaderCell>Gerät</StyledHeaderCell>
//          {columns.map((column) => (
//            <React.Fragment key={column}>
//              <StyledHeaderCell onClick={() => handleToggleDetails(column)}>
//                {column}
//              </StyledHeaderCell>
//              {showDetails[column] &&
//                detailsMap[column].map((detail, index) => (
//                  <StyledHeaderCell key={index}>{detail}</StyledHeaderCell>
//                ))}
//            </React.Fragment>
//          ))}
//        </StyledHeaderRow>
//      </thead>
//      <tbody>
//        {tableData.map((row, index) => (
//          <tr key={index}>
//            <StyledCell>{row.device}</StyledCell>
//            {columns.map((column) => (
//              <React.Fragment key={column}>
//                <StyledCell>{row[column]}</StyledCell>
//                {showDetails[column] &&
//                  detailsMap[column].map((detail, index) => (
//                    <StyledCell key={index}>{row[detail.toLowerCase()]}</StyledCell>
//                  ))}
//              </React.Fragment>
//            ))}
//          </tr>
//        ))}
//      </tbody>
//    </StyledTable>
//  );
//};
//
//export default Table;
