"use client";

import { Truck } from "../../types/truck";
import css from "./InfoTruck.module.css";
import FeaturesTruck from "../FeaturesTruck/FeaturesTruck";
import { useState } from "react";
import ReviewsTruck from "../TruckReviews/TruckReviews";
import FormBooking from "../BookingForm/BookingForm";

interface DataTruckProps {
  truck: Truck;
}

export default function DataTruck({ truck }: DataTruckProps) {
  const [infoOpen, setInfoOpen] = useState<"feature" | "reviews">("feature");

  return (
    <>
      <div className={css.btnBox}>
        <button
          className={`${css.btnInfo} ${infoOpen === "feature" ? css.accentBtn : ""}`}
          type="button"
          onClick={() => setInfoOpen("feature")}
        >
          <span className={css.btnText}>Features</span>
        </button>
        <button
          className={`${css.btnInfo} ${infoOpen === "reviews" ? css.accentBtn : ""}`}
          type="button"
          onClick={() => setInfoOpen("reviews")}
        >
          <span className={css.btnText}>Reviews</span>
        </button>
      </div>
      <div className={css.infoBookingBox}>
        {infoOpen === "feature" && <FeaturesTruck truck={truck} />}
        {infoOpen === "reviews" && <ReviewsTruck reviews={truck.reviews} />}

        <FormBooking truck={truck} />
      </div>
    </>
  );
}
