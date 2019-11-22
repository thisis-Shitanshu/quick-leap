import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './JobsPage.styles.scss';
import { fetchJobs } from '../../redux/jobs/job.actions';

const JobsPage = ({ jobList, fetchJobs }) => {
    console.log(jobList);

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <p>Jobs Page</p>
    );
}

const mapStateToProps = state => {
    return {
        jobList: state.job.jobList
    };
}

const mapDispatchToProps = dispatch => ({
    fetchJobs: () => dispatch(fetchJobs())
});

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);