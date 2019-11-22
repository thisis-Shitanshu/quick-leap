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
            <div className="reviews">
                <div className="item">
                    <div className="name">
                        Dr. Sanjeeva Rao B.
                    </div>
                    <div className="designation">
                        Founder, EAT5/TRUGRAINS/AKKER BIO
                    </div>
                    <div className="review">
                        Krishna Vineela is very resourceful and she would be a great asset for any team. She is extremely bright, savvy and has a optimistic attitude which resonated well with team members. She is very focused on tasks at hand and extremely talented in problem solving. I would recommend Ms. Vineela for any endeavor she chooses.
                    </div>
                </div>
                <div className="item">
                    <div className="name">
                        Ravindranath Vemuri
                    </div>
                    <div className="designation">
                        AGM-HR at Patil Rail Infrastructure Pvt. Ltd.
                    </div>
                    <div className="review">
                        Vineela has good interpersonal skills, she got good experience in recruiting ERP professionals, Her experience lies also in Training employees on Communication and Behavioral aspects. She is basically a self motivated person and possess good energy, she always tries to groom people around her. Curious to learn new things. Her strength is having interactive skills. I wish her all the success in her assignments. 
                    </div>
                </div>
            </div>
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