# Email Signup Implementation

This project uses the `substack-subscriber` package to handle newsletter subscriptions.

## Setup

1. **Configure your Substack URL**: 
   Update `config/newsletter.ts` with your actual Substack newsletter URL:
   ```typescript
   export const NEWSLETTER_CONFIG = {
     substackUrl: 'https://your-newsletter.substack.com',
   }
   ```

2. **API Endpoint**: 
   The API route at `/api/subscribe` handles POST requests with:
   - `email`: User's email address
   - `substackUrl`: Your Substack newsletter URL

## Usage

### Basic Usage
```tsx
import { EmailSignup } from '@/components/email-signup'
import { NEWSLETTER_CONFIG } from '@/config/newsletter'

<EmailSignup 
  substackUrl={NEWSLETTER_CONFIG.substackUrl}
  placeholder="Enter your email"
  buttonText="Subscribe"
/>
```

### Custom Styling
```tsx
<EmailSignup 
  substackUrl={NEWSLETTER_CONFIG.substackUrl}
  placeholder="Your email address"
  buttonText="Join Newsletter"
  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
/>
```

## API Response Format

### Success Response (200)
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter!",
  "data": {
    "email": "user@example.com",
    "requires_confirmation": true,
    "subscription_id": "12345",
    "didSignup": true
  }
}
```

### Error Response (400/500)
```json
{
  "error": "Error message",
  "details": "Additional error details"
}
```

## Features

- ✅ Email validation
- ✅ Loading states
- ✅ Success/error notifications using Sonner
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Confirmation email handling

## Dependencies

- `substack-subscriber`: Handles Substack API integration
- `sonner`: Toast notifications
- Radix UI components for form elements

## Important Notes

⚠️ **Disclaimer**: The `substack-subscriber` package is unofficial and not affiliated with Substack. Use at your own risk.

🔒 **CORS**: The API route includes CORS headers for cross-origin requests if needed.

📧 **Confirmation**: Users may need to confirm their subscription via email depending on Substack settings.