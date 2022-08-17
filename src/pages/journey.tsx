import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import Timeline from 'components/ui/Timeline';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.p`
  ${tw`mb-8 whitespace-pre-wrap`};
`;

const JourneyPage: React.FC = () => {
  return (
    <Layout>
      <SEO title={"My Journey"} />
      <Container section>
        <TitleSection subtitle="Here's my story" title="" />
        <Content>
          Lately, I have been speaking to a bunch of folks, and most of them asked me about my journey till now, what motivates me and how I have reached wherever I am. 
          Read it somewhere that if more than 3 people have asked the same question better to write it down. Hence here comes my story.
        </Content>
        <Content>
          Before I start, I would like to acknowledge that I am very grateful to the people who have trusted me and gave me opportunities to learn and grow, it is their humbleness and empathy that have helped me till now.
          Let us now connect some dots.
        </Content>
        <Timeline
          key={1}
          title={"School Days"}
          subtitle={""}
          content={
            <>
              <p>
                I come from a family, where everyone has a commerce background, runs some sort of their own business, or is into full-time equity/derivatives day trading. My inherent 
                curiosity for computers and passion for problem-solving made me walk on the computer science path. I am the first engineer in my family and even the first one to take 
                up a job.
              </p>
              <p>
                Never had the right guidance for this path and hence put all my focus on getting good marks in my high school board exams. Later reality hit me and realized 
                that those marks are not at all important for the journey I was starting and didn't know which college to join. That's when I joined my friend Harsh, who was joining 
                the PES Institute Of Technology. I trusted that he must be taking the best decision for himself and knowing that he was a smart guy, a hard-working guy I too joined PESIT.
              </p>  
            </>                                                                                                                         
          }
          startDate={"Before 2016"}
        />
        <Timeline
          key={2}
          title={"College Days"}
          subtitle={""}
          content={
            <>
              <p>
                PES College was amazing in the initial few years, but what I felt was it didn't provide ample amount of flexibility to the students and for the ones who want 
                to lay out their path, I knew I had to break some rules and make it work.
              </p>
              <p>
                Deep down I always knew I have to join startups and get my hands dirty, the sooner you start better it is. At the end of 2nd year of college i.e Oct 2018, 
                I pinged <a href='https://twitter.com/sajithpai' target='_blank'>Sajith Pai</a> of Blume Ventures on Twitter, seeing my passion for learning and drive he connected me to <a href='https://www.linkedin.com/in/satejs/' target='_blank'>Satej Sirur</a>, CEO of Rocketium. Satej who too studied in 
                the same university, connected with me and knew everything in and out how I was breaking the rules and decided to learn from practical internship experiences than 
                attending theoretical classes. While I had the flexibility of working from my hostel post-college hours, I used to bunk my classes after lunch and head straight up 
                to the Rocketium office in HSR, Bengaluru. wanted to see how team collaboration works, how decisions are taken, and how sales calls are done. I am very grateful that 
                Rocketium trusted me and gave me a chance.
              </p>
              <p>
                Fast forward to next year i.e 2019 Dec. Placement season was upcoming and I knew I had to sharpen my soft skills. While I was actively volunteering 
                leading teams at IEEE PESIT as a Co-Treasurer, I wanted people to give me feedback on how to improve my delivery. Sundays used to pass by traveling to sajapura 
                and attending the Toastmaster's meetings there, pretty soon I took up a lot of work in the committee and moderated a few sessions too. By the end of the year, 
                I knew I had to get a good internship both in terms of stipend and learning, I was going broke at that time. Found the list of high stipend paying companies 
                through the website of BITS Pilani and cold-emailed <a href='https://www.linkedin.com/in/shweta-rani-she-her-7b24194/' target='_blank'>Shweta Rani</a> of Zinnov Consulting. While Draup (Zinnov) used to only offer 6-month internships, I was the 
                only one except for a 2-month tenure, that's what my college allowed us for, with strict boundaries laid out.
              </p>
              <p>
                Sometime in Jan 2020, MyGate came for our campus placements and my last round was taken by <a href='https://www.linkedin.com/in/diweshsahai/' target='_blank'>Diwesh Sahai</a>, Head of Tech at MyGate. The free-flowing 1.5 hr long 
                conversation with him changed my mind about joining Deloitte and I immediately decided to work with him, under him, and learn from him. That was one of the best 
                dialogues I have shared with someone at that time.
              </p>
            </>                                                                                                                         
          }
          startDate={"2016"}
          endDate={"2020"}
        />
        <Timeline
          key={3}
          title={""}
          subtitle={""}
          content={
            <>
              <p>
                I worked at MyGate for more than a year where I touched upon a lot of surfaces in terms of technologies, backend, frontend, a bit of DevOps, and others. 
                During my tenure at MyGate, I paired up with a product designer and built the MVP version of IndiBill, that was the time I got introduced to Indie Hacking and 
                was talking to a lot of folks, including <a href='https://twitter.com/imabhinavrai' target='_blank'>Abhinav Rai</a>. Abhinav used to work at GoJek alongside Ajey Gore and <a href='https://twitter.com/ponnappa' target='_blank'>Sidu Ponnappa</a>. He used to praise them a lot 
                on how they have helped him cultivate the product thinking, how they have laid out a healthy learning culture in the organization, and how silly questions were 
                entertained if it was coming from a curious mind having the right intentions.
              </p>
              <p>
                That's when I reached out to Sidu on Twitter again with the request of working directly under him. Unfortunately, GoJek wasn't hiring at that time, but again 
                Sidu after talking to me for an hour on a Sunday eve, learned about me, and what I was chasing and connected me to a bunch of people including <a href='https://twitter.com/_swanand' target='_blank'>Swanand Pagnis</a>.
              </p>
              <p>
                Swanand was leading the tech team as the CTO of CoLearn at that time. After talking to him for an hour I was sold on the learning he has to offer and for 
                me to inherit. CoLearn was that place that helped me with everything I had in my mind while joining. I was introduced to techniques of building software the right 
                way, doing test-driven development, Pair Programming, well-written documentation, writing decision records, and many more. I got introduced to the structured way of 
                doing things. Now I look upon building software as a craftsman's work.
              </p>
              <p>
                I had the flexibility to get involved in a lot of things, I was privileged to visit Jakarta and never stopped from attending sales calls, doing a market study, 
                talking to parents, kids, operation teams, etc. The ideas I had were listened to, some adopted some explained why that is not relevant for a series A company then. 
                A lot of brainstorming with the Product Managers, where I could safely lay down my thoughts if I had a different opinion. A lot of learning happened at CoLearn which 
                I am always grateful for.
              </p>
            </>                                                                                                                         
          }
          startDate={"Aug 2021"}
        />
        <Timeline
          key={4}
          title={""}
          subtitle={""}
          content={
            <>
              <p>
                Let's see what's there in store for me now. After working in the B2C vertical for quite some time now, I'm open to exploring the B2B markets.
              </p>
              <p>
                Lastly, if you are still reading this, I would love to talk to you, understand what you are doing, why you are doing and how can I help you.
              </p>
            </>
          }
          startDate={"Aug 2022"}
        />
      </Container>
    </Layout>
  );
};

export default JourneyPage;
