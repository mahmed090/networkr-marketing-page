export default function SkeletonCard() {
  return (
    <div className="bg-card border border-card-border rounded-2xl p-6 space-y-4">
      {/* Avatar + text block */}
      <div className="flex items-start gap-4">
        <div className="skeleton w-14 h-14 rounded-full shrink-0" />
        <div className="flex-1 space-y-2 pt-1">
          <div className="skeleton h-4 w-[120px]" />
          <div className="skeleton h-3 w-[180px]" />
          <div className="skeleton h-2.5 w-[100px]" />
        </div>
      </div>
      {/* Tags */}
      <div className="flex gap-2">
        <div className="skeleton h-5 w-[60px] rounded-full" />
        <div className="skeleton h-5 w-[60px] rounded-full" />
      </div>
      {/* Divider */}
      <div className="skeleton h-px w-full" />
      {/* Button */}
      <div className="skeleton h-10 w-full rounded-lg" />
    </div>
  );
}
