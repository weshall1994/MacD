import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CurrencyRupeeIcon, StarIcon } from '@heroicons/react/solid'
function TopBar() {
  return (
    <div className="bg-red-500 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:py-6 md:py-1 sm:px-2 lg:px-4 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="flex items-center text-sm text-gray-300">
              <h2 className="text-3xl font-extrabold text-yellow-400 sm:text-3xl sm:tracking-tight lg:text-4xl">
                McDonald's
              </h2>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="flex items-center text-sm text-yellow-300">
              <StarIcon className="h-4 w-4" /> &nbsp;
              4.3 &nbsp;|&nbsp; 35 mins &nbsp;|&nbsp;
              <CurrencyRupeeIcon className="h-4 w-4" />&nbsp;
              400 for two
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-1 flex items-center text-sm text-gray-300">
              <div className="bg-white shadow rounded-md p-1 flex">
                <span className="w-auto flex justify-end items-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input className="ml-2 shadow appearance-none border-0 focus:border-0 focus:ring-white rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search for dishes..." />
              </div>
              <div className="bg-white shadow- rounded-md p-2 flex m-4">
                <label className="md:w-32 block px-2 md:px-0 -ml-4 text-gray-500 font-bold">
                  <input className="md:mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm md:whitespace-nowrap">
                    Veg
                  </span>
                </label>
              </div>
              <div className="bg-white shadow- rounded-md p-2 flex">
                <div className="flex items-center text-sm text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <h1 className={"text-gray-500 font-bold text-sm ml-1"}>favourite</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
