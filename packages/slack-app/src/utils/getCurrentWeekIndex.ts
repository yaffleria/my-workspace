import { MEMBER } from '../constants'

export function getCurrentWeekIndex() {
  const BASE_DATE = new Date('2024-01-01T00:00:00+09:00')

  const now = new Date()
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60000
  const kstNow = new Date(utcNow + 9 * 60 * 60 * 1000)

  const diffTime = kstNow.getTime() - BASE_DATE.getTime()
  const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7))

  return diffWeeks % MEMBER.length
}
