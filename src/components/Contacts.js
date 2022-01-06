import React from 'react';

const Contacts = () => {
    return (
        <article style={{backgroundColor: 'grey'}}>
            <section className={'d-flex flex-column align-center'}>
                <h2>Got a question?</h2>
                <p>We're here to help. Check out our FAQs, send us an email or call us at 1 800 555 5555</p>
                <div className={'contactsWrapper d-flex'}>
                    <div className={'logoWrapper d-flex flex-column align-center-center'}>
                        <a href="/">
                            <img src="https://www.swedcham.com.hk/wp-content/uploads/2020/12/job-5359923_1280.png" alt="logo"/>
                        </a>
                        <p>Job Searching Just Got Easy. Use Jobify to run a hiring site and earn money in the process!</p>
                    </div>
                    <div className="d-flex flex-column align-center">
                        <h3>Site Map</h3>
                        <ul>
                            <li><a href='/'>All Jobs</a></li>
                            <li><a href='/'>Home Page</a></li>
                            <li><a href='/'>Post Job</a></li>
                            <li><a href='/'>Clients</a></li>
                            <li><a href='/'>Stats</a></li>
                        </ul>

                    </div>
                    <div className="d-flex flex-column align-center">
                        <h3>Recent News Articles</h3>
                        <p>The Best (and Worst) Canadian Merchant Account Providers
                            March 29, 2016</p>
                        <p>Do you have a job that the average person doesn’t even know exists?
                            March 22, 2016</p>
                        <p>DigitalOcean launches first Canadian data centre in Toronto
                            February 22, 2016</p>
                    </div>
                    <div className="d-flex flex-column align-center">
                        <h3>Jobify Offices</h3>
                        <address>
                            Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282
                        </address>
                        <address>
                            Jobify Inc Canada. 545 Younge St, Suite 11 Toronto, Ontario M4K 6F4
                        </address>

                    </div>
                </div>
            </section>
        </article>
    );
};

export default Contacts;