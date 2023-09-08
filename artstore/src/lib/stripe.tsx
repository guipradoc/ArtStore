import Stripe from 'stripe'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY!, {
  apiVersion: '2023-08-16',
  appInfo: {
    name: 'GPC',
  },
})
