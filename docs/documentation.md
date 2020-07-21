- [Github repository](https://github.com/yoyota/use-user-media)

## Installation

```bash
npm install --save use-user-media
```

## Usage

### useUserMedia

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
      width="100%"
    />
  )
}

;<UseUserMediaExample />

```

### useUserMediaVideo

```jsx
import { useUserMediaVideo } from "use-user-media"

const width = 600
const height = 500
function UseUserMediaVideoExample() {
  const constraints = { video: true, audio: false }
  const [err, videoElement] = useUserMediaVideo(constraints)
  if (err) {
    return <p>{err.toString()}</p>
  }
  return (
    <canvas
      ref={c => {
        if (!c || !videoElement) {
          return
        }

        const ctx = c.getContext("2d")
        function draw() {
          ctx.drawImage(videoElement, 0, 0, width, height)
          requestAnimationFrame(draw)
        }
        requestAnimationFrame(draw)
      }}
      height={height}
      style={{ width: "100%" }}
      width={width}
    />
  )
}

;<UseUserMediaVideoExample />

```