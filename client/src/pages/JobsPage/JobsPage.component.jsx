import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './JobsPage.styles.scss';
import { fetchJobs } from '../../redux/jobs/job.actions';
import JobCard from '../../components/JobCard/JobCard.component';
import JobForm from '../../components/JobForm/JobForm.component';

const JobsPage = ({ jobList = [], fetchJobs, loading }) => {

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <div className='jobsPage'>
            <JobForm />
            <div className='jobList'>
                {
                    jobList.length > 0
                        ?   jobList.map(
                                (job, index) => 
                                <JobCard key={index} job={job} />
                            )
                        :   loading 
                                ? <p>Loading ...</p>
                                : <p>Error Loading.</p>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        jobList: state.job.jobList,
        loading: state.job.loading
    };
}

const mapDispatchToProps = dispatch => ({
    fetchJobs: () => dispatch(fetchJobs())
});

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);