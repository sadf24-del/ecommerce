import React from "react";
import styled from "styled-components";

const ReviewBlock = ({ userImage, userName, reviewText, starsImage }) => {
  return (
    <div>
      <div>
        <div className="flex items-center">
          <UserImage src={userImage} alt="User" />
          <UserName className="text-white ms-3">{userName}</UserName>
        </div>
        <img src={starsImage} className="mt-4" alt="Stars" />
        <ReviewPara className="text-gray-400 mt-4">{reviewText}</ReviewPara>
      </div>
    </div>
  );
};

export default ReviewBlock;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;

export const ReviewPara = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

export const CustomerFeedBack = styled.div`
    
`