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
