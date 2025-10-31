import cron from 'node-cron'
import { CRON_SCHEDULE, MENTION, MEMBER } from './constants'
import { postSlackMessage, generateMondayMessage, generateFridayMessage, getCurrentWeekIndex } from './utils'

import './modules/express'

const buildMessage = (text: string) => ({ text })

// cron.schedule(
//   CRON_SCHEDULE.EVERY_MONDAY_AT_1030AM,
//   async () => {
//     console.log('[Cron] MONDAY 10:30AM 실행')
//     try {
//       const text = await generateMondayMessage()
//       await postSlackMessage(buildMessage(text as string))
//     } catch (error) {
//       console.warn('[Cron] generateFridayMessage 실패. 메시지 전송 생략')
//     }
//   },
//   { timezone: 'Asia/Seoul' }
// )

// cron.schedule(
//   CRON_SCHEDULE.EVERY_MONDAY_AT_2PM,
//   async () => {
//     console.log('[Cron] MONDAY 2:00PM 실행')
//     const text = `${MENTION.TEAM} 작업 종료된 브랜치 정리 해주세요!`
//     await postSlackMessage(buildMessage(text))
//   },
//   { timezone: 'Asia/Seoul' }
// )

// cron.schedule(
//   CRON_SCHEDULE.EVERY_THURSDAY_AT_1030AM,
//   async () => {
//     console.log('[Cron] THURSDAY 10:30AM 실행')
//     const idx = getCurrentWeekIndex()
//     const person = MEMBER[idx]
//     const text = `${person}, \`feature/core\` 점검 후 상용 배포를 진행해주세요!`
//     await postSlackMessage(buildMessage(text))
//   },
//   { timezone: 'Asia/Seoul' }
// )

cron.schedule(
  CRON_SCHEDULE.EVERY_THURSDAY_AT_1100AM,
  async () => {
    console.log('[Cron] THURSDAY 11:00AM 실행')
    const text = `${MENTION.TEAM} Jira 티켓 상태 갱신 후 주간 회의록 작성해주세요!`
    await postSlackMessage(buildMessage(text))
  },
  { timezone: 'Asia/Seoul' }
)

// cron.schedule(
//   CRON_SCHEDULE.EVERY_FRIDAY_AT_2PM,
//   async () => {
//     console.log('[Cron] FRIDAY 2:00PM 실행')
//     const text = `${MENTION.TEAM} Code Review 진행해주세요!`
//     await postSlackMessage(buildMessage(text))
//   },
//   { timezone: 'Asia/Seoul' }
// )

// cron.schedule(
//   CRON_SCHEDULE.EVERY_FRIDAY_AT_2PM,
//   async () => {
//     console.log('[Cron] FRIDAY 2PM 실행')
//     try {
//       const text = await generateFridayMessage()
//       await postSlackMessage(buildMessage(text as string))
//     } catch (error) {
//       console.warn('[Cron] generateFridayMessage 실패. 메시지 전송 생략')
//     }
//   },
//   { timezone: 'Asia/Seoul' }
// )

cron.schedule(
  CRON_SCHEDULE.EVERY_MINUTE,
  () => {
    console.log('🕒 시스템 시간:', new Date().toString())
    console.log('🌏 Asia/Seoul 시간:', new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }))
  },
  { timezone: 'Asia/Seoul' }
)
