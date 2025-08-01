import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { comprehensiveSalesData, months, filterOptions } from '../data/salesData';
import './SalesReport.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesReport: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Comida');
  const [selectedProduct, setSelectedProduct] = useState('Fruta');
  const [selectedBrand, setSelectedBrand] = useState('Frutas3');

  // Get the sales data based on current filter selections
  const currentSalesData = useMemo(() => {
    
      const salesValues = comprehensiveSalesData[selectedCategory]?.[selectedProduct]?.[selectedBrand];
      if (salesValues) {
        return months.map((month, index) => ({
          month,
          sales: salesValues[index]
        }));
      }
      // Fallback to default data if combination doesn't exist
      return months.map((month, index) => ({
        month,
        sales: [150, 480, 320, 280][index]
      }));
  }, [selectedCategory, selectedProduct, selectedBrand]);

  const chartData = {
    labels: currentSalesData.map(item => item.month),
    datasets: [
      {
        label: 'Ventas',
        data: currentSalesData.map(item => item.sales),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as any,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Vendas',
        },
        max: 700,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Meses',
        },
      },
    },
  };

  return (
    <div className="sales-report">
      {/* Header */}
      <div className="header">
        <div className="header-left">Menu</div>
        <div className="header-center">
          <span>User Name</span>
          <div className="status-indicator"></div>
        </div>
        <div className="header-right">Sales Report</div>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <label>Categoria:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {filterOptions.categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Produto:</label>
          <select 
            value={selectedProduct} 
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            {filterOptions.products.map(product => (
              <option key={product} value={product}>{product}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Marca:</label>
          <select 
            value={selectedBrand} 
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {filterOptions.brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default SalesReport; 