import Image from "next/image";

export function CtaBanner() {
  return (
    <section className="mb-14">
      <div className="mx-auto w-[calc(100%-3.5rem)] max-w-[80rem]">
        <div
          className="grid overflow-hidden rounded-2xl bg-[var(--nucleo-bg-dark)] bg-[url('/images/banner-download-bg-dark.png'),url('/images/banner-download-bg-dark-2.png')] bg-[position:0px_0px,50%_0%] bg-no-repeat [background-size:640px_400px] md:grid-cols-2 md:items-center"
        >
          <div className="p-8 md:p-14">
            <h3 className="text-balance font-heading text-[32px] font-semibold leading-tight text-neutral-50">
              Enhance your icon workflow{" "}
              <span className="text-primary">10x</span> with the Nucleo apps
            </h3>

            <div className="mt-6">
              <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
                <li>
                  <a
                    href="https://nucleoapp.com/app"
                    className="inline-flex h-[38px] w-full items-center justify-center gap-2 rounded-lg bg-neutral-50 px-4 text-sm font-medium text-neutral-900 shadow-sm sm:w-auto"
                  >
                    Web App
                  </a>
                </li>
                <li>
                  <a
                    href="https://nucleoapp.com/downloads"
                    className="inline-flex h-[38px] w-full items-center justify-center gap-2 rounded-lg bg-neutral-50 px-4 text-sm font-medium text-neutral-900 shadow-sm sm:w-auto"
                  >
                    Windows
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <figure className="relative">
            <Image
              src="/images/app-preview-dark-2.png"
              alt="Nucleo app preview"
              width={1200}
              height={900}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
