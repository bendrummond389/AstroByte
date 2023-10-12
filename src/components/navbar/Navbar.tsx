import { EBGaramond, bakbakOne } from '@/lib/fonts'
import Link from 'next/link'

const NAV_LINKS = [
  { text: 'Services', href: '/services' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
]

const Navbar = () => (
  <div className="relative z-10 flex w-full flex-col items-center justify-between px-4 py-2 md:flex-row md:px-8 md:py-5">
    <div className="mb-4 flex w-full justify-center md:mb-0 md:justify-start">
      <div className={bakbakOne.className}>
        <span
          className="text-text-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ WebkitTextStroke: '1.5px black' }}
        >
          AstroByte
        </span>
      </div>
    </div>

    <div className={EBGaramond.className}>
      <div className="border-text-200 bg-background-950 flex w-full divide-x divide-text-200 justify-around rounded-full border-2 bg-opacity-80 p-4 drop-shadow-2xl md:w-auto md:justify-start">
        {NAV_LINKS.map(({ text, href }) => (
          <Link key={text} href={href} passHref>
            <span className="text-text-200 mx-3 text-lg font-bold hover:text-white md:mx-5 md:text-2xl lg:text-3xl">
              {text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export default Navbar
