"use client";
import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import { places } from "@/lib/data";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

import { labels } from "@/lib/labels";

export default function Trending() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: (
            <ArrowCircleRightIcon className="text-green-600 text-3xl" />
          ),
        }}
        backwardBtnProps={{
          children: <ArrowCircleLeftIcon className="text-green-600 text-3xl" />,
        }}
        speed={400}
      >
       
      </Carousel>
    </div>
  );
}
