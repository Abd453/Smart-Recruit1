import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MUIDataTable from 'mui-datatables';
import NavbarM from './navbarM';
import Footer from '../../components/Footer';

export default function Jobstable() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchJobs = () => {
    api
      .get('/jobs')
      .then((res) => {
        setJobs(res.data || []);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      })
      .finally(() => setLoading(false));
  };

  const updateJobStatus = (jobId, status) => {
    api
      .patch(`/jobs/${jobId}`, { status })
      .then(() => {
        fetchJobs(); // Refresh the job list after updating
      })
      .catch((error) => {
        console.error('There was an error updating the job status!', error);
      });
  };

  const columns = [
    { name: 'id', label: 'ID', options: { display: false } },
    { name: 'title', label: 'Job Title' },
    { name: 'time', label: 'Time' },
    { name: 'location', label: 'Location' },
    { name: 'pertemp', label: 'Type' },
    { name: 'money', label: 'Salary Range' },
    {
      name: 'status',
      label: 'Status',
      options: {
        customBodyRender: (value) => (
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${value === 'Accepted' ? 'bg-green-100 text-green-700' :
            value === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
            {value || 'Pending'}
          </span>
        )
      }
    },
    {
      name: 'Actions',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          const jobId = tableMeta.rowData[0];
          const currentStatus = tableMeta.rowData[6];
          return (
            <div className="flex gap-2">
              <button
                className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all disabled:opacity-50"
                onClick={() => updateJobStatus(jobId, 'Accepted')}
                disabled={currentStatus === 'Accepted'}
              >
                Approve
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all disabled:opacity-50"
                onClick={() => updateJobStatus(jobId, 'Rejected')}
                disabled={currentStatus === 'Rejected'}
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

  const getMuiTheme = () =>
    createTheme({
      typography: { fontFamily: 'Outfit, sans-serif' },
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            }
          }
        },
        MuiTableCell: {
          styleOverrides: {
            head: {
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              color: '#1e293b',
              fontWeight: 700,
              fontSize: '0.875rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            },
            body: {
              color: '#475569',
              fontSize: '0.875rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            },
          },
        },
      },
    });

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      <NavbarM />

      <main className="flex-grow py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Review <span className="text-green-600">Openings</span></h1>
              <p className="text-gray-500 mt-1">Manage and validate job requests from team leads.</p>
            </div>
            <button
              onClick={() => navigate('/managerhome')}
              className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 shadow-sm transition-all"
            >
              Back to Workspace
            </button>
          </div>

          <div className="glass rounded-[2rem] p-6 md:p-8 border border-white/60 shadow-2xl shadow-green-500/5">
            <ThemeProvider theme={getMuiTheme()}>
              <MUIDataTable
                title={""}
                data={jobs}
                columns={columns}
                options={{
                  selectableRows: 'none',
                  elevation: 0,
                  responsive: 'standard',
                  rowsPerPage: 10,
                  download: false,
                  print: false,
                  filterType: 'dropdown',
                  textLabels: {
                    body: { noMatch: loading ? "Crunching data..." : "No jobs found" }
                  }
                }}
              />
            </ThemeProvider>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
