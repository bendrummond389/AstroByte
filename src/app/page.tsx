import Navbar from '@/components/navbar/Navbar'
import { b612Mono, bakbakOne, bebasNeue } from '@/lib/fonts'
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

const AboutSection = () => (
  <div className="relative h-fit">
    <Image
      className="z-0 object-cover object-top"
      alt="retro style spaceship flying through space"
      src="/AstroByteAbout.webp"
      layout="fill"
      sizes="100vw"
    />
    <div className="relative z-10 flex h-full flex-col items-center">
      <div className="from-grad-100 mb-4 h-32 w-full bg-opacity-70 bg-gradient-to-b drop-shadow-2xl md:mb-12 md:h-48" />
      <div className="mb-8 flex w-full flex-col items-center md:mb-16 md:items-start md:pl-10 lg:pl-20">
        <div className="w-full items-center justify-center md:w-1/2">
          <div className={bakbakOne.className + ' text-center'}>
            <span
              className="text-text-200  text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ WebkitTextStroke: '1.5px black' }}
            >
              About Us
            </span>
          </div>
          <div className={b612Mono.className}>
            <div className="border-text-200 m-3 md:m-0 text-text-200 bg-background-950 mx-3 flex w-fit flex-col rounded-3xl border-2 bg-opacity-80 text-center md:mb-32 text-xs md:text-md drop-shadow-lg md:mx-0 md:mt-10 md:text-lg">
              <div className="m-5">
                AstroByte specializes in web design and development for small businesses across the
                universe. Our hand-written code ensures optimal website performance, increasing
                customer traffic and revenue.
              </div>
              <div className="">
                <div className=" m-5 ">
                  <div className="text-md m-2 font-semibold md:text-lg">Mobile Readiness: </div>
                  <br />
                  We optimize for mobile platforms, delivering a flawless user experience across
                  various devices and screen sizes.
                </div>
                <div className=" m-5 ">
                  <div className="text-md m-2 font-semibold md:text-lg">SEO Mastery: </div>
                  <br />
                  Our SEO services enhance website visibility in search rankings through thorough
                  keyword research and on-page optimization.
                </div>
                <div className=" m-5 ">
                  <div className="text-md m-2 font-semibold md:text-lg">Peak Performance: </div>
                  <br />
                  Your website's performance is fine-tuned for smooth operation across all
                  platforms, ensuring a superior user experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <HeroSection />

      <AboutSection />
    </main>
  )
}
