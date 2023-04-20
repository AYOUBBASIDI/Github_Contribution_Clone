import React, { useEffect , useState } from "react";
import "../App.css";
import {months , monthsNames , daysName} from "../data/data";

const Contribution = () => {
    const [year, setYear] = useState([]);
    const [hoveredDay, setHoveredDay] = useState(null);

    const getMonthByMonth = (startDate) => {
        var months = [];
        var currentDate = new Date(startDate);
        var endDate = new Date();
        while (currentDate <= endDate) {
            var year = currentDate.getFullYear();
            var month = currentDate.getMonth();
            //check if the month is the current month
            if (year === endDate.getFullYear() && month === endDate.getMonth()) {
                var daysInMonth = endDate.getDate();
            } else
            var daysInMonth = new Date(year, month + 1, 0).getDate();

            var days = [];
            for (var i = 1; i <= daysInMonth; i++) {
                const newday = new Date(year, month, i);
                const dayName = daysName[newday.getDay()];
                const day = dayName + ', ' + monthsNames[month] + ' ' + i + ', ' + year;
                days.push(day);
            }
            months.push({ year: year, month: month, daysInMonth: daysInMonth, days: days });
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
        setYear(months);
    }

    const getLastYear = () => {
        const today = new Date();
        const lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        getMonthByMonth(lastYear);
    }

    useEffect(() => {
        getLastYear();
    }, []);


    return (
        <div className="content">
            <div className="w-[60rem]">
                <div className="flex justify-between items-baseline">
                    <p className="text-normal mb-2 text-[#e6edf3] font-medium">697 contributions in the last year</p>
                    <p className="text-[#5e646e] hover:text-[#2f81f7] cursor-pointer font-medium text-sm setting-btn">Contribution settings
                    <div className="dropdown-caret ml-1" bis_skin_checked="1"></div>
                    </p>
                </div>
                <div className="border py-2 border-[#2c3138] w-full rounded-t-md">
                <div className="w-full px-8">
                    <div className="flex gap-[3.1rem] items-center w-full">
                    {
                          year.map((month, index) => {
                                return (
                                    <div className="flex items-center" key={index}>
                                        <p className="text-[#e6edf3] text-[14px]">{months[month.month]}</p>
                                    </div>
                                )
                          })
                   }
                   </div>
                   <div className="flex flex-col flex-wrap h-[7rem] w-[84%] gap-1 mt-2">
                     {
                            year.map((month, index) => {
                                return (
                                    <>
                                        {
                                            month.days.map((day, index) => {
                                                return (
                                                    <div className="relative">
                                                        <div className="w-[12px] h-[12px] rounded-sm bg-[#11161c] hover:border-[#2f81f7]" key={index}
                                                            onMouseEnter={() => {
                                                                setHoveredDay(day)
                                                                console.log(day)
                                                            }}
                                                            onMouseLeave={() => setHoveredDay(null)}
                                                        >
                                                        </div>
                                                        {
                                                            (hoveredDay === day) && (
                                                                <div className="absolute py-2 px-3 rounded w-max z-10 bg-[#686f79] ml-[-7rem]">
                                                                    <p className="text-[#e6edf3] text-xs">No contributions on {day}</p>
                                                                </div>
                                                            )
                                                        }
                                                
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                   </div>

                   <div className="flex justify-between items-baseline mt-1">
                    <a className="text-[#5e646e] hover:text-[#2f81f7] cursor-pointer text-[13px] setting-btn" href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile">Learn how we count contributions</a>
                    <div className="flex gap-1 items-center">
                        <p className="text-[#5e646e] text-[13px]">Less</p>
                        <div className="w-[12px] h-[12px] rounded-sm bg-[#161b22] hover:border-[#2f81f7]"></div>
                        <div className="w-[12px] h-[12px] rounded-sm bg-[#0e4429] hover:border-[#2f81f7]"></div>
                        <div className="w-[12px] h-[12px] rounded-sm bg-[#006d32] hover:border-[#2f81f7]"></div>
                        <div className="w-[12px] h-[12px] rounded-sm bg-[#26a641] hover:border-[#2f81f7]"></div>
                        <div className="w-[12px] h-[12px] rounded-sm bg-[#39d353] hover:border-[#2f81f7]"></div>
                        <p className="text-[#5e646e] text-[13px]">More</p>
                    </div>
                </div>
                </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Contribution;