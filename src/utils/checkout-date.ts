export const getCheckOutDate = (checkInDay: number) => {
    const month = new Date().getMonth() + 1;
    const checkoutDay = new Date().getDate() + 1

    const getActualMonthString = (month: number) => {
        if (month < 10) {
            return `0${month}`
        } else if (month > 12) {
            return `0${month - 12}`
        }
        return month
    }

    if (month === 11 || month === 4 || month === 6 || month === 9) {
        if (checkInDay === 30) {
            return `${new Date().getFullYear()}-${getActualMonthString(month + 1)}-0${checkoutDay - 30}`
        }
        return `${new Date().getFullYear()}-${getActualMonthString(month)}-${checkoutDay}`
    }
    if (month === 2) {
        if (checkInDay === 28) {
            return `${new Date().getFullYear()}-${getActualMonthString(month + 1)}-0${checkoutDay - 28}`
        }
    } else if (checkInDay === 31) {
        return `${new Date().getFullYear()}-${getActualMonthString(month + 1)}-0${checkoutDay - 31}`
    }
    return `${new Date().getFullYear()}-${getActualMonthString(month)}-${checkoutDay < 10 ? `0${checkoutDay}` : checkoutDay}`
}