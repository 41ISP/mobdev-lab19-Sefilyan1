export const isEqToday = (date) => {
const Today = new Date()
return Today.getFullEar() == new Date(date).getFullYear() &&
today.getMonth() == new Date(date).getMonth()&&
today.getDay() == new Date(date).getDate()
}


export const daysSince = (date) => {
    return Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24))

}