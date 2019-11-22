import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './JobCard.styles.scss';
import { deleteJob } from '../../redux/jobs/job.actions';

const JobCard = ({ 
    job: { 
        _id,
        title,
        company,
        location,
        aboutCompany,
        role,
        date
    },
    currentUser,
    deleteJob,
    match
}) => {

    const dateNew = new Date(date);

    const handleDelete = async event => {
        event.preventDefault();
        
        deleteJob({
            id: _id
        });
    };
    
    return (
        <div className="container">
            <div className="title">{title}</div>
            
            <div className="row">
                <div className="company">{company}</div>
                <div className="location">{location}</div>
            </div>
            
            <div className="aboutCompany">{aboutCompany}</div>
            <div className="role">{role}</div>
        
            <div className="row">
                <div></div>
                <div className="date">{dateNew.toDateString() }</div>
            </div>
            {
                match.path === '/admin/jobs' && currentUser
                    ? <button
                        onClick={handleDelete}
                    >Delete</button>
                    : null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    };
}

const mapDispatchToProps = dispatch => ({
    deleteJob: (id) => dispatch(deleteJob(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(JobCard));