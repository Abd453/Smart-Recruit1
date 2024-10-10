import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';

const ApprovedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Fetch jobs from the backend
  const fetchJobs = () => {
    axios
      .get('http://localhost:8001/jobs') // Fetching from /jobs endpoint
      .then((res) => {
        const acceptedJobs = res.data.filter(
          (job) => job.status === 'Accepted'
        );
        setJobs(acceptedJobs);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  };

  // Handle accepting a job
  const handleAccept = (job) => {
    const updatedJob = { ...job, status: 'Accepted' };

    axios
      .post('https://localhost:8002', updatedJob) // Posting to /fromdb endpoint
      .then((res) => {
        setJobs((prevJobs) =>
          prevJobs.map((j) => (j.id === job.id ? updatedJob : j))
        );
        console.log(`Job with id ${job.id} accepted successfully`);
      })
      .catch((error) => {
        console.error('There was an error accepting the job!', error);
      });
  };

  // Handle deleting a job
  const handleDelete = (jobId) => {
    axios
      .delete(`https://localhost:8001/jobs/${jobId}`) // Deleting from /jobs endpoint
      .then(() => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
        console.log(`Job with id ${jobId} deleted successfully`);
      })
      .catch((error) => {
        console.error('There was an error deleting the job!', error);
      });
  };

  // Toggle description visibility
  const toggleDescription = (jobId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const columns = [
    { name: 'id', label: 'Job ID' },
    { name: 'title', label: 'Title' },
    { name: 'location', label: 'Location' },
    { name: 'pertemp', label: 'Type' },
    { name: 'money', label: 'Salary' },
    { name: 'time', label: 'Time' },
    {
      name: 'description',
      label: 'Description',
      options: {
        customBodyRender: (value, tableMeta) => {
          const jobId = tableMeta.rowData[0];
          const isExpanded = expandedDescriptions[jobId];
          const shortDescription = value.substring(0, 20);
          return (
            <div>
              {isExpanded ? value : `${shortDescription}...`}
              <Button
                variant="text"
                color="primary"
                onClick={() => toggleDescription(jobId)}
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </Button>
            </div>
          );
        },
      },
    },
    { name: 'status', label: 'Status' },
    {
      name: 'actions',
      label: 'Actions',
      options: {
        customBodyRender: (value, tableMeta) => {
          const jobId = tableMeta.rowData[0];
          const job = jobs.find((job) => job.id === jobId);
          return (
            <div className="flex space-x-2">
              <Button
                variant="contained"
                color="success"
                onClick={() => handleAccept(job)}
              >
                Accept
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(jobId)}
              >
                Delete
              </Button>
            </div>
          );
        },
      },
    },
  ];

  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
    responsive: 'standard',
    tableBodyHeight: '400px', // Set a fixed height
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: 'Poppins',
      },
      palette: {
        background: {
          paper: '#1e293b',
          default: '#0f172a',
        },
        mode: 'dark',
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: '10px 4px',
            },
            body: {
              padding: '7px 15px',
              color: '#e2e8f0',
            },
          },
        },
      },
    });

  return (
    <motion.div
      className="bg-slate-700 flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-full overflow-x-auto overflow-y-auto max-w-4xl">
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={'Approved Jobs'}
            data={jobs}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </div>
    </motion.div>
  );
};

export default ApprovedJob;
