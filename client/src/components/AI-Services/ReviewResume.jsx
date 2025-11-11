import { FileText, Sparkles } from "lucide-react";
import React, { useState } from "react";
import resum from "../../assets/Screenshot 2025-11-12 000210.png";

// Reusable Button Component
const GradientButton = ({ text, Icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#09b37a] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition"
  >
    {Icon && <Icon className="w-5" />}
    {text}
  </button>
);

// Reusable File Input Component
const FileUploader = ({ label, onChange, accept }) => (
  <div className="mt-4">
    <p className="text-sm font-medium">{label}</p>
    <input
      onChange={onChange}
      accept={accept}
      type="file"
      className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
      required
    />
    <p className="text-xs text-gray-500 font-light mt-1">
      {accept.includes("pdf") ? "Supports PDF Resume only" : ""}
    </p>
  </div>
);

// Resume Review Form
const ResumeForm = ({ onSubmit, onFileChange }) => (
  <form
    onSubmit={onSubmit}
    className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200"
  >
    <div className="flex items-center gap-3">
      <Sparkles className="w-6 text-[#00DA83]" />
      <h1 className="text-xl font-semibold">Resume Review</h1>
    </div>

    <FileUploader
      label="Upload Resume"
      onChange={onFileChange}
      accept="application/pdf"
    />

    <GradientButton text="Review Resume" Icon={FileText} />
  </form>
);

// Resume Analysis Component
const ResumeAnalysis = ({ resumeUploaded }) => (


  
  <div className="w-full max-w-lg p-6 bg-white rounded-lg flex flex-col border border-gray-200 max-h-[600px] min-h-96">
    <div className="flex items-center gap-3">
      <FileText className="w-5 h-5 text-[#00DA83]" />
      <h1 className="text-xl font-semibold">Analysis Results</h1>
    </div>

    <div className="flex-1 flex justify-center items-center">
      {resumeUploaded ? (
        <div className="text-sm flex flex-col items-center gap-3 text-gray-800">
          {/* Here you can display AI resume analysis results */}
          <p>Resume successfully uploaded! Analysis will appear here.</p>
        </div>
      ) : (
        <div className="text-sm flex flex-col items-center gap-3 text-gray-400">
          <FileText className="w-9 h-9" />
          <p>Upload a Resume and click "Review Resume"</p>
        </div>
      )}
    </div>
  </div>
);

// Main Resume Review Component
const ReviewResume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeUploaded, setResumeUploaded] = useState(false);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
    setResumeUploaded(false); // Reset analysis on new file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resumeFile) {
      // Here you can integrate backend AI analysis
      console.log("Resume submitted:", resumeFile);
      setResumeUploaded(true);
    }
  };

  return (
   <>
      <div> <br /> <br /> <br />
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-900 text-center">
          Ai Resume Analyzer
        </h1>
        <img
          src={resum}
          alt=""
          className="w-full md:h-105 md:w-180 mx-auto rounded-2xl"
        />
       <div className="max-w-3xl mx-auto text-center px-4 py-10">
  <h2 className=" text-start text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
    Overview 
  </h2>

  <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify ">
    The AI Resume Analyzer helps you improve your resume by analyzing formatting,
    keyword relevance, clarity of achievements, and alignment with job roles.
    It provides clear suggestions that make your resume more professional,
    readable, and suitable for ATS screening systems.
  </p>

  <div className="mt-8 space-y-3 text-slate-700 text-sm md:text-base text-justify">
    <p>• Enhances resume quality to meet industry standards</p>
    <p>• Increases chances of clearing ATS filters</p>
    <p>• Makes your resume more clear and impactful</p>
    <p>• Helps you understand what hiring teams look for</p>
    <p>• Saves time with quick, accurate feedback</p>
  </div>
</div>

      </div>
    <div className="h-full overflow-y-scroll p-6 flex flex-col md:flex-row items-start flex-wrap gap-6 text-slate-700 justify-center">
      <ResumeForm onSubmit={handleSubmit} onFileChange={handleFileChange} />
      <ResumeAnalysis resumeUploaded={resumeUploaded} />
    </div>
   </>
  );
};

export default ReviewResume;
