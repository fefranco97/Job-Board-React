import JobCard from '../components/JobCard'
import JobCardDescription from '../components/JobCardDescription'

const jobOpportunityMockup = {
  id: crypto.randomUUID().toString(),
  jobTitle: 'Backend .Net Developer',
  publishedDate: new Date(),
  jobDescription:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae rerum blanditiis atque sunt tempora tenetur eligendi a, deserunt, ad, dolorum velit dolores voluptatibus quia facilis. Quidem ipsum ducimus enim illo! Veniam, aliquid nulla eius qui ratione ipsam pariatur provident maiores iusto maxime, aperiam at illum praesentium dolore delectus deserunt suscipit unde aspernatur animi, a corporis laboriosam quibusdam fugiat similique. Ad!',
  jobBaseSalary: 13,
  typeOfPayment: 'teste',
  jobSkills: ['Azure', 'C#', 'Angular', 'Fullstack'],
  totalApplicants: 100,
  company: {
    id: crypto.randomUUID().toString(),
    name: 'Netflix',
    logoPath: 'https://via.placeholder.com/150',
    logoAlt: 'Netflix Logo',
  },
}

function App() {
  return (
    <>
      <div className="container mx-auto flex gap-7 ">
        <JobCard JobOpportunity={jobOpportunityMockup} />
        <JobCardDescription JobOpportunity={jobOpportunityMockup} />
      </div>
    </>
  )
}

export default App
