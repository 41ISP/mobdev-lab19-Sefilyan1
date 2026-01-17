 export const formateDate = (date) =>
   (new Date(date)).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    )





