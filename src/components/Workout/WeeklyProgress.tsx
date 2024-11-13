// import React from "react";

// const WeeklyProgress: React.FC = () => {
//   const progressData = {
//     totalWorkouts: 5,
//     completedWorkouts: 3,
//     workoutDays: [
//       { day: "Mon", completed: true },
//       { day: "Tue", completed: true },
//       { day: "Wed", completed: true },
//       { day: "Thu", completed: false },
//       { day: "Fri", completed: false },
//       { day: "Sat", completed: false },
//       { day: "Sun", completed: false },
//     ],
//   };

//   const progressPercentage =
//     progressData.totalWorkouts > 0
//       ? (progressData.completedWorkouts / progressData.totalWorkouts) * 100
//       : 0;

//   return (
//     <div>
//       <h3 className="text-lg font-semibold">Weekly Progress</h3>
//       <p>
//         {progressData.completedWorkouts} of {progressData.totalWorkouts} workouts completed
//       </p>
//       <div className="w-full bg-gray-200 rounded-full h-2.5">
//         <div
//           className="bg-blue-500 h-2.5 rounded-full"
//           style={{ width: `${progressPercentage}%` }}
//         ></div>
//       </div>
//       <div className="mt-4 grid grid-cols-7 gap-1 text-center">
//         {progressData.workoutDays.map((workout, index) => (
//           <div
//             key={index}
//             className={`py-2 rounded-md text-sm font-medium ${
//               workout.completed
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-800"
//             }`}
//           >
//             {workout.day}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeeklyProgress;

import React from "react";

const WeeklyProgress: React.FC = () => {
  const progressData = {
    totalWorkouts: 5,
    completedWorkouts: 3,
    workoutDays: [
      { day: "Mon", completed: true },
      { day: "Tue", completed: true },
      { day: "Wed", completed: true },
      { day: "Thu", completed: false },
      { day: "Fri", completed: false },
      { day: "Sat", completed: false },
      { day: "Sun", completed: false },
    ],
  };

  const progressPercentage =
    progressData.totalWorkouts > 0
      ? (progressData.completedWorkouts / progressData.totalWorkouts) * 100
      : 0;

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-center">Weekly Progress</h3>
      <p className="text-center mb-2">
        {progressData.completedWorkouts} of {progressData.totalWorkouts} workouts completed
      </p>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {progressData.workoutDays.map((workout, index) => (
          <div
            key={index}
            className={`py-2 rounded-md text-sm font-medium ${
              workout.completed
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {workout.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyProgress;


