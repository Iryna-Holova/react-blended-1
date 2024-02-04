import { formatDistanceToNow, format } from "date-fns";


export function formatDateToNow(date) {
    return formatDistanceToNow(new Date(date), { addSuffix: true })
}

export const formatDate = date =>{
    return format(new Date(date), "Pp")
}