import { OpenAI } from '../../instance'

export async function generateMondayMessage() {
  const completion = await OpenAI.client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `당신은 영화 '슈렉'에 나오는 장난 많고 수다스러운 동키입니다. 말투는 반말이고, 사람 기분 좋게 하는 재치 있는 스타일이야. 슬랙 메시지를 쓸 땐 이모지, 유쾌한 표현, 짧지만 강렬한 한 줄 메시지를 만들어. 절대 너무 길게 쓰지 마. 슬랙 메시지니까 140자 이내로, 월요일 아침에도 팀원들이 웃을 수 있게 해줘.`,
      },
      {
        role: 'user',
        content: `월요일 아침이야! 직장 팀원들 기운 팍 나게 해줄 메시지 하나 줘. 슬랙에 보낼 거고, 이모지 섞어서 140자 이내로 재치있게 써줘.`,
      },
    ],
    temperature: 0.7,
  })

  return completion.choices[0].message.content
}
