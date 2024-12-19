// import jobData from "../jobs.json"; // Adjusted to match the correct import
// import JobListing from "./JobListing";
// import { useState, useEffect } from "react";
// import Spinner from "./Spinner";

// const JobListings = ({ isHome = false }) => {
//   const jobs = jobData.jobs;
//   const [job, setJob] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // const jobListings = isHome ? jobs.slice(0,3) : jobs;

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const apiURL = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
//       try {
//         const res = await fetch(apiURL);
//         const data = await res.json();
//         // Ensure data is an array before setting state
//         if (Array.isArray(data)) {
//           setJob(data);
//         } else {
//           console.error("Fetched data is not an array:", data);
//           setJob([]); // Set to an empty array to prevent errors
//         }
//       } catch (error) {
//         console.log("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, [isHome]);
  

//   return (
//     <section className="bg-blue-50 px-4 py-10">
//       <div className="container-xl lg:container m-auto">
//         <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
//           {isHome ? "Recent Jobs" : "Browse Jobs"}
//         </h2>

//         {loading ? (
//           <Spinner loading={loading} />
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {job.map((job) => (
//               <JobListing key={job.id} job={job} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default JobListings;


import jobData from "../jobs.json"; // Importing the jobs JSON data
import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  // Directly use the jobs data from the imported JSON
  const jobs = jobData.jobs;
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(false); // No need for loading since we aren't fetching data anymore

  useEffect(() => {
    setLoading(true); // Simulate loading state when switching views
    const jobListings = isHome ? jobs.slice(0, 3) : jobs; // Limit jobs for the homepage
    setJob(jobListings);
    setLoading(false); // Set loading to false once data is set
  }, [isHome, jobs]); // Depend on isHome and jobs for re-rendering

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {job.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
