import React from 'react'
import Card, { CardBlock } from '../../Global Components/Card';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TopFourCards = () => {

  const percentage = 70;

  return (
    <div>
         <TopGrids>
            <CardBlock>
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <rect x="0.697357" y="0.188538" width="39.9667" height="39.9667" rx="8.32639" fill="#FF7952" fill-opacity="0.4"/>
                <path d="M29.007 20.6881V22.4033C29.007 22.8696 28.624 23.2526 28.1494 23.2526H26.5424C25.6432 23.2526 24.8189 22.5948 24.7439 21.6956C24.694 21.171 24.8938 20.6797 25.2435 20.3384C25.5516 20.022 25.9762 19.8388 26.4425 19.8388H28.1494C28.624 19.8388 29.007 20.2218 29.007 20.6881Z" fill="#FF7952"/>
                <path d="M23.4948 21.8038C23.4199 20.9296 23.7363 20.072 24.3691 19.4475C24.902 18.9063 25.643 18.5899 26.4423 18.5899H26.9169C27.1501 18.5899 27.3416 18.3984 27.3083 18.1652C27.0835 16.5499 25.6846 15.3009 24.011 15.3009H15.6847C13.8445 15.3009 12.3541 16.7914 12.3541 18.6315V24.46C12.3541 26.3001 13.8445 27.7905 15.6847 27.7905H24.011C25.693 27.7905 27.0835 26.5416 27.3083 24.9262C27.3416 24.6931 27.1501 24.5016 26.9169 24.5016H26.5423C24.9602 24.5016 23.628 23.3192 23.4948 21.8038ZM21.5131 20.0886H16.5173C16.1759 20.0886 15.8928 19.8138 15.8928 19.4641C15.8928 19.1144 16.1759 18.8396 16.5173 18.8396H21.5131C21.8545 18.8396 22.1376 19.1227 22.1376 19.4641C22.1376 19.8055 21.8545 20.0886 21.5131 20.0886Z" fill="#FF7952"/>
                <path d="M22.5207 13.4941C22.7372 13.7189 22.5457 14.0519 22.2293 14.0519H15.7098C14.8022 14.0519 13.9529 14.3184 13.2451 14.7763C12.9204 14.9845 12.4791 14.7597 12.6373 14.4017C13.1036 13.3109 14.1943 12.5532 15.4516 12.5532H20.1311C21.0969 12.5532 21.9545 12.8946 22.5207 13.4941Z" fill="#FF7952"/>
              </svg>
              <CardSubTitle className='mt-2 text-white'>Balance</CardSubTitle>
              <div className='flex items-center justify-between mt-4'>
                    <CardCount className='text-white'>76</CardCount>
                    <ProgressCount  status="up" >+3%</ProgressCount>
              </div>
            </CardBlock>
            <CardBlock>
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <rect x="0.497566" y="0.188538" width="39.9667" height="39.9667" rx="8.32639" fill="#1FCB4F" fill-opacity="0.4"/>
                <path d="M20.4313 12.0203L18.4246 16.6914H16.418C16.0849 16.6914 15.7602 16.7164 15.4438 16.783L16.2764 14.7846L16.3097 14.7097L16.3597 14.5765C16.3846 14.5182 16.4013 14.4682 16.4263 14.4266C17.3921 12.1868 18.4746 11.4874 20.4313 12.0203Z" fill="#1FCB4F"/>
                <path d="M26.0848 16.9162L26.0682 16.9079C25.5686 16.7664 25.0607 16.6914 24.5444 16.6914H19.3321L21.2056 12.3367L21.2305 12.2784C21.3471 12.3201 21.472 12.3784 21.5969 12.42L23.437 13.1943C24.4612 13.619 25.1772 14.0603 25.6185 14.5932C25.6935 14.6931 25.7601 14.7847 25.8267 14.8929C25.9016 15.0095 25.9599 15.1261 25.9932 15.251C26.0265 15.3259 26.0515 15.3925 26.0682 15.4674C26.1931 15.8921 26.2014 16.375 26.0848 16.9162Z" fill="#1FCB4F"/>
                <path d="M20.9141 24.8845H21.1222C21.372 24.8845 21.5802 24.6597 21.5802 24.385C21.5802 24.0352 21.4802 23.9853 21.2638 23.902L20.9141 23.7771V24.8845Z" fill="#1FCB4F"/>
                <path d="M25.7186 18.1069C25.3439 17.9986 24.9525 17.9403 24.5445 17.9403H16.418C15.8518 17.9403 15.3189 18.0486 14.8193 18.2651C13.3705 18.8895 12.3547 20.33 12.3547 22.0036V23.6273C12.3547 23.8271 12.3714 24.0186 12.3963 24.2184C12.5795 26.8662 13.995 28.2817 16.6428 28.4566C16.8343 28.4815 17.0258 28.4982 17.234 28.4982H23.7286C26.8093 28.4982 28.433 27.0328 28.5912 24.1185C28.5995 23.9603 28.6078 23.7938 28.6078 23.6273V22.0036C28.6078 20.1635 27.3838 18.6148 25.7186 18.1069ZM21.547 23.086C21.9301 23.2193 22.4463 23.5024 22.4463 24.385C22.4463 25.1427 21.8551 25.7505 21.1224 25.7505H20.9142V25.9337C20.9142 26.1751 20.7227 26.3666 20.4813 26.3666C20.2398 26.3666 20.0483 26.1751 20.0483 25.9337V25.7505H19.9734C19.174 25.7505 18.5162 25.0761 18.5162 24.2434C18.5162 24.0019 18.7077 23.8104 18.9492 23.8104C19.1907 23.8104 19.3822 24.0019 19.3822 24.2434C19.3822 24.5931 19.6486 24.8845 19.9734 24.8845H20.0483V23.4774L19.4155 23.2526C19.0325 23.1194 18.5162 22.8363 18.5162 21.9537C18.5162 21.196 19.1074 20.5881 19.8401 20.5881H20.0483V20.4049C20.0483 20.1635 20.2398 19.972 20.4813 19.972C20.7227 19.972 20.9142 20.1635 20.9142 20.4049V20.5881H20.9892C21.7885 20.5881 22.4463 21.2626 22.4463 22.0952C22.4463 22.3367 22.2548 22.5282 22.0133 22.5282C21.7719 22.5282 21.5803 22.3367 21.5803 22.0952C21.5803 21.7455 21.3139 21.4541 20.9892 21.4541H20.9142V22.8612L21.547 23.086Z" fill="#1FCB4F"/>
                <path d="M19.3821 21.9537C19.3821 22.3035 19.482 22.3534 19.6985 22.4367L20.0482 22.5616V21.4542H19.8401C19.582 21.4542 19.3821 21.679 19.3821 21.9537Z" fill="#1FCB4F"/>
              </svg>
              <CardSubTitle className='mt-2 text-white'>Balance</CardSubTitle>
              <div className='flex items-center justify-between mt-4'>
                    <CardCount className='text-white'>76</CardCount>
                    <ProgressCount status="down" >- 3%</ProgressCount>
              </div>
            </CardBlock>
            <CardBlock>
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <rect x="0.297287" y="0.188538" width="39.9667" height="39.9667" rx="8.32639" fill="#8204FF" fill-opacity="0.4"/>
                <path d="M28.6066 16.4666C28.6066 17.0162 28.157 17.4658 27.6074 17.4658H12.953C12.4034 17.4658 11.9538 17.0162 11.9538 16.4666V16.4583C11.9538 14.5516 13.4942 13.0112 15.4009 13.0112H25.1511C27.0579 13.0112 28.6066 14.5599 28.6066 16.4666Z" fill="#8204FF"/>
                <path d="M11.9538 19.7139V23.8854C11.9538 25.7922 13.4942 27.3325 15.4009 27.3325H25.1511C27.0579 27.3325 28.6066 25.7838 28.6066 23.8771V19.7139C28.6066 19.1643 28.157 18.7147 27.6074 18.7147H12.953C12.4034 18.7147 11.9538 19.1643 11.9538 19.7139ZM16.9496 24.5432H15.2844C14.943 24.5432 14.6599 24.2601 14.6599 23.9187C14.6599 23.5773 14.943 23.2942 15.2844 23.2942H16.9496C17.291 23.2942 17.5741 23.5773 17.5741 23.9187C17.5741 24.2601 17.291 24.5432 16.9496 24.5432ZM22.3618 24.5432H19.0312C18.6899 24.5432 18.4068 24.2601 18.4068 23.9187C18.4068 23.5773 18.6899 23.2942 19.0312 23.2942H22.3618C22.7032 23.2942 22.9863 23.5773 22.9863 23.9187C22.9863 24.2601 22.7032 24.5432 22.3618 24.5432Z" fill="#8204FF"/>
              </svg>
              <CardSubTitle className='mt-2 text-white'>Balance</CardSubTitle>
              <div className='flex items-center justify-between mt-4'>
                    <CardCount className='text-white'>76</CardCount>
                    <ProgressCount status="down" >- 3%</ProgressCount>
              </div>
            </CardBlock>
            <CardBlock>
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <rect x="0.0974731" y="0.188538" width="39.9667" height="39.9667" rx="8.32639" fill="#BD20CB" fill-opacity="0.4"/>
                <path d="M20.7053 23.4358H21.2465C21.7877 23.4358 22.2373 22.9528 22.2373 22.37C22.2373 21.6456 21.9792 21.504 21.5546 21.3542L20.7136 21.0627V23.4358H20.7053Z" fill="#BD20CB"/>
                <path d="M20.0559 11.7622C15.4597 11.7789 11.7378 15.5174 11.7545 20.1136C11.7711 24.7098 15.5097 28.4317 20.1058 28.415C24.702 28.3983 28.4239 24.6598 28.4072 20.0636C28.3906 15.4675 24.652 11.7539 20.0559 11.7622ZM21.9626 20.1719C22.6121 20.3967 23.4863 20.8796 23.4863 22.37C23.4863 23.6523 22.4788 24.6848 21.2465 24.6848H20.7053V25.1677C20.7053 25.5091 20.4222 25.7922 20.0808 25.7922C19.7395 25.7922 19.4564 25.5091 19.4564 25.1677V24.6848H19.1566C17.7911 24.6848 16.6837 23.5357 16.6837 22.1202C16.6837 21.7789 16.9668 21.4958 17.3082 21.4958C17.6495 21.4958 17.9326 21.7789 17.9326 22.1202C17.9326 22.8446 18.4822 23.4358 19.1566 23.4358H19.4564V20.6215L18.1991 20.1719C17.5496 19.9471 16.6753 19.4641 16.6753 17.9737C16.6753 16.6914 17.6828 15.659 18.9151 15.659H19.4564V15.176C19.4564 14.8347 19.7395 14.5516 20.0808 14.5516C20.4222 14.5516 20.7053 14.8347 20.7053 15.176V15.659H21.0051C22.3706 15.659 23.478 16.808 23.478 18.2235C23.478 18.5649 23.1949 18.848 22.8535 18.848C22.5121 18.848 22.229 18.5649 22.229 18.2235C22.229 17.4991 21.6795 16.9079 21.0051 16.9079H20.7053V19.7222L21.9626 20.1719Z" fill="#BD20CB"/>
                <path d="M17.9325 17.982C17.9325 18.7064 18.1906 18.8479 18.6153 18.9978L19.4562 19.2892V16.9079H18.915C18.3738 16.9079 17.9325 17.3908 17.9325 17.982Z" fill="#BD20CB"/>
              </svg>
              <CardSubTitle className='mt-2 text-white'>Balance</CardSubTitle>
              <div className='flex items-center justify-between mt-4'>
                    <CardCount className='text-white'>76</CardCount>
                    <ProgressCount status="up" >+3%</ProgressCount>
              </div>
            </CardBlock>
            <CardBlock>
                <NetProfitCard className='flex justify-between items-center'>
                    <div>
                        <CardSubTitle className=' text-white'>Balance</CardSubTitle>
                        <CardCount className='text-white NetProfitCount mt-5'>$6759.525</CardCount>
                        <ProgressCount className='mt-4'  status="up" >+3%</ProgressCount>
                    </div>
                    <div style={{ width: '122px', height: '122px' }}>
                        <CircularProgressbar 
                        value={percentage} text={`${percentage}%`} 
                        />
                    </div>
                </NetProfitCard>
            </CardBlock>
          </TopGrids>
    </div>
  )
}

export default TopFourCards;

export const CardSubTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
`
export const CardCount = styled.h2`
    font-size: 28px;
    font-weight: 700;
    line-height: normal;
`
export const ProgressCount = styled.p`
    font-weight:600;
    font-size:14px;
    color: ${({ status }) =>
    status === 'up' ? 'rgb(1, 181, 116);' :
    status === 'down' ? 'rgb(227, 26, 26);' :
    ''};
`
export const TopGrids = styled.div`
    display: grid;
    grid-template-columns: 15% 15% 15% 15% 35%;
    gap: 12px;

    @media (max-width: 767px) {
        grid-template-columns: 48% 48%; 
        grid-template-rows: auto auto;
       
        & > :nth-child(5) {
            grid-column: 1 / -1; 
        }
    }
`;
export const NetProfitCard = styled.div`
 .NetProfitCount {
    font-size: 40px;
    color: #ffffff;
    @media (max-width: 767px) {
       font-size: 24px;
    }
  }
`
