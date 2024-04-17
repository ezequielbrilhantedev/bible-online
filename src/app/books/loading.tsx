import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Skeleton className="col-span-6 row-span-6 h-[856px]" />
    </div>
  )
}
