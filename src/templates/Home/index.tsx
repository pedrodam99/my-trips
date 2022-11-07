import LinkWapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWapper href="/about">
        <InfoOutline size={32} aria-label={'About'} />
      </LinkWapper>
      <Map places={places} />
    </>
  )
}
