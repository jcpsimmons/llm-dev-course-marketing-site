import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, substackUrl } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!substackUrl) {
      return NextResponse.json(
        { error: 'Substack URL is required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Simulate subscription success for now
    // In production, you would integrate with your actual newsletter service
    console.log(`Newsletter subscription request: ${email} -> ${substackUrl}`)
    
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      data: {
        email: email,
        requires_confirmation: true,
        subscription_id: `sub_${Date.now()}`,
        didSignup: true
      }
    })

  } catch (error) {
    console.error('Subscription error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to subscribe to newsletter. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}