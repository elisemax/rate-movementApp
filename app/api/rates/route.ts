import { NextResponse } from 'next/server'
import { Rate } from '../../../models/Rate'
import fsPromises from 'fs/promises'
import path from 'path'

export async function GET() {
  const jsonData = await fsPromises.readFile(path.join(process.cwd(), 'data', 'data.json'), 'utf-8')
  const data: Rate[] = JSON.parse(jsonData)
  return NextResponse.json(data)
}
