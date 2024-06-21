import React, { useEffect, useState } from "react";
import axios from "axios";
import { useApi } from "../component/fetch";
import "./UserProfile.css";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [weights, setWeights] = useState([]);
  const [moodData, setMoodData] = useState([]);

  const { data, isLoading, isError } = useApi("user/user");

  useEffect(() => {
    if (data) {
      setUserData(data);
      fetchWorkouts();
      generateFakeWeightData();
      generateFakeMoodData();
    }
  }, [data]);

  const fetchWorkouts = async () => {
    try {
      const logsResponse = await axios.get("http://localhost:3000/log", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const logs = logsResponse.data.logs;
      const workoutPromises = logs.map((log) =>
        axios.get(`http://localhost:3000/log/${log.id}/workout`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
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
        weight: parseFloat((Math.random() * (100 - 50) + 50).toFixed(1)),
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
          <div className="profile-info">
            <div className="name">Name: {data.user.name}</div>
            <div className="goal">Goal: Confidence</div>
          </div>
        </div>
        <div className="health-tip">
          <p>"Health Tip: Drink Water"</p>
        </div>
      </div>
      <div className="charts-container">
        <div className="chart">
          <h2>Mood Chart</h2>
          <div className="chart-container">
            <PieChart width={300} height={200}>
              <Pie
                label
                data={pieData}
                cx={150}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
        <div className="chart">
          <h2>Weight Chart</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={weights}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#8884d8"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
