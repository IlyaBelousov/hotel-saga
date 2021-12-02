export const getCheckout = (year: number | null, month: number | null, day: number | null, daysCount: number) => {
    let checkOutDay = day && day + daysCount;
    const getActualMonthString = (month: number) => {
        if (month < 10) {
            return `0${month}`
        } else if (month > 12) {
            return `0${month - 12}`
        }
        return month
    }
    const getActualCheckoutDay = (month: number, checkOutDay: number) => {
        if (month === 11 || month === 4 || month === 6 || month === 9) {
            if (checkOutDay > 30) {
                return (checkOutDay - 30) < 10 ? `0${checkOutDay - 30}` : `${checkOutDay - 30}`
            }
        }
        if (month === 2) {
            if (checkOutDay > 28) {
                return (checkOutDay - 28) < 10 ? `0${checkOutDay - 28}` : `${checkOutDay - 28}`
            }
        } else if (checkOutDay > 31) {
            return (checkOutDay - 31) < 10 ? `0${checkOutDay - 31}` : `${checkOutDay - 31}`
        }
        return `${checkOutDay < 10 ? `0${checkOutDay}` : `${checkOutDay}`}`
    }
    if (year && month && day && checkOutDay) {
        if (month === 12 && day === 31) {
            return `${year + 1}-${getActualMonthString(month + 1)}-${getActualCheckoutDay(month, checkOutDay)}`
        }
        return `${year}-${getActualMonthString(month)}-${getActualCheckoutDay(month, checkOutDay)}`
    }

}