import React from 'react'
import './about.css'

function Aboutus() {
  return (
    <div>
      
<section className="hero">
    <div className="hero-content">
        <h1 className="hero-title">Stackoverflow gives you answers</h1>
        <p className="hero-paragraph">
            We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.
        </p>
        <div className="hero-options">
            <button className="btn btn-developers">"For developers"</button>
            <button className="btn btn-businesses">For businesses</button>
        </div>
    </div>
</section>
<section className="for-developers">
   <div className="container">
       <div className="section-head">
           <h2 className="section-title">For developers, by developers
           </h2>
           <div className="section-line"></div>
           <p className="section-description">Stack Overflow is an <a href="#">open community</a> for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.
           </p>
       </div>
       <div className="options">
           <div className="option">
               <div class="option-icon">
                   <img src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f" alt="Public Q & A"/>
               </div>
               <div className="option-title">
                   Public Q&A
               </div>
               <div className="option-description">
                   Get answers to more than 16.5 million questions and give back by sharing your knowledge with others.
                   <a href="#">Sign up</a> for an account.
               </div>
               <div className="option-button">
                   <a href="#" class="option-link btn btn-dark-blue">
                       Browse questions
                   </a>
               </div>
           </div>
           <div className="option">
               <div class="option-icon">
                   <img src="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7" alt="Private Q & A"/>
               </div>
               <div class="option-title">
                   Public Q&A
               </div>
               <div className="option-description">
                   Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.
               </div>
               <div className="option-button">
                   <a href="#" class="option-link btn btn-orange">
                       Try for free
                   </a>
               </div>
           </div>
           <div className="option">
               <div class="option-icon">
                   <img src="https://cdn.sstatic.net/Img/home/jobs.svg?v=931d6c0863ee" alt="Browse jobs"/>

               </div>
               <div className="option-title">
                   Public Q&A
               </div>
               <div class="option-description">
                   Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.


               </div>
               <div className="option-button">
                   <a href="#" class="option-link btn btn-dark-blue">
                       Find a job
                   </a>
               </div>
           </div>
       </div>
   </div>
</section>
<section className="for-businesses">
    <div className="container">
        <div className="section-head">
            <h2 className="section-title">For businesses, by developers</h2>
            <div className="section-line"></div>
            <p className="section-description">Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.</p>
        </div>



        <div className="options">
            <div className="option">
                <div className="option-icon">
                    <img src="https://cdn.sstatic.net/Img/home/private-questions.svg?v=a4f1cfb08f7e" alt="Private Q&A"/>
                </div>
                <div className="option-description">
                    Quickly find and share internal knowledge with <a href="#" className="option-link">Private Q&A</a>
                </div>
            </div>
            <div className="option">
                <div className="option-icon">
                    <img src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3" alt="Talent solutions"/>
                </div>
                <div className="option-description">
                    Find the perfect candidate for your growing technical team with <a href="#" className="option-link">Talent solutions</a>


                </div>
            </div>
            <div className="option">
                <div className="option-icon">
                    <img src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02" alt=" Advertising platform"/>
                </div>
                <div className="option-description">
                    Accelerate the discovery of your products or services through our <a href="#" className="option-link">Advertising platform</a>
                </div>
            </div>
        </div>


    </div>
</section>
<section className="teams">
    <div className="container">
        <div className="teams-head">
            <h2 className="teams-title">Unlock knowledge with Stack Overflow for Teams
            </h2>
            <p className="teams-description">Wikis, chat messages, or formal documentation for knowledge management aren’t effective. Our question and answer format is a proven approach for accessing the right information in less time.
            </p>
            <div className="teams-details">
                <a href="#" className="btn btn-orange">Learn More</a>
            </div>
        </div>

        <div className="teams-plan">
            <div className="card card-basic">
                <div className="card-header">
                    <h2 className="plan-type">Basic</h2>
                    <p className="plan-description">Private knowledge base for teams</p>
                </div>
               <div className="card-body">
                   <div className="plan-price">
                       <div className="price">$6 USD</div>
                       <span className="per">per teammate / month</span>
                   </div>
                   <div className="plan-features">
                       <div className="plan-feature">
                           <i className="far fa-calendar-alt"></i>
                           <span className="plan-text">Free 30 day trial</span>
                       </div>
                       <div className="plan-feature">
                           <i className="fab fa-keycdn"></i>
                           <span className="plan-text">Your own private space hosted on stackoverflow.com</span>
                       </div>
                       <div className="plan-feature">
                           <i className="fas fa-archive"></i>
                           <span className="plan-text">Fully searchable archive</span>
                       </div>
                   </div>
               </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-card">Get started for free</a>
                </div>

            </div>

            <div className="card card-business">
                <div className="card-most-used">
                    <span>MOST USED</span>
                    <i class="fas fa-city"></i>
                </div>
                <div className="card-header">
                    <h2 className="plan-type">Business</h2>
                    <p className="plan-description">Private knowledge base with SSO and premium features</p>
                </div>
                <div className="card-body">
                    <div class="plan-price">
                        <div className="price">$12 USD
                        </div>
                        <span class="per">per teammate / month</span>
                    </div>
                    <div className="plan-features">
                        <div class="plan-feature">
                            <i class="fas fa-key"></i>
                            <span className="plan-text">Single sign-on (SSO) with SAML</span>
                        </div>
                        <div className="plan-feature">
                            <i class="far fa-chart-bar"></i>
                            <span className="plan-text">Reporting and analytics</span>
                        </div>
                        <div className="plan-feature">
                            <i class="fas fa-plus-square"></i>
                            <span className="plan-text">Priority customer support</span>
                        </div>
                        <div className="plan-feature">
                            <i class="fas fa-star"></i>
                            <span className="plan-text">99.5% uptime
</span>
                        </div>
                        <div className="plan-feature">
                            <i class="fas fa-plus"></i>
                            <span className="plan-text">All the features of Basic tier</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="#" class="btn btn-card">Get started</a>
                </div>

            </div>

            <div className="card card-enterprise">
                <div className="card-header">
                    <h2 className="plan-type">Enterprise</h2>
                    <p className="plan-description">Standalone knowledge base with enhanced security and flexible hosting

                    </p>
                </div>
                <div className="card-body">
                    <div className="plan-price">
                        <div className="price">Custom pricing </div>
                        <span className="per">Let’s talk about what you need</span>
                    </div>
                    <div className="plan-features">
                        <div className="plan-feature">
                            <i class="fas fa-key"></i>
                            <span className="plan-text">Single sign-on with AD or SAML</span>
                        </div>
                        <div className="plan-feature">
                            <i class="fas fa-mountain"></i>
                            <span className="plan-text">Host on your cloud or servers – or our private managed cloud</span>
                        </div>
                        <div className="plan-feature">
                            <i class="fas fa-code"></i>
                            <span className="plan-text">Robust read and write API</span>
                        </div>
                        <div className="plan-feature">
                            <i class="fas fa-user"></i>
                            <span className="plan-text">Your own customer success and community building representative</span>
                        </div>
                        <div className="plan-feature">
                            <i class="fas fa-star"></i>
                            <span className="plan-text">99.5% uptime SLA and priority support</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-card">Request a demo</a>
                </div>

            </div>
        </div>


        {/* <div class="teams-footer">
            <a class="teams-footer-item">
                <img src="https://cdn.sstatic.net/Img/product/teams/endorsements/g2.svg?v=670bf9279910" alt=""/>
                <div class="teams-footer-text"><strong>Leader</strong> <span>Summer 2020</span> </div>
            </a>
            <a class="teams-footer-item">
                <img src="https://cdn.sstatic.net/Img/product/teams/endorsements/g2.svg?v=670bf9279910" alt=""/>
                <div class="teams-footer-text"><strong>Users Love Us</strong> </div>
            </a>
            <a class="teams-footer-item">
                <img src="https://cdn.sstatic.net/Img/product/teams/endorsements/fastco.svg?v=5ebc802a76c7" alt=""/>
                <div class="teams-footer-text"><strong>Most Innovative Companies</strong> <span>2019</span> </div>
            </a>
        </div> */}


    </div>
</section>
<section className="hire">
    <div className="container">
        <div className="hire-content">
            <div className="hire-item">
                <img src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3" alt="" className="hire-icon"/>
                <h4 className="hire-item-title">Hire your technical talent</h4>
                <p className="hire-item-description">We help expand your technical hiring strategy to promote your employer brand and highlight relevant open roles to our community of over 100 million developers and technologists.</p>
                <a href="#" className="btn btn-orange">Stack Overflow Talent</a>
            </div>
            <div class="hire-item">
                <img src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02" alt="" className="hire-icon"/>
                <h4 className="hire-item-title">Reach developers worldwide
                </h4>
                <p className="hire-item-description">Use the world’s largest resource for people who code to help you increase awareness and showcase your product or service across Stack Overflow’s network of Q&A sites. </p>
                <a href="#" className="btn btn-orange">Stack Overflow Advertising</a>
            </div>
        </div>
    </div>
</section>

<section className="questions">
    <div className="container">
       <div className="questions-content">
           <div className="questions-header">
               <h3 className="question-title">Questions are everywhere, answers are on Stack Overflow</h3>
           </div>
           <div className="questions-body">
               <div className="questions-body-items">
                   <div className="questions-body-item" data-id="0">
                       <img src="https://cdn.sstatic.net/Img/home/ask-a-question.svg?v=f4f2050b0297" alt="" className="question-item-icon"/>
                       <div className="question-item-text">Ask a question</div>
                       <div className="question-arrow-right"></div>
                   </div>
                   <div className="questions-body-item"  data-id="1">
                       <img src="https://cdn.sstatic.net/Img/home/votes.svg?v=748a8f48a8e2" alt="" className="question-item-icon"/>
                       <div className="question-item-text">Vote on everything</div>
                       <div className="question-arrow-right"></div>
                   </div >
                   <div className="questions-body-item"  data-id="2">
                       <img src="https://cdn.sstatic.net/Img/home/answer.svg?v=4cd8048a676c" alt="" className="question-item-icon"/>
                       <div className="question-item-text">Answer questions</div>
                       <div className="question-arrow-right"></div>
                   </div>
               </div>
               <div className="questions-body-item-content">
                   <img src="https://cdn.sstatic.net/Img/home/illo-feats-vote.svg?v=9d2eb0efdc17" alt="" className="question-item-content-img"/>
                   <h4 className="question-item-content-text">
                       Accept the answer which solved your problem to let others benefit from the valuable information.
                   </h4>
                   <a href="#" className="btn btn-orange question-item-content-btn">Create an account</a>
               </div>
               <div className="questions-body-items">
                   <div className="questions-body-item"  data-id="3">
                       <img src="https://cdn.sstatic.net/Img/home/tags.svg?v=913379eb09eb" alt="" className="question-item-icon"/>
                       <div className="question-item-text">Tag your question</div>
                       <div className="question-arrow-left"></div>
                   </div>
                   <div className="questions-body-item"  data-id="4">
                       <img src="https://cdn.sstatic.net/Img/home/accept.svg?v=27d5be078970" alt="" className="question-item-icon"/>
                       <div className="question-item-text">Accept a answer</div>
                       <div className="question-arrow-left"></div>
                   </div>
                   <div className="questions-body-item"  data-id="5">
                       <img src="https://cdn.sstatic.net/Img/home/get-recognized.svg?v=3b339d9aa10c" alt="" className="question-item-icon"/>
                       <div className="question-item-text">Get recognized</div>
                       <div className="question-arrow-left"></div>
                   </div>
               </div>
           </div>
           <div class="questions-footer">
               <h3 className="question-title">Learn and grow with Stack Overflow</h3>
               <div className="questions-grid">
                   <div className="questions-grid-item">
                       <div className="grid-item-img">
                           <img src="https://cdn.sstatic.net/Img/home/developer.svg?v=b930de7967a7" alt=""/>
                       </div>
                       <h4 className="grid-item-title">Write the script of the future</h4>
                       <p className="grid-item-description">Get your coding questions answered to learn, build, and level up whether you’re beginning with
                           <a href="#">JavaScript</a> or a <a href="#">React</a> professional.
                       </p>
                   </div>
                   <div class="questions-grid-item">
                       <div className="grid-item-img">
                           <img src="https://cdn.sstatic.net/Img/home/open-source.svg?v=847b604fd2ab" alt=""/>
                       </div>
                       <h4 className="grid-item-title">Support open source
                       </h4>
                       <p className="grid-item-description">Reach users of your project by following tags, answering newcomer questions, and empowering experts in the community.
                           <a href="#"> Read the curl project creator’s story.</a>


                       </p>
                   </div>
                   <div className="questions-grid-item">
                       <div className="grid-item-img">
                           <img src="https://cdn.sstatic.net/Img/home/advocate.svg?v=4b03cfb93502" alt=""/>
                       </div>
                       <h4 className="grid-item-title">Acquire and share knowledge
                       </h4>
                       <p className="grid-item-description">Answer questions and <a href="#">gain insights</a> from an audience of developers using your technology on Stack Overflow.
                       </p>
                   </div>
                   <div className="questions-grid-item">
                       <div className="grid-item-img">
                           <img src="https://cdn.sstatic.net/Img/home/career-switcher.svg?v=a41416ff19df" />
                       </div>
                       <h4 className="grid-item-title">Find career opportunities
                       </h4>
                       <p className="grid-item-description">Create a profile that shows off your expertise and credentials to help you make your next move. Start your
                           <a href="#">Developer Story</a>.
                       </p>
                   </div>
               </div>
           </div>
       </div>
    </div>
</section>





     
    </div>
   
  )
}

export default Aboutus