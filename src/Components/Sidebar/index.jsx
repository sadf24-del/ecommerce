import React, { useState } from "react";
import styled from "@emotion/styled";

const Sidebar = ({ isActive }) => {


  // for sidebar

  return (
    <SidebarContainer className={isActive ? 'sidebar active' : 'sidebar'}>
      <div>
        <Logo src="/logo.png" alt="Logo"/>
      </div>
      <Menu>
        <MenuItem className="active">
          <ItemNumber>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 37 37"
              fill="none"
            >
              <path
                d="M8.89034 11.7672C12.8675 7.79001 14.8561 5.80141 17.263 5.42019C18.0404 5.29708 18.8322 5.29708 19.6096 5.42019C22.0164 5.80141 24.005 7.79001 27.9822 11.7672V11.7672C29.7138 13.4988 30.5796 14.3645 31.1189 15.4229C31.2972 15.773 31.4478 16.1366 31.5692 16.5102C31.9363 17.64 31.9363 18.8644 31.9363 21.3132V27.7213C31.9363 27.7213 31.9363 27.7213 31.9363 27.7213C31.9363 30.2066 29.9216 32.2213 27.4363 32.2213C27.4363 32.2213 27.4363 32.2213 27.4363 32.2213V32.2213C27.4363 32.2213 27.4363 32.2213 27.4363 32.2213C24.951 32.2213 22.9363 30.2066 22.9363 27.7213C22.9363 27.7213 22.9363 27.7213 22.9363 27.7213V26.2213C22.9363 26.2213 22.9363 26.2213 22.9363 26.2213C22.9363 23.736 20.9216 21.7213 18.4363 21.7213C18.4363 21.7213 18.4363 21.7213 18.4363 21.7213V21.7213C18.4363 21.7213 18.4363 21.7213 18.4363 21.7213C15.951 21.7213 13.9363 23.736 13.9363 26.2213C13.9363 26.2213 13.9363 26.2213 13.9363 26.2213V27.7213C13.9363 27.7213 13.9363 27.7213 13.9363 27.7213C13.9363 30.2066 11.9216 32.2213 9.43628 32.2213C9.43628 32.2213 9.43628 32.2213 9.43628 32.2213V32.2213C9.43628 32.2213 9.43628 32.2213 9.43628 32.2213C6.951 32.2213 4.93628 30.2066 4.93628 27.7213C4.93628 27.7213 4.93628 27.7213 4.93628 27.7213V21.3132C4.93628 18.8644 4.93628 17.64 5.30336 16.5102C5.42477 16.1366 5.57536 15.773 5.75373 15.4229C6.29302 14.3645 7.15879 13.4988 8.89034 11.7672V11.7672Z"
                fill="white"
                fill-opacity="0.43"
              />
            </svg>
          </ItemNumber>
        </MenuItem>
        <MenuItem>
          <ItemNumber>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 37 37"
              fill="none"
            >
              <path
                d="M5.28467 18.7152C5.28467 15.2206 5.28467 13.4733 5.85557 12.095C6.61678 10.2573 8.07684 8.79726 9.91455 8.03605C11.2928 7.46515 13.0401 7.46515 16.5347 7.46515H21.0347C24.5293 7.46515 26.2765 7.46515 27.6548 8.03605C29.4925 8.79726 30.9526 10.2573 31.7138 12.095C32.2847 13.4733 32.2847 15.2206 32.2847 18.7152V18.7152C32.2847 22.2097 32.2847 23.957 31.7138 25.3353C30.9526 27.173 29.4925 28.6331 27.6548 29.3943C26.2765 29.9652 24.5293 29.9652 21.0347 29.9652H16.5347C13.0401 29.9652 11.2928 29.9652 9.91455 29.3943C8.07684 28.6331 6.61678 27.173 5.85557 25.3353C5.28467 23.957 5.28467 22.2097 5.28467 18.7152V18.7152Z"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="2.25"
                stroke-linejoin="round"
              />
              <path
                d="M5.28467 12.7152L10.497 16.769C14.0214 19.5101 15.7836 20.8807 17.7966 21.1483C18.4528 21.2356 19.1177 21.2355 19.774 21.1483C21.7869 20.8805 23.5491 19.5099 27.0734 16.7686L32.2847 12.7152"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="2.25"
                stroke-linejoin="round"
              />
            </svg>
          </ItemNumber>
        </MenuItem>
        <MenuItem>
          <ItemNumber>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 37 37"
              fill="none"
            >
              <path
                d="M14.2847 8.21521V8.21521C12.8912 8.21521 12.1944 8.21521 11.6114 8.30755C8.40222 8.81583 5.88529 11.3328 5.37701 14.542C5.28467 15.1249 5.28467 15.8217 5.28467 17.2152V20.2152C5.28467 24.4156 5.28467 26.5158 6.10212 28.1201C6.82117 29.5314 7.96852 30.6787 9.37974 31.3978C10.9841 32.2152 13.0843 32.2152 17.2847 32.2152H20.2847C24.4851 32.2152 26.5853 32.2152 28.1896 31.3978C29.6008 30.6787 30.7482 29.5314 31.4672 28.1201C32.2847 26.5158 32.2847 24.4156 32.2847 20.2152V17.2152C32.2847 15.8217 32.2847 15.1249 32.1923 14.542C31.684 11.3328 29.1671 8.81583 25.9579 8.30755C25.3749 8.21521 24.6782 8.21521 23.2847 8.21521V8.21521M14.2847 8.21521V10.4652M14.2847 8.21521V5.21521M14.2847 8.21521H23.2847M23.2847 8.21521V5.21521M23.2847 8.21521V10.4652M15.9516 18.2635H15.0933C13.5874 18.2635 12.8344 18.2635 12.6135 18.6116C12.5458 18.7183 12.5061 18.8403 12.4982 18.9664C12.4723 19.3779 13.0815 19.8205 14.2998 20.7056L14.9942 21.2101C15.3331 21.4564 15.5026 21.5795 15.5846 21.7538C15.6114 21.8107 15.6309 21.8708 15.6427 21.9326C15.6788 22.1217 15.6141 22.321 15.4846 22.7195L15.2194 23.5357C14.754 24.968 14.5213 25.6841 14.7841 26.0018C14.8647 26.0991 14.9685 26.1746 15.0859 26.2211C15.4693 26.3728 16.0785 25.9303 17.2968 25.0451L17.9912 24.5406C18.3301 24.2943 18.4996 24.1712 18.6907 24.147C18.7531 24.1392 18.8162 24.1392 18.8787 24.147C19.0697 24.1712 19.2392 24.2943 19.5782 24.5406L20.2725 25.0451C21.4909 25.9303 22.1 26.3728 22.4834 26.2211C22.6009 26.1746 22.7047 26.0991 22.7852 26.0018C23.048 25.6841 22.8153 24.968 22.35 23.5357L22.0847 22.7195C21.9553 22.321 21.8905 22.1217 21.9266 21.9326C21.9384 21.8708 21.9579 21.8107 21.9847 21.7538C22.0667 21.5795 22.2362 21.4564 22.5752 21.2101L23.2695 20.7056C24.4879 19.8205 25.097 19.3779 25.0711 18.9664C25.0632 18.8403 25.0236 18.7183 24.9559 18.6116C24.7349 18.2635 23.982 18.2635 22.476 18.2635H21.6177C21.1987 18.2635 20.9892 18.2635 20.8205 18.1707C20.7654 18.1404 20.7143 18.1033 20.6684 18.0602C20.528 17.9284 20.4633 17.7291 20.3338 17.3306L20.0686 16.5144C19.6032 15.0821 19.3705 14.366 18.9712 14.2635C18.8488 14.2321 18.7205 14.2321 18.5981 14.2635C18.1988 14.366 17.9661 15.0821 17.5007 16.5144L17.2355 17.3306C17.106 17.7291 17.0413 17.9284 16.9009 18.0602C16.8551 18.1033 16.804 18.1404 16.7488 18.1707C16.5801 18.2635 16.3706 18.2635 15.9516 18.2635Z"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ItemNumber>
        </MenuItem>
        <MenuItem>
          <ItemNumber>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 37 37"
              fill="none"
            >
              <path
                d="M5.28467 19.5165V20.7165C5.28467 25.2162 5.28467 27.4661 6.43057 29.0433C6.80064 29.5526 7.24859 30.0006 7.75796 30.3706C9.33515 31.5165 11.585 31.5165 16.0847 31.5165H21.4847C25.9843 31.5165 28.2342 31.5165 29.8114 30.3706C30.3207 30.0006 30.7687 29.5526 31.1388 29.0433C32.2847 27.4661 32.2847 25.2162 32.2847 20.7165V19.5165M5.28467 19.5165V19.5165C5.28467 16.7209 5.28467 15.3231 5.74139 14.2204C6.35035 12.7503 7.5184 11.5822 8.98857 10.9733C10.0912 10.5165 11.489 10.5165 14.2847 10.5165H23.2847C26.0803 10.5165 27.4781 10.5165 28.5808 10.9733C30.0509 11.5822 31.219 12.7503 31.8279 14.2204C32.2847 15.3231 32.2847 16.7209 32.2847 19.5165V19.5165M5.28467 19.5165H32.2847M15.7847 15.0165H21.7847M12.7847 10.5165V10.5165C12.7847 7.20283 15.471 4.51654 18.7847 4.51654V4.51654C22.0984 4.51654 24.7847 7.20283 24.7847 10.5165V10.5165"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ItemNumber>
        </MenuItem>
      </Menu>
      <ToggleButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M18.4302 18.4494H31.9302M31.9302 18.4494L28.1802 14.6994M31.9302 18.4494L28.1802 22.1994M22.9302 13.1994V13.0494C22.9302 9.67464 22.9302 7.98726 22.0708 6.80437C21.7932 6.42234 21.4572 6.08638 21.0752 5.80883C19.8923 4.9494 18.2049 4.9494 14.8302 4.9494H13.0302C9.65542 4.9494 7.96804 4.9494 6.78514 5.80883C6.40312 6.08638 6.06716 6.42234 5.7896 6.80437C4.93018 7.98726 4.93018 9.67464 4.93018 13.0494V23.8494C4.93018 27.2242 4.93018 28.9115 5.7896 30.0944C6.06716 30.4765 6.40312 30.8124 6.78514 31.09C7.96804 31.9494 9.65542 31.9494 13.0302 31.9494H14.8302C18.2049 31.9494 19.8923 31.9494 21.0752 31.09C21.4572 30.8124 21.7932 30.4765 22.0708 30.0944C22.9302 28.9115 22.9302 27.2242 22.9302 23.8494V23.6994"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;

export const SidebarContainer = styled.div`
  position: fixed;
  height: 100%;
  padding: 24px 0px;
  width: 80px;
  background: #242038;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;


export const Logo = styled.img`
  width: 40px; /* Adjust logo size */
  height: auto;
  cursor: pointer;
  margin-bottom: 20px; /* Space below the logo */
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const MenuItem = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: ${({ isExpanded }) => (isExpanded ? 'flex-start' : 'center')};
  margin-bottom: 8px;
  padding: 8px;

  &.active {
    background-color: rgba(255, 255, 255, 0.1);
    border-left: 4px solid #ff7952;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-left: 4px solid #ff7952;
  }
`;

export const ItemNumber = styled.p`
  margin-right: 10px;
  color: #fff;
  font-size: 16px; /* Adjust as needed */
`;

export const ItemLabel = styled.span`
  color: #b8b8b8;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: ${({ isExpanded }) =>
    isExpanded ? "inline" : "none"}; /* Only visible when expanded */
  margin-left: 10px; /* Add some space between number and label */
`;

export const ToggleButton = styled.button`
  margin-top: auto; /* Position button at the bottom */
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: transparent;
  }
`;
