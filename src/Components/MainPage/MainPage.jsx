import React,  { useState, useEffect }  from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import TopFourCards from '../TopDataCards/TopDataCards';
import { BarChart } from '@mui/x-charts';
import MiddleData, { ChartTitle } from '../MiddleDataCards/MiddleDataCards';
import BottomData from '../BottomCards/BottomData';
import styled from 'styled-components';

const MainContent = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    if (isSidebarActive) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isSidebarActive]);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };
  return (
    <>
        <Sidebar  isActive={isSidebarActive}></Sidebar>
        <Header onClick={toggleSidebar}></Header>
        <div className='main-content-block'>
          <MainTitle className='text-white'>Dashboard</MainTitle>
          <TopFourCards></TopFourCards>
          <MiddleData></MiddleData>
          <BottomData></BottomData>
        </div>
    </>
  )
}

export default MainContent;

export const MainTitle = styled.h1`
  font-size:40px;
  font-weight:700;
  margin-bottom:24px;
`