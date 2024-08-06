import React from "react";
import { ChartTitle, TwoGrid } from "../MiddleDataCards";
import TableLayout from "../../Global Components/Table";
import Card, { CardBlock } from "../../Global Components/Card";
import ReviewBlock from "../../Global Components/Review";

const BottomData = () => {
  const data = [
    {
      customer: "Wadden Warren",
      orderNo: "166578",
      amount: "$123.76",
      status: "Delivered",
      image: "/user-first.png",
    },
    {
      customer: "Jane Cooper",
      orderNo: "166578",
      amount: "$186.76",
      status: "Delivered",
      image: "/user-second.png",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "166578",
      amount: "$123.76",
      status: "Cancelled",
      image: "/user-third.png",
    },
    {
      customer: "Kristin Watson",
      orderNo: "166578",
      amount: "$197.76",
      status: "Delivered",
      image: "/user-third.png",
    },
    {
      customer: "Cody Fisher",
      orderNo: "166578",
      amount: "$178.76",
      status: "Cancelled",
      image: "/user-third.png",
    },
  ];
  return (
    <TwoGrid>
      <CardBlock>
        <TableLayout rows={data} />
      </CardBlock>
      <CardBlock >
        <ChartTitle className="text-white pb-4">Customers Feedback</ChartTitle>
        <div className="review-cards overflow-hidden">
          <ReviewBlock
            userImage="/user-first.png"
            userName="Jenny Wilson"
            starsImage="/full-stars.svg"
            reviewText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          />
          <ReviewBlock
            userImage="/user-second.png"
            userName="John Doe"
            starsImage="/full-stars.svg"
            reviewText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          />
          <ReviewBlock
            userImage="/user-second.png"
            userName="John Doe"
            starsImage="/full-stars.svg"
            reviewText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          />
        </div>
      </CardBlock>
    </TwoGrid>
  );
};

export default BottomData;
