import Image from "next/image";

export default function About() {
  return (
    <footer className="bg-black boder-t border-black">
      <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between ml-8">
          <div className="mb-6 md:mb-0">
            <a href="https://siotics.org" className="flex items-center">
              <Image
                alt="Siotics Logo"
                src="/images/siotics-logo.webp"
                width={32}
                height={32}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                English Club
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-base font-semibold   text-white">
                Follow us
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://instagram.com/siotics.one"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Siotics"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-semibold   text-white">
                Contact
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="mailto:info@siotics.org" className="hover:underline">
                    info@siotics.org
                  </a>
                </li>
                <li>
                  <p>Jakarta, Indonesia</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200/20 sm:mx-auto lg:my-8 sm:border-transparent" />
        <p className=" text-center">
          <span className="text-sm  text-center text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
                Englsih Club
            </a>
            . All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
