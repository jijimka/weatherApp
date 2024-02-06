export interface IForecast {
    "date": string,
    "date_epoch": number,
    "day": {
        "maxtemp_c": number,
        "maxtemp_f": number,
        "mintemp_c": number,
        "mintemp_f": number,
        "avgtemp_c": number,
        "avgtemp_f": number,
        "maxwind_mph": number,
        "maxwind_kph": number,
        "totalprecip_mm": number,
        "totalprecip_in": number,
        "totalsnow_cm": number,
        "avgvis_km": number,
        "avgvis_miles": number,
        "avghumidity": number,
        "daily_will_it_rain": number,
        "daily_chance_of_rain": number,
        "daily_will_it_snow": number,
        "daily_chance_of_snow": number,
        "condition": {
            "text": string,
            "icon": string,
            "code": number
        },
        "uv": number,
    }
}

export interface IForecastWeather {
    avghumidity: number,
    avgtemp_c: number,
    avgtemp_f: number,
    avgvis_km: number,
    avgvis_miles: number,
    condition: {
        text: string,
        icon: string,
        code: number,
    }
    daily_chance_of_rain: number,
    daily_chance_of_snow: number,
    daily_will_it_rain: number,
    daily_will_it_snow: number,
    maxtemp_c: number,
    maxtemp_f: number,
    maxwind_kph: number,
    maxwind_mph: number,
    mintemp_c: number,
    mintemp_f: number,
    totalprecip_in: number,
    totalprecip_mm: number,
    totalsnow_cm: number,
    uv: number,
}