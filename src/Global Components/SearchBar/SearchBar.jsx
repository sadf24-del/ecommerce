import React from 'react'
import styled from '@emotion/styled';

const SearchBar = () => {
  return (
    <>
        <SearchBarBlock className="searchBlock">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="ps-10 text-sm text-gray-900 border rounded-lg" placeholder="Search" required />
            </div>
        </SearchBarBlock>
    </>
  )
}

export default SearchBar;

export const SearchBarBlock = styled.form`
 input {
      font-size: 0.875rem; 
      color: #1f2937; 
      border: 1px solid var(--light-bg);
      background-color:var(--light-bg);
      height:40px;
      
      &::placeholder {
        color: #6b7280; 
      }

      &:focus {
        border-color: #4f46e5;
        outline: none;
      }
    
    }

`