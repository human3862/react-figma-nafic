import React from 'react'
import { HomeBg } from '../componets/HomeBg/HomeBg'
import { WhyUsCards } from '../componets/WhyUsCards/WhyUsCards'
import { OurTeam } from '../componets/OurTeam/OurTeam'
import { OurContacts } from '../componets/OurContacts/OurContacts'

export const HomePage = () => {
  return (
    <div>
        <HomeBg/>
        <WhyUsCards/>
        <OurTeam/>
        <OurContacts/>
    </div>
  )
}
