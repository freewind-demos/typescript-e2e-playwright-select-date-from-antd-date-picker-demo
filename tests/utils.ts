export function getMonthName(date: Date) {
    return date.toLocaleString('en-us', {month: 'short'})
}