import { b612Mono, bakbakOne, bebasNeue } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'

type BabeCardProps = {
  children: React.ReactNode
  imageAlignment?: 'object-right' | 'object-left' | 'object-left-top' | 'object-right-top'
  image: string
}

const BabeCard: React.FC<BabeCardProps> = ({ children, image, imageAlignment }) => (
  <div className="aspect-1 relative mt-4 h-96 w-full rounded-lg border-2 border-blue-100  lg:mx-4 lg:h-full lg:w-1/3">
    <Image
      className={`z-0 rounded-lg object-cover ${imageAlignment}`}
      alt="retro style spaceship flying through space"
      src={image}
      fill
    />
    <div className="relative z-10 h-full">{children}</div>
  </div>
)

const PricesSection = () => (
  <div id="pricing" className="relative h-fit w-full md:h-screen">
    <Image
      className="z-0 object-cover object-top"
      alt="retro style spaceship flying through space"
      src="/PricingBacking.webp"
      fill
      sizes="100vw"
    />
    <div className="flex h-full flex-col p-6 py-12 md:py-24 lg:flex-row ">
      <BabeCard image="/WhiteBabe.webp">
        {/* star */}
        <div className="flex h-full flex-col justify-between">
          <div className="relative flex h-32 w-32 items-start md:h-56 md:w-56">
            <Image
              alt="star to add empahsis"
              src={'/vectors/ComicStar.svg'}
              className="z-5 relative"
              fill
            />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center align-baseline">
              <div className={`text-black md:text-3xl ${bebasNeue.className}`}>Starting at</div>
              <div className={`text-custom-200 md:text-3xl ${bakbakOne.className}`}>$1200</div>
            </div>
          </div>
          {/* cigarettes */}
          <div className="mb-10 flex-col px-3">
            <div className="flex h-12 w-full flex-row items-center rounded-xl border-2 border-black">
              <div
                className={`h-full w-5/6 rounded-l-lg bg-slate-200 pl-3 text-black ${b612Mono.className}`}
              >
                <div className="flex h-full items-center text-sm md:text-lg">
                  $1200 Min. Upfront Cost
                </div>{' '}
              </div>
              <div className="bg-custom-200 h-full w-1/5 rounded-r-lg border-l border-black"></div>
            </div>
            <div className="my-3 flex h-12 w-full flex-row items-center rounded-xl border-2 border-black">
              <div
                className={`h-full w-5/6 rounded-l-lg bg-slate-200 pl-3 text-black ${b612Mono.className}`}
              >
                <div className="flex h-full items-center text-sm md:text-lg">Custom Design</div>{' '}
              </div>
              <div className="bg-custom-200 h-full w-1/5 rounded-r-lg border-l border-black"></div>
            </div>
            <div className="flex h-12 w-full flex-row items-center rounded-xl border-2 border-black">
              <div
                className={`h-full w-5/6 rounded-l-lg bg-slate-200 pl-3 text-black ${b612Mono.className}`}
              >
                <div className="flex h-full items-center text-sm md:text-lg">Hosting Included</div>{' '}
              </div>
              <div className="bg-custom-200 h-full w-1/5 rounded-r-lg border-l border-black"></div>
            </div>
          </div>
        </div>
      </BabeCard>
      <BabeCard image="/PinkBabe.webp" imageAlignment="object-left-top">
        {/* Circle */}
        <div className="flex h-full flex-col justify-center">
          <div className="relative ml-5 flex h-32 w-32 items-start md:h-56 md:w-56">
            <Image
              alt="star to add empahsis"
              src={'/vectors/Ellipse.svg'}
              className="z-5 relative"
              fill
            />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center align-baseline">
              <div className={`text-black md:text-3xl ${bakbakOne.className}`}>$200/Month</div>
            </div>
          </div>
        </div>
      </BabeCard>
      <BabeCard image="/BlueBabe.webp" imageAlignment="object-right-top">
        <div className="flex h-full w-full flex-col justify-end">
          {/* Star */}
          <div className="relative ml-5 flex h-48 w-48 items-end md:h-80 md:w-80">
            <Image
              alt="star to add empahsis"
              src={'/vectors/ComicStar2.svg'}
              className="z-5 relative"
              fill
            />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center align-baseline">
              <div className={`text-black md:text-2xl ${bebasNeue.className}`}>Includes</div>
              <div className={`text-custom-200 md:text-2xl ${bakbakOne.className}`}>
                Logo Design
              </div>
            </div>
          </div>
        </div>
      </BabeCard>
    </div>
  </div>
)

export default PricesSection
