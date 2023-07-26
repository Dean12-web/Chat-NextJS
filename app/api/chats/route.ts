/* Core */
import { NextResponse } from 'next/server'

const chatList: Message[] = [{
  id: "1",
  chat: "Kerja Dulu"
}, {
  id: "2",
  chat: "Ngoding Lagi"
}, {
  id: "3",
  chat: "tidur"
}]

export async function GET(req: Request, res: Response) {
  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500))
  return NextResponse.json({ data: chatList })
}

export async function POST(req: Request, res: Response) {
  const body = await req.json()
  const { id = "0", chat = " "  } = body

  chatList.push({id, chat})

  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500))

  return NextResponse.json({ id,chat })
}

export async function PUT(req: Request, res: Response) {
  const body = await req.json()
  const { amount = 1 } = body

  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500))

  return NextResponse.json({ data: amount })
}

export async function DELETE(req: Request, res: Response) {
  const body = await req.json()
  const { amount = 1 } = body

  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500))

  return NextResponse.json({ data: amount })
}