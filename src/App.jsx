





// import React from 'react';
// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// import MainLayout from './layout/MainLayout';
// import HomePage from './pages/HomePage';
// import JobsPage from './pages/JobsPage';
// import NotFoundPage from './pages/NotFoundPage';
// import JobPage, { jobLoader } from './pages/JobPage';
// import AddJobPage from './pages/AddJobPage'
// import EditJobPage from './pages/EditJobPage';

// const App = () => {
//   // Add new Job page
// const addJob = async (newJob) =>{
//   const res = await fetch('/api/jobs',{
//     method:'POST',
//     headers:{
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newJob),
//   });
//   return;
// }

// // Delete Job
// const deleteJob = async (id) => {
//   const res = await fetch(`/api/jobs/${id}`, {
//     method: 'DELETE',
//   });
//   return;
// };

// // update job
// const updateJob = async (job) => {
//   const res = await fetch(`/api/jobs/${job.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(job),
//   });
//   return;
// }

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<HomePage />} />
//         <Route path="/jobs" element={<JobsPage />} />
//         {/* Corrected the loader prop */}
//         <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
//         <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
//         <Route path='/add-job' element={ <AddJobPage addJobSubmit={addJob} /> } />
//         <Route path="*" element={<NotFoundPage />} />
//       </Route>
//     )
//   );

//   return <RouterProvider router={router} />;
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import jobData from './jobs.json'; // Import the jobs data directly

const App = () => {
  const [jobs, setJobs] = useState(jobData.jobs); // Store jobs in state

  // Simulate adding a new job (updating the local state)
  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  // Simulate deleting a job (updating the local state)
  const deleteJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  // Simulate updating a job (updating the local state)
  const updateJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage jobs={jobs} />} />
        <Route path="/jobs" element={<JobsPage jobs={jobs} />} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
