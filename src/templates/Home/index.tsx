import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked"
        canonical="https://my-trips.williamjusten.com.br"
      />
      <LinkWapper href="/about">
        <InfoOutline size={32} aria-label={'About'} />
      </LinkWapper>
      <Map places={places} />
    </>
  )
}
