import Image from "next/image";

export default function Team() {
  return (
    <div>
      <section className="min-h-[75vh] items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="lg:pr-24 md:pr-12">
            <h2 className="text-4xl lg:text-6xl text-blue-400">The Team</h2>
          </div>
          <section className="max-w-7xl">
            <ul className="flex flex-col items-start lg:flex-row gap-12 lg:items-center justify-between">
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <Image
                    src="/images/profile.jpg"
                    width={100}
                    height={100}
                    alt="Gatheru"
                    className="grayscale rounded-full object-cover w-20 h-20 "
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-blue-400">
                      Ken Mwangi
                    </h3>
                    <p className="text-base text-gray-500">Lead Developer</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <Image
                    src="/images/gatheru.jpeg"
                    width={100}
                    height={100}
                    alt="Gatheru"
                    className="grayscale rounded-full object-cover w-20 h-20 "
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-blue-400">
                      Gatheru Wilson
                    </h3>
                    <p className="text-base text-gray-500">Contributor</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <section className="items-center w-full px-5 py-24 mx-auto md:px-0 lg:px-0 max-w-7xl">
          <div className="text-left">
            <div className="items-center mx-auto lg:inline-flex">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                <div>
                  <p className="text-lg font-medium tracking-tight text-blue-400 lg:text-xl">
                    Our Mantra
                  </p>
                </div>
                <div className="lg:ml-auto">
                  <p className="mt-4 text-lg tracking-tight text-blue-300 lg:mt-0">
                    Collaborate, unite, empower, achieve: Together we conquer
                    any challenge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
