function SellerDashboardStats({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="glass-card p-md rounded-lg flex flex-col gap-sm">
      <div className="flex justify-between items-start">
        <span className="font-code-sm text-code-sm text-on-surface-variant">
          {title}
        </span>
      </div>
      <div className="text-[32px] font-black text-primary-fixed-dim tracking-tight">
        {content}
      </div>
      {/* <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-xs">
        <div className="h-full bg-primary-fixed-dim w-[78%] scanline-progress"></div>
      </div>
      <p className="text-code-sm text-on-surface-variant">
        78% of daily target reached
      </p> */}
    </div>
  );
}

export default SellerDashboardStats;
