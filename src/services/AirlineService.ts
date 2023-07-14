import type { AxiosInstance, AxiosResponse } from "axios"
import type { AirlineItem, EventItem } from "@/type"
import axios from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/se331-2022/passengerdb/airline',
    // 其他的配置项
});

export default {
    getAirlineById(id: number): Promise<AxiosResponse<AirlineItem>> {
        return apiClient.get<AirlineItem>('/' + id.toString())
    }
}