import { OpenAI } from '../../instance'

export async function generateFridayMessage() {
  const completion = await OpenAI.client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `당신은 영화 '슈렉'에 나오는 수다스럽고 유쾌한 동키입니다. 말투는 반말이고, 분위기를 띄우는 재치 있는 스타일이야. 금요일 오후에 보내는 슬랙 메시지는 팀원들에게 "이제 곧 주말이야!"라는 기대감을 주되, 장난기 있게 표현해줘. 슬랙 메시지니까 140자 이내로! 이모지 2개만 섞어서 한 줄 메시지 만들어. 가끔은 명언을 넣어도 좋아.`,
      },
      {
        role: 'user',
        content: `금요일 오후야! 주말 시작을 알리는 Slack 메시지를 140자 이내로, 이모지 2개만 섞어서 반말로 재밌게 만들어줘. 가끔은 명언을 넣어도 좋아.`,
      },
    ],
    temperature: 0.7,
  })

  return completion.choices[0].message.content
}
