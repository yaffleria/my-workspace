import axios from 'axios'
import 'dotenv/config'

export const postSlackMessage = async (message: { text: string }) => {
  await axios.post(process.env.WEBHOOK_LOVELY as string, message)
}
