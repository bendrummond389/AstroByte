import { b612Mono, bakbakOne } from '@/lib/fonts'
import Image from 'next/image'

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
      <div className="from-custom-100 mb-4 h-32 w-full bg-opacity-70 bg-gradient-to-b drop-shadow-2xl md:mb-12 md:h-48" />
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
            <div className="border-text-200 text-text-200 bg-background-950 md:text-md m-3 mx-3 flex w-fit flex-col rounded-3xl border-2 bg-opacity-80 text-center drop-shadow-lg md:m-0 md:mx-0 md:mb-32 md:mt-10">
              <div className="p-5">
                <div className="mb-5 text-xl font-bold">Our Expertise</div> {/* Title Addition */}
                <div className="m-5 mt-8 text-sm md:text-xl">
                  AstroByte specializes in web design and development for small businesses across
                  the universe. Our hand-written code ensures optimal website performance,
                  increasing customer traffic and revenue.
                </div>
              </div>
              <hr className="border-text-200" /> {/* Section Separator */}
              <div className="p-5">
                <div className="m-2 mt-5 text-lg md:text-2xl">Mobile Readiness: </div>
                <div className=" m-5 text-sm md:text-lg">
                  We optimize for mobile platforms, delivering a flawless user experience across
                  various devices and screen sizes.
                </div>
              </div>
              <hr className="border-text-200" /> {/* Section Separator */}
              <div className="p-5">
                <div className="m-2 mt-5 text-lg md:text-2xl">SEO Mastery: </div>
                <div className=" m-5 text-sm md:text-lg">
                  Our SEO services enhance website visibility in search rankings through thorough
                  keyword research and on-page optimization.
                </div>
              </div>
              <hr className="border-text-200" /> {/* Section Separator */}
              <div className="p-5">
                <div className="m-2 mt-5 text-lg md:text-lg">Peak Performance: </div>
                <div className=" m-5 text-sm md:text-lg">
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

export default AboutSection
