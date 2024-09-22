document.addEventListener("DOMContentLoaded", function() {
    const dailyHoroscope = {
        horoscope: "Today's horoscope is positive for new beginnings.",
        zodiacSigns: "Zodiac signs can guide you on emotional and practical paths.",
        compatibility: "Astrology compatibility: Aries and Leo are a perfect match today.",
        birthChart: "Your birth chart reveals deep insights about your career and love life.",
        mercuryRetrograde: "Mercury is retrograde, take extra caution with communication.",
        risingSign: "Your rising sign indicates how others perceive you.",
        moonSign: "The moon sign points to your emotional core.",
        forecast: "Expect major changes in personal relationships according to the astrological forecast.",
        traits: "Zodiac traits can help you better understand your own motivations.",
        houses: "Astrological houses guide you through challenges and opportunities."
    };

    document.getElementById("horoscope").querySelector("p").innerText = dailyHoroscope.horoscope;
    document.getElementById("zodiac-signs").querySelector("p").innerText = dailyHoroscope.zodiacSigns;
    document.getElementById("compatibility").querySelector("p").innerText = dailyHoroscope.compatibility;
    document.getElementById("birth-chart").querySelector("p").innerText = dailyHoroscope.birthChart;
    document.getElementById("mercury-retrograde").querySelector("p").innerText = dailyHoroscope.mercuryRetrograde;
    document.getElementById("rising-sign").querySelector("p").innerText = dailyHoroscope.risingSign;
    document.getElementById("moon-sign").querySelector("p").innerText = dailyHoroscope.moonSign;
    document.getElementById("forecast").querySelector("p").innerText = dailyHoroscope.forecast;
    document.getElementById("traits").querySelector("p").innerText = dailyHoroscope.traits;
    document.getElementById("houses").querySelector("p").innerText = dailyHoroscope.houses;
});