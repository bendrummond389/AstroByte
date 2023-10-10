import Navbar from '@/components/navbar/Navbar'
import { sourceSans } from '@/lib/fonts'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen w-full">
      {/* Hero section */}
      <div className="relative h-full w-full">
        <Image
          className="z-0 object-cover object-top"
          alt="retro style spaceship flying through space"
          src="/AstroByteHero.webp"
          layout="fill"
        />
        <div className="flex h-full flex-col justify-between p-5">
          <Navbar />
          <div className="border-text-200 bg-background-950 z-10 mb-10 h-80 w-full rounded-2xl border-2 bg-opacity-80 p-8 drop-shadow-2xl md:w-1/2">
            <div className={sourceSans.className}>
              <div className="text-text-200 mb-8 text-xl md:text-3xl">
                Crafting Digital Cosmos: No page builders, no WordPress, only hand-coded galaxies of
                possibilities starting at $200/month.
              </div>
              <div className="text-center">
                <div className="text-text-200 border-text-200 bg-background-950 hover:bg-background-900 mx-auto w-48 rounded-full border-2 p-5 text-xl">
                  Ready for Launch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
