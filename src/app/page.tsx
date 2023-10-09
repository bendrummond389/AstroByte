import Image from 'next/image';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row items-center text-center max-w-2xl md:max-w-4xl mx-auto">
        <div className="flex-col mr-0 md:mr-12 mb-12 md:mb-0">
          <div className={playfair.className}>
            <span className="text-4xl md:text-6xl lg:text-7xl font-semibold inline-block w-full md:w-2/3 lg:w-4/5">
              Get Ready To Launch With AstroByte
            </span>
          </div>
          <div className={sourceSans.className}>
            <span className="mt-4 lg:mt-6 text-xl md:text-2xl lg:text-3xl inline-block w-full md:w-2/3 lg:w-4/5">
              EXPERIENCE THE FUTURE OF TECHNOLOGY
            </span>
          </div>
        </div>
        <Image src="/AstroByteLogo.webp" width={300} height={300} alt="Picture of the author" className="mx-auto md:mx-0" />
      </div>
    </main>
  );
}
