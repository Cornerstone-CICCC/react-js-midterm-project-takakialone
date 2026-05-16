type LoadingProps = { message?: string };

function Loading({ message = "LOADING INVENTORY..." }: LoadingProps) {
  return (
    <section
      className="flex flex-col gap-md"
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="flex items-center gap-sm font-label-mono text-label-mono text-primary-fixed-dim">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-outline-variant border-t-primary-fixed-dim" />
        <span>{message}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-gutter">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className="overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low"
            key={index}
          >
            <div className="h-64 animate-pulse bg-surface-container-high" />
            <div className="flex flex-col gap-sm p-md">
              <div className="h-3 w-24 animate-pulse rounded-full bg-surface-container-highest" />
              <div className="h-7 w-3/4 animate-pulse rounded bg-surface-container-high" />
              <div className="h-4 w-full animate-pulse rounded bg-surface-container-highest" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-surface-container-highest" />
              <div className="mt-sm h-10 w-full animate-pulse bg-primary-container/30" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Loading;
