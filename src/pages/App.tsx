import JobCard from '../components/JobCard'
import JobCardDescription from '../components/JobCardDescription'
import SearchInput from '../components/SearchInput'

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
      <div className="container mx-auto mt-10 flex justify-center gap-8 ">
        <div className="flex flex-col gap-8">
          <SearchInput />
          <div className="bg-zinc-100 p-5 rounded-3xl shadow-md">
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl">Search Results</h1>
              <p className="font-semibold">1.100 results found</p>
            </div>
            <div className="cotainer mx-auto grid grid-cols-2 gap-5 mt-5 justify-center ">
              <JobCard JobOpportunity={jobOpportunityMockup} />
              <JobCard JobOpportunity={jobOpportunityMockup} />
              <JobCard JobOpportunity={jobOpportunityMockup} />
              <JobCard JobOpportunity={jobOpportunityMockup} />
              <JobCard JobOpportunity={jobOpportunityMockup} />
              <JobCard JobOpportunity={jobOpportunityMockup} />
            </div>
          </div>
        </div>

        <JobCardDescription JobOpportunity={jobOpportunityMockup} />
      </div>
    </>
  )
}

export default App
