import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="感谢订阅"
      intro="我将会发一份电子邮件，当我发布新文章时, 建立新的项目, 或者有趣的事情，以至于我认为你想听到的。你可以随时取消，没有任何感觉"
    />
  )
}
