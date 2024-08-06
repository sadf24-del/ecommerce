import React from 'react'
import Card, { CardBlock } from '../../Global Components/Card/Card';
import styled from 'styled-components';
import ActivityChart from '../../Global Components/Chart/Chart';
import Dropdown from '../../Global Components/Dropdown/Dropdown';

const MiddleData = () => {
  return (
    <>
        <TwoGrid>
            <CardBlock>
                <div className='flex justify-between'>
                    <ChartTitle className='text-white'>Activity</ChartTitle>
                    <Dropdown></Dropdown>
                </div>
                <ActivityChart/>
            </CardBlock>
            <CardBlock>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src='/completed.svg'></img>
                        <CardSubTitle className='mt-4 text-white ms-3'>Completed</CardSubTitle>
                    </div>
                    <ArrowButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 37" fill="none">
                            <path d="M18.4177 12.7665V18.0165M18.4177 18.0165V23.2665M18.4177 18.0165H13.1677M18.4177 18.0165H23.6677" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.91772 18.0165C4.91772 10.5607 10.9619 4.51654 18.4177 4.51654C25.8736 4.51654 31.9177 10.5607 31.9177 18.0165C31.9177 25.4724 25.8736 31.5165 18.4177 31.5165C10.9619 31.5165 4.91772 25.4724 4.91772 18.0165Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ArrowButton>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <img src='/reviews.svg'></img>
                        <CardSubTitle className='mt-4 text-white ms-3'>Reviews</CardSubTitle>
                    </div>
                    <ArrowButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 37" fill="none">
                            <path d="M18.4177 12.7665V18.0165M18.4177 18.0165V23.2665M18.4177 18.0165H13.1677M18.4177 18.0165H23.6677" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.91772 18.0165C4.91772 10.5607 10.9619 4.51654 18.4177 4.51654C25.8736 4.51654 31.9177 10.5607 31.9177 18.0165C31.9177 25.4724 25.8736 31.5165 18.4177 31.5165C10.9619 31.5165 4.91772 25.4724 4.91772 18.0165Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ArrowButton>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <img src='/working.svg'></img>
                        <CardSubTitle className='mt-4 text-white ms-3'>Working</CardSubTitle>
                    </div>
                    <ArrowButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 37" fill="none">
                            <path d="M18.4177 12.7665V18.0165M18.4177 18.0165V23.2665M18.4177 18.0165H13.1677M18.4177 18.0165H23.6677" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.91772 18.0165C4.91772 10.5607 10.9619 4.51654 18.4177 4.51654C25.8736 4.51654 31.9177 10.5607 31.9177 18.0165C31.9177 25.4724 25.8736 31.5165 18.4177 31.5165C10.9619 31.5165 4.91772 25.4724 4.91772 18.0165Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ArrowButton>
                </div>
            </CardBlock>
        </TwoGrid>
    </>
  )
}

export default MiddleData;

export const ChartTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: normal;
`

export const TwoGrid = styled.div`
 display:grid;
 grid-template-columns: 62.5% 35%;
 gap:12px;
 margin-top:24px;
@media (max-width: 767px) {
   grid-template-columns: 100%;
}
`

export const CardSubTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
`

export const ArrowButton = styled.button``