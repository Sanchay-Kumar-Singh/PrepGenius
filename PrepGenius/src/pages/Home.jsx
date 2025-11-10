import React from 'react'
import sanchay from '../assets/Sanchay.png'
import Prince from '../assets/Prince.jpg'
import { motion } from "framer-motion";
import photo from '../assets/Screenshot 2025-11-10 184220.png'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import essential from '../assets/Gemini_Generated_Image_c1k8z6c1k8z6c1k8.png'
import essent from '../assets/Gemini_Generated_Image_gb4x15gb4x15gb4x.png'
const Home = () => {
    const { user } = useUser();
    const { openSignIn } = useClerk();
    const [openIndex, setOpenIndex] = React.useState(null)
    const faqsData = [
        {
            question: 'How does the AI-based question practice work?',
            answer: 'Our AI analyzes your strengths and weaknesses, then generates personalized practice questions that match your skill level and target improvement areas.'
        },
        {
            question: 'Does the platform provide company-specific preparation?',
            answer: 'Yes, we offer curated preparation tracks for top companies like TCS, Infosys, Wipro, Accenture, Cognizant, and more — including previous patterns and commonly asked questions.'
        },
        {
            question: 'Will I get mock interviews with feedback?',
            answer: 'Yes. You can attend AI-driven mock interviews that evaluate your communication, confidence, problem-solving approach, and then provide actionable feedback instantly.'
        },
        {
            question: 'Are coding tests included?',
            answer: 'We offer coding challenges with real-time evaluation across languages like Java, Python, C++, and JavaScript — including hints and solution walkthroughs.'
        },
        {
            question: 'Can I track my progress?',
            answer: 'Absolutely. Your performance dashboard shows skill growth, accuracy, time efficiency, and topic-wise progress to help you prepare smarter.'
        }
    ]

    const companyLogos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"];
    const features = [
        {
            title: "AI Roadmap Generator",
            desc: "Create a personalized roadmap based on your skills and goals.",
        },
        {
            title: "AI Quiz Generator",
            desc: "Generate topic-wise quizzes for faster revision and practice.",
        },
        {
            title: "AI Mock Interview",
            desc: "Simulate realistic interviews and get instant feedback.",
        },
        {
            title: "AI Resume Builder",
            desc: "Generate ATS-proof resumes tailored to your job role.",
        },
    ];
      const featuresData = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>),
            title: "🎯 All-in-One Placement Hub",
            description: "From Notes, Coding & Interview Questions to Aptitude Quizzes, Resume Templates, and Internships, everything you need is in one place!",
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>),
            title: " Top Free & Paid Resources",
            description: "Find the best YouTube channels, free courses, ATS resume checkers, and interview prep sites all handpicked to save you time!",
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/></svg>),
            title: "Crack Your Dream Job with Us!",
            description: "With structured learning, expert resources, and real-world practice, we help you ace placements with confidence!",
        }
    ];
    return (
        <>
            <div>

                <div className="mt-20 px-4 md:px-10 lg:px-20">

                    <motion.img
                        src={photo}
                        alt="E-Learning"
                        className="w-350 h-64 md:h-80 lg:h-120 object-cover rounded-xl shadow-lg mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    />

                    <div className="text-center mt-8">
                        <motion.h1
                            className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-700"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            Welcome to Ai-Integrated Placement Preparation Platform 🚀
                        </motion.h1>

                        <motion.p
                            className="text-base md:text-lg text-gray-700 mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.9 }}
                        >
                            Welcome to Ai-Integrated Placement Preparation Platform, your personalized platform for mastering technology and career-ready skills.
                            Whether you’re a student, professional, or lifelong learner, we provide structured courses,
                            interactive roadmaps, and hands-on projects to accelerate your growth.
                            Start learning today and take your first step towards success.
                        </motion.p>
                    </div>

                </div>


                <br /><br />
                {/* {--company--} */}
                <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
                    <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
                        <div className="flex">
                            {[...companyLogos, ...companyLogos].map((company, index) => (
                                <img key={index} src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                                    alt={company} className="w-full h-full object-cover mx-6" draggable={false} />
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
                </div> <br />

                {/* {---essentials---} */}
                {/* <div className=''>
                    <img src={essential} alt="" className='w-full md:w-130 md:h-100 mx-auto rounded-2xl'/>

                </div> */}
                <br /><br />
               <div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-900 text-center">
          Placement Essentials
        </h1>
        <img
          src={essent}
          alt=""
          className="w-full md:w-240 mx-auto rounded-2xl"
        />
      </div>

      <div className="md:-mt-15 max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
          AI-Integrated Features
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group p-0.5 rounded-2xl transition-all duration-300 hover:bg-linear-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500"
            >
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-blue-300/40 transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-lg">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold text-slate-700">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
         <div class="text-center ">
                <p class="text-center font-medium text-purple-100 text-2xl px-10 py-1.5 rounded-full 
bg-[linear-gradient(120deg,#6D28D9,#A855F7)] border border-purple-800 w-max mx-auto
">Why Choose us?</p>
                <h2 class="text-0.5xl font-semibold text-center mx-auto mt-4 text-black">Unlock Your Potential with Our Comprehensive Learning Approach</h2>
            </div>
            <div class="flex  flex-wrap items-center justify-center d:h-10 gap-6 md:gap-4 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <div key={index}  className={`hover:-translate-y-0.5 transition duration-300 ${index === 1 ? 'p-px rounded-[13px] bg-linear-to-br from-[#9544FF] to-[#223B60] ' : ''}`}>
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800
bg-[linear-gradient(135deg,#1E0933,#3C0B5F,#5B21B6)]
max-w-80 w-full
">
                            {feature.icon}
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 line-clamp-2 h-30 pb-4">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
      <br />
             <br />   <div className='flex flex-col items-center text-center text-slate-800 px-3'>
                    <p className='text-base font-medium text-slate-600'>FAQ</p>
                    <h1 className='text-3xl md:text-4xl font-semibold mt-2'>Frequently Asked Questions</h1>

                    <p className='text-sm text-slate-500 mt-4 max-w-2xl'>
                        Proactively answering FAQs boosts user confidence and cuts down on support tickets.
                    </p>

                    <div className='max-w-3xl w-full mt-6 flex flex-col gap-4 items-start text-left'>
                        {faqsData.map((faq, index) => (
                            <div key={index} className='flex flex-col items-start w-full'>
                                <div
                                    className='flex items-center justify-between w-full cursor-pointer border border-indigo-100 p-4 rounded'
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <h2 className='text-sm'>{faq.question}</h2>

                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                        <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                                            stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                <p
                                    className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${openIndex === index
                                        ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                                        : "opacity-0 max-h-0 -translate-y-2"
                                        }`}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <br /><br />
                {/* {---Founder---} */}
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-800 text-center">Meet Our Team</h1>
                <p className="text-slate-500 text-center">The people behind the product, passionate about what they do.</p>

                <div className="flex flex-wrap items-center justify-center gap-6 mt-9">

                    {/* Card 1 */}
                    <div className="max-w-80 bg-black text-white rounded-2xl overflow-hidden">
                        <div className="relative">
                            <img
                                src={sanchay}
                                alt="team-member"
                                className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
                            />
                            <div className="absolute bottom-0 h-60 w-full bg-linear-to-t from-black-200 to-transparent"></div>
                        </div>
                        <div className="px-4 pb-6 text-center">
                            <p className="mt-4 text-lg font-medium">Sanchay Kumar Singh</p>
                            <p className="text-sm font-medium bg-linear-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">
                                Full Stack Developer
                                <br />JAVA(DSA)
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-57 bg-black text-white rounded-2xl overflow-hidden">
                        <div className="relative">
                            <img
                                src={Prince}
                                alt="team-member"
                                className="h-[270px] opacity-80 w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
                            />
                            <div className="absolute bottom-0 h-60 w-full bg-linear-to-t from-black-200 to-transparent"></div>
                        </div>
                        <div className="px-4 pb-6 text-center">
                            <p className="mt-4 text-lg font-medium">Prince Kumar Sinha</p>
                            <p className="text-sm font-medium bg-linear-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">
                                Full Satck Developer
                                <br />
                                C++(DSA)
                            </p>
                        </div>
                    </div>
                </div>



                <br /><br />
                <div className="lg:h-20 max-w-7xl py-16 md:pl-20 md:w-full max-md:text-center mx-2 md:mx-auto flex flex-col md:flex-row items-center justify-between text-left bg-linear-to-b from-[#591ae0] to-[#8d1bd4] rounded-2xl p-10 text-white">
                    <div>
                        <h1
                            className="text-4xl md:text-[46px] md:leading-[60px] font-semibold bg-linear-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
                            Ready to try-out this app?
                        </h1>
                        <p className="bg-linear-to-r from-white to-[#CAABFF] text-transparent bg-clip-text text-lg">
                            Your next favourite tool is just one click away.
                        </p>
                    </div>
                    {
                        user ? <UserButton /> :
                            <button onClick={openSignIn} className="px-12 py-3 text-slate-800 bg-white rounded-full text-sm mt-4">
                                Get Started
                            </button>
                    }
                </div>
                <br /><br />
            </div>
        </>
    )
}

export default Home
