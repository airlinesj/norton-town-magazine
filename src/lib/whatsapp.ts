/**
 * Generate WhatsApp message URL for Click-to-WhatsApp functionality
 * Supports both phone numbers and business names
 */
export interface WhatsAppConfig {
  phone: string // Phone number with country code (e.g., +263777730936)
  message?: string // Custom message to include
  businessName?: string // Name of the business
}

export function generateWhatsAppLink({
  phone,
  message = '',
  businessName = '',
}: WhatsAppConfig): string {
  // Remove any non-digit characters except + at the start
  const cleanPhone = phone.replace(/\D/g, '')
  const formattedPhone = cleanPhone.startsWith('263')
    ? `+${cleanPhone}`
    : `+${cleanPhone}`

  const defaultMessage = businessName
    ? `Hi ${businessName}! I saw you in The Norton Town Magazine.`
    : `Hello! I found you in The Norton Town Magazine.`

  const finalMessage = message || defaultMessage
  const encodedMessage = encodeURIComponent(finalMessage)

  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`
}

/**
 * Open WhatsApp chat in a new window
 */
export function openWhatsAppChat({
  phone,
  message,
  businessName,
}: WhatsAppConfig): void {
  const link = generateWhatsAppLink({ phone, message, businessName })
  window.open(link, '_blank', 'noopener,noreferrer')
}

/**
 * Business Directory entries with WhatsApp numbers
 */
export const BUSINESS_DIRECTORY = {
  'angwa-city-butchery': {
    name: 'Angwa City Butchery',
    category: 'Food/Retail',
    phone: '+263 77 773 0936',
    description: 'Quality meat and butchery services in Norton',
  },
  'mimi-hair-salon': {
    name: 'Mimi Hair Salon & Barber',
    category: 'Beauty',
    phone: '0777 650 978',
    description: 'Professional hair and barber services',
  },
  'cocoblue-school': {
    name: 'CocoBlue International School',
    category: 'Education',
    phone: '+263 77 773 0936',
    description: 'Quality international education in Norton',
  },
}
