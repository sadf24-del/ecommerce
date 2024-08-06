import React from "react";
import PropTypes from "prop-types";
import { ChartTitle } from "../../Components/MiddleDataCards/MiddleDataCards";


const TableLayout = ({ rows = [], tableClass = '', tbodyClass = '', statusColors = {} }) => {

    const defaultStatusStyles = {
        delivered: { backgroundColor: 'rgb(1 181 116 / 30%)', color: 'rgb(1, 181, 116)' }, 
        cancelled: { backgroundColor: 'rgb(227 26 26 / 30%)', color: 'rgb(202 91 91)' }, 
      };
    
      
      const statusStyles = { ...defaultStatusStyles, ...statusColors };
  return (
    <div className="relative overflow-x-auto">
    <ChartTitle className='text-white'>Recent Orders</ChartTitle>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-4">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="py-3 text-white">
              Customer
            </th>
            <th scope="col" className="px-6 py-3 text-white">
              Order No.
            </th>
            <th scope="col" className="px-6 py-3 text-white">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 text-white">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto max-h-[400px]">
          {rows.map((row, index) => (
            <tr key={index} className={`px-6 py-4 ${index < rows.length - 1 ? 'border-b border-gray-500' : ''}`}>
              <th
                scope="row"
                className="py-4 font-medium text-white whitespace-nowrap flex items-center"
              >
                <img 
                  src={row.image} 
                  style={{ width: '32px', height: '32px' }} 
                  alt="Profile Icon" 
                />
                <span className="ml-2 text-white font-semibold">{row.customer}</span>
              </th>
              <td className="px-6 py-4 text-white">{row.orderNo}</td>
              <td className="px-6 py-4 text-white">{row.amount}</td>
              <td className="px-6 py-4 text-white">  
                <span 
                    className="inline-block px-3 py-1 text-xs font-medium leading-tight rounded-full"
                    style={statusStyles[row.status.toLowerCase()] || { backgroundColor: '#6B7280', color: 'white' }} 
                    >
                    {row.status}
                    </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableLayout.propTypes = {
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        customer: PropTypes.string.isRequired,
        orderNo: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
    tableClass: PropTypes.string,
    tbodyClass: PropTypes.string,
    statusColors: PropTypes.object, 
  };
  

export default TableLayout;
