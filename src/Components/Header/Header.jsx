import React, { useState } from "react";
import styled from "@emotion/styled";
import SearchBar from "../../Global Components/SearchBar/SearchBar";
import { Logo } from "../Sidebar/Sidebar";
import ProfileDropdown from "../../Global Components/Profile/Profile";

const Header = ({ onClick }) => {

  return (
    <>
      <HeaderBlock className="px-4">
          <SearchBar></SearchBar>
          <Logo src="/logo.png" className="mb-0" alt="Logo"/>
          <div className="flex items-center">
              <HeaderIcon className="p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 37" fill="none">
                    <path d="M22.4849 18.2283C22.4849 20.2994 20.8059 21.9783 18.7349 21.9783C16.6638 21.9783 14.9849 20.2994 14.9849 18.2283C14.9849 16.1573 16.6638 14.4783 18.7349 14.4783C20.8059 14.4783 22.4849 16.1573 22.4849 18.2283Z" stroke="white" stroke-width="2.25"/>
                    <path d="M14.4785 7.26709C15.298 6.34508 15.7078 5.88408 16.1199 5.58984C17.6843 4.47277 19.7855 4.47277 21.3499 5.58984C21.762 5.88408 22.1717 6.34508 22.9912 7.26709V7.26709C23.2517 7.56021 23.382 7.70677 23.521 7.83864C24.0359 8.32714 24.659 8.68692 25.3395 8.88859C25.5232 8.94303 25.7153 8.98256 26.0994 9.06163V9.06163C27.3077 9.31033 27.9118 9.43468 28.3726 9.64442C30.1222 10.4407 31.1728 12.2604 30.9876 14.1737C30.9388 14.6777 30.7445 15.2631 30.3557 16.4338V16.4338C30.2322 16.806 30.1704 16.9921 30.1257 17.1784C29.9601 17.8686 29.9601 18.5881 30.1257 19.2783C30.1704 19.4646 30.2322 19.6507 30.3557 20.0229V20.0229C30.7445 21.1936 30.9388 21.7789 30.9876 22.2829C31.1728 24.1963 30.1222 26.016 28.3726 26.8122C27.9118 27.022 27.3077 27.1463 26.0994 27.395V27.395C25.7153 27.4741 25.5232 27.5136 25.3395 27.5681C24.659 27.7697 24.0359 28.1295 23.521 28.618C23.382 28.7499 23.2517 28.8965 22.9912 29.1896V29.1896C22.1717 30.1116 21.762 30.5726 21.3499 30.8668C19.7855 31.9839 17.6843 31.9839 16.1199 30.8668C15.7078 30.5726 15.298 30.1116 14.4785 29.1896V29.1896C14.218 28.8965 14.0877 28.7499 13.9487 28.618C13.4338 28.1295 12.8107 27.7697 12.1302 27.5681C11.9465 27.5136 11.7544 27.4741 11.3703 27.395V27.395C10.1621 27.1463 9.55797 27.022 9.09712 26.8122C7.34751 26.016 6.2969 24.1963 6.48211 22.2829C6.53089 21.7789 6.72526 21.1936 7.11399 20.0229V20.0229C7.23758 19.6507 7.29937 19.4646 7.34408 19.2783C7.50968 18.5881 7.50968 17.8686 7.34408 17.1784C7.29937 16.9921 7.23758 16.806 7.11399 16.4338V16.4338C6.72526 15.2631 6.53089 14.6777 6.48211 14.1738C6.2969 12.2604 7.34751 10.4407 9.09712 9.64442C9.55798 9.43468 10.1621 9.31033 11.3703 9.06163V9.06163C11.7544 8.98256 11.9465 8.94303 12.1302 8.88859C12.8107 8.68692 13.4338 8.32714 13.9487 7.83864C14.0877 7.70677 14.218 7.56021 14.4785 7.26709V7.26709Z" stroke="white" stroke-width="2.25"/>
                  </svg>
              </HeaderIcon>
              <ProfileDropdown></ProfileDropdown>
              <button onClick={onClick} className="ms-2 block md:hidden lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
          </div>
      </HeaderBlock>
      ;
    </>
  );
};

export default Header;

export const HeaderBlock = styled.div`
  position: fixed;
  background: #242038;
  width: calc(100% - 80px);
  height: 80px;
  top: 0px;
  left: 80px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  z-index:11;
  
  @media (max-width: 768px) {
     width: 100%;
     left:0px;
     height: 58px;
  }
`;


export const HeaderIcon = styled.button`
  background-color: var(--light-bg);
`

export const ProfileIcon = styled.img`
  max-width:38px;
  width:38px;
`