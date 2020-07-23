```jsx
import { useUserMedia } from "use-user-media"

function UseUserMediaExample() {
  const constraints = { video: true, audio: false }
  const [err, stream] = useUserMedia(constraints)
  if (err) {
    return <p>{err.toString()}</p>
  }
  if (!stream) {
    return <p>Loading...</p>
  }
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      ref={v => {
        if (!v) {
          return
        }
        v.srcObject = stream
      }}
      autoPlay
      muted
      playsInline
      width="100%"
    />
  )
}

;<UseUserMediaExample />

```
