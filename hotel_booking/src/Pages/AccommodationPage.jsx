import React from "react";
import Heading from "../components/common/Heading";
import Rooms from "../components/home/Accommodation";

export default function AccommodationPage() {
  return (
    <>
      <Heading heading="AccommodationPage" title="Home" subtitle="AccommodationPage" />
      <Rooms />
    </>
  );
}