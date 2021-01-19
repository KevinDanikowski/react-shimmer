import React from 'react'
import Image, { Shimmer } from '@kevindanikowski/react-test-components'
import { TestComponent } from '@kevindanikowski/react-test-components'

export default function App() {
  return (
    <div>
      {/* <ExampleComponent /> */}
      <Image
        src='https://source.unsplash.com/random/800x600'
        fallback={<Shimmer width={800} height={600} />}
      />
    </div>
  )
}
