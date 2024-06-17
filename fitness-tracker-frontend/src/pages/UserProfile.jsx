import React, { useEffect, useState } from "react";
import axios from "axios";
import { useApi } from "../component/fetch";
import "./UserProfile.css";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [weights, setWeights] = useState([]);
  const [moodData, setMoodData] = useState([]);

  const { data, isLoading, isError } = useApi("user/user");

  useEffect(() => {
    if (data) {
      setUserData(data); // Assuming data contains full user details including fullName
      fetchWorkouts();
      generateFakeWeightData(); // Generate fake weight data
      generateFakeMoodData(); // Generate fake mood data
    }
  }, [data]);

  const fetchWorkouts = async () => {
    try {
      const logsResponse = await axios.get("http://localhost:8000/user/logs");
      const logs = logsResponse.data;

      const workoutPromises = logs.map((log) =>
        axios.get(`http://localhost:8000/log/${log.id}/workout`)
      );
      const workoutResponses = await Promise.all(workoutPromises);
      const workoutsData = workoutResponses.map((response) => response.data);

      setWorkouts(workoutsData);
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };

  const generateFakeWeightData = () => {
    // Generate 7 days of fake weight data
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 6);

    const fakeWeights = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + index);
      return {
        date: date.toLocaleDateString(),
        weight: (Math.random() * (100 - 50) + 50).toFixed(1), // Random weight between 50 and 100
      };
    });

    setWeights(fakeWeights);
  };

  const generateFakeMoodData = () => {
    // Generate fake mood data for the past week
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 6);

    const fakeMoodData = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + index);
      return {
        date: date.toLocaleDateString(),
        mood: Math.floor(Math.random() * 10 + 1), // Random mood value between 1 and 10
      };
    });

    setMoodData(fakeMoodData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>An error has occurred: {isError.message}</div>;
  }

  return (
    <div className="user-profile">
      <div className="profile-and-tip">
        <div className="profile-section">
          <div className="profile-pic">
            <img src="/profile-pic.jpg" alt="Profile" />
          </div>
          <div className="name">
            Name: {userData ? userData.fullName : "Loading..."}
          </div>
          <div className="goal">Goal: Confidence</div>
        </div>
        <div className="health-tip">
          <p>"Health Tip: Drink Water"</p>
        </div>
      </div>
      <div className="workout-and-charts">
        <div className="workout-calendar">
          <h2>Past Workout Calendar:</h2>
          <div className="workout-logs">
            {workouts.length > 0 ? (
              workouts.map((workout, index) => (
                <div key={index} className="workout-log">
                  <p>{workout.date}</p>
                  <p>{workout.description}</p>
                </div>
              ))
            ) : (
              <p>No workouts available</p>
            )}
          </div>
        </div>
        <div className="charts">
          <div className="mood-chart">
            <h2>Mood Chart</h2>
            <div className="chart-container">
              <ul>
                {moodData.map((data, index) => (
                  <li key={index}>
                    {data.date}: {data.mood}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="weight-chart">
            <h2>Weight Chart</h2>
            <div className="chart-container">
              <ul>
                {weights.map((data, index) => (
                  <li key={index}>
                    {data.date}: {data.weight} kg
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
