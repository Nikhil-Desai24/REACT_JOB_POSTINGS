import jobData from "../jobs.json"; // Adjusted to match the correct import
import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const jobs = jobData.jobs;
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  // const jobListings = isHome ? jobs.slice(0,3) : jobs;

  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome
        ? "/api/jobs?_limit=3"
        : "/api/jobs";
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        // console.log(data);
        setJob(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
  fetchJobs();
  }, []);

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