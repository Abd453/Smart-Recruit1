import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Jobstable() {
  const [jobs, setJobs] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const navigate = useNavigate();

  const fetchJobs = () => {
    axios
      .get('http://localhost:8001/jobs')
      .then((res) => {
        setJobs(res.data || []);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  };

  const handleAccept = (jobId) => {
    updateJobStatus(jobId, 'Accepted');
  };

  const handleReject = (jobId) => {
    updateJobStatus(jobId, 'Rejected');
  };

  const updateJobStatus = (jobId, status) => {
    axios
      .patch(`http://localhost:8001/jobs/${jobId}`, { status })
      .then((res) => {
        console.log(`Job ${jobId} updated to ${status}`);
        fetchJobs(); // Refresh the job list after updating
      })
      .catch((error) => {
        console.error('There was an error updating the job status!', error);
      });
  };

  const columns = [
    { name: 'id', label: 'S.NO' },
    { name: 'title', label: 'Title' },
    { name: 'time', label: 'Time' },
    { name: 'location', label: 'Location' },
    { name: 'pertemp', label: 'Type' },
    { name: 'money', label: 'Salary' },
    { name: 'status', label: 'Status' },
    {
      name: 'description',
      label: 'Description',
      options: {
        customBodyRender: (value) => {
          return (
            <a href={value} target="_blank" rel="noopener noreferrer">
              show more....
            </a>
          );
        },
      },
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        customBodyRender: (value, tableMeta) => {
          const jobId = tableMeta.rowData[0];
          return (
            <div className="flex space-x-2">
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition duration-300 ease-in-out"
                onClick={() => handleAccept(jobId)}
                disabled={value === 'Accepted'}
              >
                Accept
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-300 ease-in-out"
                onClick={() => handleReject(jobId)}
                disabled={value === 'Rejected'}
              >
                Reject
              </button>
            </div>
          );
        },
      },
    },
  ];

  useEffect(() => {
    fetchJobs();
  }, []);

  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
    responsive: 'standard', // Adjust for responsiveness
    onFilterChange: (changedColumn, filterList) => {
      const statusFilter = filterList[6]; // Assuming Status is the 7th column
      if (statusFilter.length > 0) {
        setFilterStatus(statusFilter[0]);
      } else {
        setFilterStatus('All');
      }
    },
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: 'Poppins',
      },
      palette: {
        background: {
          paper: '#ffffff', // White background for the table
          default: '#f8fafc', // Light background for the page
        },
        primary: {
          main: '#22c55e', // Green primary color for buttons
        },
        text: {
          primary: '#1e293b', // Black text color for table content
        },
        mode: 'light', // Ensure it's in light mode
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: '10px 4px',
              color: '#334155', // Darker color for table headers
            },
            body: {
              padding: '7px 15px',
              color: '#1e293b', // Black text for table body
            },
          },
        },
      },
    });

  return (
    <div className="relative bg-gray-100 py-10 min-h-screen grid place-items-center px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Background Button */}
      <button
        className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white px-4 py-2 rounded-full opacity-30 hover:opacity-70 transition-opacity duration-300"
        onClick={() => navigate('/managerhome')}
      >
        Return to Home
      </button>

      {/* Existing Jobstable Code */}
      <div className="w-full overflow-x-auto max-w-4xl">
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={'Jobs List'}
            data={jobs}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}
