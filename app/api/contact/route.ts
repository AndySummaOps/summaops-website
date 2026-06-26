import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { name, company, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 })
  }

  const { error } = await supabase.from('contacts').insert({
    name,
    company: company || null,
    email,
    phone: phone || null,
    message,
  })

  if (error) {
    console.error('Supabase insert error:', error)
    return NextResponse.json({ error: 'Opslaan mislukt, probeer het opnieuw.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
