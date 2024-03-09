function SearchInput() {
  return (
    <>
      <div className="bg-zinc-100 p-5 rounded-3xl flex">
        <div className="flex items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            alt="Search"
            placeholder="Find a job"
            className="p-2 rounded-xl mr-5 bg-white w-full"
          />
        </div>
        <button
          className="rounded-2xl px-5 py-2 bg-pink-400 text-white font-semibold text-lg self-stretch "
          type="button">
          Search
        </button>
      </div>
    </>
  )
}

export default SearchInput
