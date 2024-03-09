import { Button, Input, SearchField } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const button = tv({
  base: ['flex items-center justify-center transition-all outline-none'],
  variants: {
    variant: {
      primary: [
        'bg-pink-500 text-gray-50 ring-pink-500 rounded-2xl py-2 px-3 font-medium',
        'hover:ring-2 hover:bg-transparent hover:text-pink-500',
        'focus-visible:ring-2 focus-visible:ring-offset-2',
      ],
      link: ['text-pink-500 underline-offset-4 decoration-2'],
    },
    isPressed: {
      true: ['scale-95'],
    },
  },
})

const input = tv({
  base: [
    'outline-none transition-all selection:bg-pink-200 focus:border-pink-400 border-2 border-gray-300 px-3 py-2 bg-white',
  ],
})

function SearchInput() {
  return (
    <>
      <div className="flex items-center gap-4 lg:col-span-1 lg:row-start-1 flex-wrap bg-zinc-100 p-5 rounded-3xl">
        <SearchField className="flex-1 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-950/40 absolute top-1/2 -translate-y-1/2 left-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <Input
            className={input({
              class: 'rounded-2xl placeholder:text-gray-950/40 w-full min-w-32 pl-12',
            })}
            placeholder="Find a job"
          />
        </SearchField>
        <Button className={(states) => button({ ...states, variant: 'primary', class: 'px-8' })}>
          Search
        </Button>
      </div>
    </>
  )
}

export default SearchInput
