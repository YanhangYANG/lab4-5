import type { AxiosInstance, AxiosResponse } from "axios"
import type { AirlineItem, EventItem } from "@/type"
import axios from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    // 其他的配置项
});

export default {
    getEvent(perPage : number,page:number): Promise<AxiosResponse<EventItem[]>> {
        return apiClient.get < EventItem[] > ('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEventById(id: number): Promise<AxiosResponse<EventItem>> {
        return apiClient.get < EventItem > ('/events/' + id.toString())
    }
}