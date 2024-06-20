import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplify-gen2-upload',
  access: (allow) => ({
    'protected/*': [
      allow.authenticated.to(['read','write']),
      allow.guest.to(['read', 'write'])
    ],
  })
});