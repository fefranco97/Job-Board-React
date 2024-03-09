import { useState } from 'react'
import jobOpportunityProps from '../interfaces/jobInterface'

function JobCardDescription({ JobOpportunity }: jobOpportunityProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toogleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div className="flex flex-col items-baseline gap-3 rounded-3xl p-6 bg-white max-w-md shadow-md">
        <img
          src={JobOpportunity.company.logoPath}
          alt={JobOpportunity.company.logoAlt}
          width={75}
          height={75}
          className="rounded-md"
        />
        <h1 className="font-bold text-2xl">{JobOpportunity.jobTitle}</h1>
        <p className="text-gray-500">{JobOpportunity.company.name}</p>
        <p className="rounded-full bg-pink-200 text-pink-400 font-bold p-2.5">
          +{JobOpportunity.totalApplicants} Applicants
        </p>

        <div className="w-full border border-1 self-center"></div>

        <h1 className="font-bold text-2xl">Description</h1>

        <p className={`text-ellipsis line-clamp-4 ${isExpanded ? 'line-clamp-none' : ''}`}>
          {JobOpportunity.jobDescription}
        </p>
        <span
          className="underline hover:cursor-pointer text-pink-300 font-bold"
          onClick={toogleExpand}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>

        <div className="w-full border border-1 self-center"></div>

        <h1 className="font-bold text-2xl">Skills</h1>
        <div className="flex gap-3">
          {JobOpportunity.jobSkills.map((skill, index) => (
            <p
              className="rounded-full py-1 px-2 bg-zinc-200 text-sm min-w-10 max-w-20 text-center"
              key={index}>
              {skill}
            </p>
          ))}
        </div>

        <div className="w-full border border-1 self-center"></div>

        <h1 className="font-bold text-2xl">Based Salary</h1>
        <p className="text-gray-500">${JobOpportunity.jobBaseSalary}k/month</p>
        <button
          type="button"
          className="rounded-2xl p-2 bg-pink-400 text-white font-semibold text-lg self-stretch mt-auto">
          Apply Now
        </button>
      </div>
    </>
  )
}

export default JobCardDescription
