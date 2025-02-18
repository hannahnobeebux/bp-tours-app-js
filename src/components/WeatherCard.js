import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const WeatherCard = ({ city }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = "9673716efb2dea7f3da0b403cda96917";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Weather API Error:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <ActivityIndicator size="small" color="#0960c8" />;

    if (!weather || weather.cod !== 200) {
        return <Text style={styles.errorText}>⚠️ Weather data not available</Text>;
    }

    return (
        <View style={styles.weatherCard}>
            <Text style={styles.cityText}>{weather.name}</Text>
            <Text style={styles.tempText}>{Math.round(weather.main.temp)}°C</Text>
            <Text style={styles.conditionText}>
                {weather.weather[0].main} {getWeatherEmoji(weather.weather[0].main)}
            </Text>
        </View>
    );
};

const getWeatherEmoji = (condition) => {
    switch (condition) {
        case "Clear": return "☀️";
        case "Clouds": return "☁️";
        case "Rain": return "🌧️";
        case "Snow": return "❄️";
        case "Thunderstorm": return "⛈️";
        case "Drizzle": return "🌦️";
        case "Mist": return "🌫️";
        default: return "🌍";
    }
};

const styles = StyleSheet.create({
    weatherCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e0f2ff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    cityText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    tempText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0960c8",
    },
    conditionText: {
        fontSize: 16,
    },
    errorText: {
        textAlign: "center",
        color: "red",
        fontSize: 16,
        marginBottom: 15,
    },
});

export default WeatherCard;
