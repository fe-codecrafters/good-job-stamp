"use client";

import { useEffect, useState } from "react";
import { Calendar } from "@/components/Calendar";
import TabBar from "@/components/TabBar";
import { ObjectiveProgressBar } from "@/components/ObjectiveProgressBar";
import { Header } from "@/components/Header";
import { CalendarHeader } from "@/components/CalendarHeader";
import { Objective } from "@/components/Objective";

const DEV = process.env.NODE_ENV === "development";

export default function CalendarPage() {
  const date = new Date();
  const today = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    day: date.getDay(),
  };

  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const [monthData, setMonthData] = useState([]);

  const toPrevMonth = () => {
    // 달이 바뀔 때마다 설기 잔상이 남아서 초기화해주기 위한 코드
    setMonthData([]);

    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const toNextMonth = () => {
    // 달이 바뀔 때마다 설기 잔상이 남아서 초기화해주기 위한 코드
    setMonthData([]);

    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  useEffect(() => {
    fetch(`/api/attendance/month/${selectedYear}/${selectedMonth}`)
      .then((res) => res.json())
      .then((res) => setMonthData(res.data));

  }, [selectedMonth, selectedYear]);

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-between">
      <Header />
      <CalendarHeader
        toPrevMonth={toPrevMonth}
        toNextMonth={toNextMonth}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
      />
      <Objective />
      <Calendar
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        monthData={monthData}
      />
      <ObjectiveProgressBar count={30} />
      <TabBar type={"desktop"}></TabBar>
    </div>
  );
}
