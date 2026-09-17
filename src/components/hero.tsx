"use client";

export function Hero() {
  return (
    <section className="mx-auto flex w-[calc(100%-4.875rem)] max-w-[95rem] flex-col gap-9 pt-8 pb-14 min-[810px]:pt-14 min-[1200px]:flex-row min-[1200px]:items-start min-[1200px]:justify-between min-[1200px]:pt-[5.375rem]">
      <div className="flex max-w-[26.25rem] flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-2.5 py-[3.5px]">
          <span className="h-[7px] w-[7px] rounded-full bg-foreground" />
          <span className="text-xs tracking-[0.04em] text-foreground">Discover</span>
        </span>

        <div className="flex flex-col gap-4">
          <h1 className="font-display text-[2.5rem] leading-[1.1] font-semibold tracking-[-0.04em] text-foreground min-[810px]:text-[3rem] min-[1200px]:text-[3.9375rem]">
            Our journal
          </h1>
          <p className="max-w-[26.25rem] text-lg leading-[1.3] text-muted-foreground min-[1200px]:text-xl">
            Get fresh thoughts on design and engineering straight to your inbox.
          </p>
        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full flex-col gap-2.5 min-[810px]:max-w-[28.125rem] min-[1200px]:flex-row"
      >
        <input
          type="email"
          name="email"
          placeholder="name@email.com"
          autoComplete="off"
          className="h-[3.25rem] w-full rounded-xl bg-background px-3 py-4 text-base text-foreground shadow-[0_0_0_1px_var(--border)_inset] outline-none placeholder:text-muted-foreground min-[1200px]:w-[20.5rem]"
        />
        <button
          type="submit"
          className="h-[3.25rem] shrink-0 rounded-xl bg-primary px-5 py-[15px] text-base font-medium text-primary-foreground"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
