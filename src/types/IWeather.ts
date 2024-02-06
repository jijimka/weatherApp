export interface IWeather {
    cloud:number,
    condition: {
        code: number,
        icon: string,
        text: string,
    }
    feelslike_c: number,
    gust_kph: number,
    humidity: number,
    is_day: number,
    last_updated: string,
    last_updated_epoch: number,
    precip_in: number,
    precip_mm: number,
    pressure_in: number,
    pressure_mb: number,
    temp_c: number,
    uv: number,
    vis_km: number,
    vis_miles: number,
    wind_degree: number,
    wind_dir: string,
    wind_kph: number,

}