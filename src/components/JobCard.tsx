import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'
import jobOpportunityProps from '../interfaces/jobInterface'

function JobCard({ JobOpportunity }: jobOpportunityProps) {
  return (
    <>
      <div className="bg-white rounded-xl flex flex-col p-5 gap-3 w-fit h-fit shadow-md">
        <div className="flex">
          <img
            width={50}
            height={50}
            src={JobOpportunity.company.logoPath}
            alt={JobOpportunity.company.name}
            className="rounded-lg"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold">{JobOpportunity.jobTitle}</h2>
            <p>{JobOpportunity.company.name} </p>
          </div>
        </div>
        <div className="flex gap-3">
          {JobOpportunity.jobSkills.map((skill, index) => (
            <p
              className="rounded-full py-1 px-2 bg-zinc-200 text-sm min-w-10 max-w-20 text-center"
              key={index}>
              {skill}
            </p>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-3 text-pink-500">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
            ${JobOpportunity.jobBaseSalary}/month
          </div>
          {formatDistanceToNow(JobOpportunity.publishedDate, {
            locale: enUS,
            addSuffix: true,
          })}
        </div>
      </div>
    </>
  )
}

export default JobCard
