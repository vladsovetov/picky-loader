type PickyLoaderProps = {
  sources: string[]
}

export const PickyLoader = ({ sources }: PickyLoaderProps) => {
  return sources[0]
}
