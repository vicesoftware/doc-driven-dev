/**
 * Format a date range for display in event cards and pages
 * @param startDate - Start date string in any format that Date can parse
 * @param endDate - Optional end date string
 * @returns Formatted date string
 */
export function formatEventDate(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }

  if (!endDate) {
    return start.toLocaleDateString('en-US', options)
  }

  const end = new Date(endDate)
  
  // If dates are in the same month and year
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`
  }
  
  // If dates are in different months or years
  return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`
}

/**
 * Check if an event has already occurred
 * @param endDate - End date of the event (or start date if no end date)
 * @returns boolean indicating if the event is in the past
 */
export function isEventPast(endDate: string): boolean {
  const end = new Date(endDate)
  const now = new Date()
  return end < now
}

/**
 * Sort events by their start date
 * @param a - First event
 * @param b - Second event
 * @returns Sort order (-1, 0, or 1)
 */
export function sortEventsByDate(a: { startDate: string }, b: { startDate: string }): number {
  return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
}
