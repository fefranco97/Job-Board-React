interface companyDescription {
  id: string
  name: string
  logoPath: string
  logoAlt: string
}

interface jobOpportunityProps {
  JobOpportunity: {
    id: string
    jobTitle: string
    publishedDate: Date
    jobDescription: string
    jobBaseSalary: number
    typeOfPayment: string
    jobSkills: string[]
    totalApplicants: number
    company: companyDescription
  }
}

export default jobOpportunityProps
