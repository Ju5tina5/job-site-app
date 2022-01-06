import './App.css';
import { Routes, Route } from "react-router-dom";
import {useState} from "react";
import Home from "./pages/Home";
import JobsAll from "./pages/JobsAll";
import PostJob from "./pages/PostJob";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import SingleJobPost from "./pages/SingleJobPost";
import {DataContext} from "./contexts/DataContext";
import Contacts from "./components/Contacts";



function App() {

  const infoArr = [
      {
        header: 'Make Recruiting Your Competitive Advantage',
        text: 'Talent is a top priority for all startup founders and executives. Jobify offers a way to completely optimize your entire recruiting process. Find better candidates, conduct more focused interviews, and make data-driven hiring decisions.'
      },
    {
      header: 'Join Thousands of Companies That Rely on Jobify',
      text: 'Jobify offers a way to completely optimize your entire recruiting process. Find better candidates, conduct more focused interviews, and make data-driven hiring decisions.'
    }
  ]

  const [getJobPosts, setJobPosts] = useState([
        {
          id: 'e1',
          companyName: 'Shopify',
          jobTitle: 'Art Director',
          location: 'Uzkampio g. 32',
          email: "shopify@gamil.com",
          region: "Vilnius",
          jobType: "freelance",
          jobCategory: "design",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg'
        },
        {
          id: 'e2',
          companyName: 'Square',
          jobTitle: 'Web Designer',
          location: 'Zabludiskiu g. 85',
          email: "square@gamil.com",
          region: "Kaunas",
          jobType: "full-time",
          jobCategory: "design",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-sspace.jpg'
        },
        {
          id: 'e3',
          companyName: 'Optimizely',
          jobTitle: 'Web Development',
          location: 'Malimanuku g. 54 ',
          email: "optimizely@gamil.com",
          region: "Klaipėda",
          jobType: "part-time",
          jobCategory: "development",
          description: "The right candidate will possess video production and editing skills. You will work with the marketing and social media team in the video production cycle from pre-production planning through post-production editing (video training available).\n" +
              "\n" +
              "Design work will be completed in a timely fashion, largely unsupervised short of regular design feedback, and meet the stated requirements of the requestor/stakeholder.\n" +
              "\n" +
              "For website design, a basic level of coding is required in order to turn designs into live websites.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-optimizely.jpg'
        },
        {
          id: 'e4',
          companyName: 'Okcupid',
          jobTitle: 'Marketing Director',
          location: 'Somewhere g. 32',
          email: "okcupid@gamil.com",
          region: "Šiauliai",
          jobType: "internship",
          jobCategory: "marketing",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-okcupid.jpg'
        },
        {
          id: 'e5',
          companyName: 'Pinterest',
          jobTitle: 'Website Designer',
          location: 'Knowhere str. 230',
          email: "pinterest@gamil.com",
          region: "Panevėžys",
          jobType: "freelance",
          jobCategory: "design",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-pinterest.jpg'
        },
        {
          id: 'e6',
          companyName: 'Codepen',
          jobTitle: 'Front End Developer',
          location: "Doesn't matter",
          email: "codepen@gamil.com",
          region: "Šiauliai",
          jobType: "full-time",
          jobCategory: "development",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-codepen.jpg'
        },
        {
          id: 'e7',
          companyName: 'Behance',
          jobTitle: 'API Engineer',
          location: 'Lala str 102',
          email: "behance@gamil.com",
          region: "Vilnius",
          jobType: "temporary",
          jobCategory: "development",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-behance.jpg'
        },
        {
          id: 'e8',
          companyName: 'Disqus',
          jobTitle: 'Graphic Designer',
          location: 'Address str 007',
          email: "disqus@gamil.com",
          region: "Šiauliai",
          jobType: "temporary",
          jobCategory: "design",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/company-logo-disqus.jpg'
        },
        {
          id: 'e9',
          companyName: 'Dolby',
          jobTitle: 'Design Technologist',
          location: 'Neaiskukur g. 25',
          email: "dolby@gamil.com",
          region: "Vilnius",
          jobType: "internship",
          jobCategory: "sales",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/company-logo-dolby.jpg'
        },
        {
          id: 'e10',
          companyName: 'Dribble',
          jobTitle: 'Front-End Engineer',
          location: 'Nothing str. 10',
          email: "dribble@gamil.com",
          region: "Kaunas",
          jobType: "full-time",
          jobCategory: "design",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/company-logo-dribbble.jpg'
        },
        {
          id: 'e11',
          companyName: 'Desk',
          jobTitle: 'Web Designer / Front End Developer',
          location: 'Nanana str 25',
          email: "desk@gamil.com",
          region: "Panevėžys",
          jobType: "freelance",
          jobCategory: "development",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/company-logo-desk.jpg'
        },
        {
          id: 'e12',
          companyName: 'Paypal',
          jobTitle: 'Graphic Designer',
          location: 'VeryFar str 210',
          email: "paypal@gamil.com",
          region: "Kaunas",
          jobType: "internship",
          jobCategory: "design",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/03/company-logo-paypal.jpg'
        },
        {
          id: 'e13',
          companyName: 'Shopify',
          jobTitle: 'Sales Rep',
          location: 'Uzkampio g. 32',
          email: "shopify@gamil.com",
          region: "Vilnius",
          jobType: "full-time",
          jobCategory: "sales",
          description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
          image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg'
        },
          {
            id: 'e14',
            companyName: 'Square',
            jobTitle: 'Sales Rep',
            location: 'Zabludiskiu g. 85',
            email: "square@gamil.com",
            region: "Klaipėda",
            jobType: "part-time",
            jobCategory: "sales",
            description: "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.",
            image: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-sspace.jpg'
          }
      ]);
  const [length, setLength] = useState(4);
  const [getFiltered, setFiltered] = useState(getJobPosts)

  const addNewJobHandler = (job) => {
    console.log(job)
    let letters = 'ABCDEFGHIJKLMNPORSTVUWZQ';
    let id = '';
    for (let i = 0; i < 20; i++) {
      let num = Math.floor(Math.random() * letters.length)
      id += letters[num] + num;
    }

    job['id'] = id;
    setJobPosts(prevState => {
      return [...prevState, job];
    })
    setFiltered(getJobPosts);
  }
  const addLength = () => {
    if((length + 4) > getFiltered.length){
      setLength(getFiltered.length)
    } else {
      setLength(length + 4)
    }
  }
  const removeLength = () => {
    if((length - 4) === getFiltered.length){
      setLength(getFiltered.length)
    } else {
      setLength(length - 4)
    }
  }


  const onArrayFilter = (filters) => {
    let filteredArray = getJobPosts.filter( x => x.jobTitle.includes(filters.keyWord))
    if(filters.region !== "all-regions"){
      filteredArray = filteredArray.filter( x => x.region === filters.region );
    }
    if(filters.category !== 'all-categories'){
      filteredArray = filteredArray.filter( x => x.jobCategory === filters.category );
    }
    setLength(filteredArray.length > 4 ? 4:filteredArray.length)
    return  setFiltered(filteredArray)
  }


  return (
    <div className="mainWrapper d-flex flex-column">
      <DataContext.Provider value={{onArrayFilter, length, setLength, getJobPosts}}>
        <Toolbar setLength={setLength}/>
        <Routes>
          <Route path='/' element={<Home getJobs={getJobPosts} length={length} addLength={addLength} removeLength={removeLength} information={infoArr}/>} />
          <Route path={'/allJobs'} element={<JobsAll getJobs={getFiltered} length={length} addLength={addLength} removeLength={removeLength}/>} />
          <Route path={'/postJob'} element={<PostJob postJob={addNewJobHandler}/>}/>
          <Route path={'/singleJob/:id'} element={<SingleJobPost jobs={getJobPosts}/>}/>
          <Route path={'*'} element={<Error />}/>
        </Routes>
        <Contacts />
        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
