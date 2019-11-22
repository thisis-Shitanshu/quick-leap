import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Home.styles.scss';
import JobCard from '../../components/JobCard/JobCard.component';
import { fetchJobs } from '../../redux/jobs/job.actions';

const Home = ({ jobList = [], fetchJobs, loading }) => {

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <div>
            <div className="jobList">
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);