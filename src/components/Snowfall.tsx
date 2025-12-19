import ReactSnowfall from 'react-snowfall'

interface SnowfallProps {
  count?: number
}

export function Snowfall({ count = 100 }: SnowfallProps): React.ReactElement {
  return (
    <ReactSnowfall
      snowflakeCount={count}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
      speed={[0.5, 2.0]}
      wind={[-0.5, 1.0]}
      radius={[1, 4]}
      color="rgba(255, 255, 255, 0.8)"
    />
  )
}
