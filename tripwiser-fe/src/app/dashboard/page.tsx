"use client"; // This marks the component as a Client Component

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";

const CalendarPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // Your component logic and JSX
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      {/* Render trips or other content */}
    </div>
  );
};

export default CalendarPage;
