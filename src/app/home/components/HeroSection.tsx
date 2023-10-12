import Navbar from '@/components/navbar/Navbar';
import { bebasNeue } from '@/lib/fonts';
import Image from 'next/image'

const HeroSection = () => (
  <div className="relative h-screen w-full">
    <Image
      className="z-0 object-cover object-bottom"
      alt="retro style spaceship flying through space"
      src="/AstroByteHero.webp"
      layout="fill"
    />
    <div className="flex h-full flex-col justify-between p-5">
      <Navbar />
      <div className="border-text-200 bg-background-950 rounded-4xl z-10 mb-10 h-fit w-full border-2 bg-opacity-70 p-8 drop-shadow-2xl md:w-2/5">
        <div className={bebasNeue.className}>
          <div className="text-text-200 mb-8 text-center text-xl md:text-3xl">
            Bespoke Web Development: Skip the page builders and WordPress, and dive into handcrafted
            digital solutions starting at $200/month.
          </div>
          <div className="text-center">
            <div className="text-text-200 border-text-200 bg-background-950 hover:bg-background-900 mx-auto w-fit rounded-full border-2 p-5 text-xl hover:text-white">
              Ready For Launch
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HeroSection;