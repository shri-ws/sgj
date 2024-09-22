{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", function() \{\
    const dailyHoroscope = \{\
        horoscope: "Today's horoscope is positive for new beginnings.",\
        zodiacSigns: "Zodiac signs can guide you on emotional and practical paths.",\
        compatibility: "Astrology compatibility: Aries and Leo are a perfect match today.",\
        birthChart: "Your birth chart reveals deep insights about your career and love life.",\
        mercuryRetrograde: "Mercury is retrograde, take extra caution with communication.",\
        risingSign: "Your rising sign indicates how others perceive you.",\
        moonSign: "The moon sign points to your emotional core.",\
        forecast: "Expect major changes in personal relationships according to the astrological forecast.",\
        traits: "Zodiac traits can help you better understand your own motivations.",\
        houses: "Astrological houses guide you through challenges and opportunities."\
    \};\
\
    document.getElementById("horoscope").querySelector("p").innerText = dailyHoroscope.horoscope;\
    document.getElementById("zodiac-signs").querySelector("p").innerText = dailyHoroscope.zodiacSigns;\
    document.getElementById("compatibility").querySelector("p").innerText = dailyHoroscope.compatibility;\
    document.getElementById("birth-chart").querySelector("p").innerText = dailyHoroscope.birthChart;\
    document.getElementById("mercury-retrograde").querySelector("p").innerText = dailyHoroscope.mercuryRetrograde;\
    document.getElementById("rising-sign").querySelector("p").innerText = dailyHoroscope.risingSign;\
    document.getElementById("moon-sign").querySelector("p").innerText = dailyHoroscope.moonSign;\
    document.getElementById("forecast").querySelector("p").innerText = dailyHoroscope.forecast;\
    document.getElementById("traits").querySelector("p").innerText = dailyHoroscope.traits;\
    document.getElementById("houses").querySelector("p").innerText = dailyHoroscope.houses;\
\});}