export  const getTime = (value) => {
    let input = Date.parse(value)
    let timeLength = Date.now() - input
    let nSecond = timeLength/1000
    if (nSecond < 60) return Math.floor(nSecond+1) + " seconds "
    if (60 <= nSecond && nSecond < 3600) return Math.floor(nSecond / 60) + " min "
    if (nSecond >= 3600 && nSecond <7200) return Math.floor(nSecond / 3600)+ " hour"
    if (nSecond >= 7200 && nSecond <86400) return Math.floor(nSecond / 3600)+ " hours"
    if (nSecond >=86400 && nSecond <86400*2) return Math.floor(nSecond/ 86400) + "day"
    if (nSecond >=86400*2 && nSecond <86400*7) return Math.floor(nSecond/ 86400) + "days"
    if (nSecond >=86400*7) return value.toDateString()
}