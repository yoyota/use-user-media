import { useState, useEffect } from "react"
import useUserMedia from "./useUserMedia"

export default function useUserMediaVideo(
  constraints = { audio: true, video: true },
  disabled = false
) {
  const [video, setVideo] = useState()
  const [err, stream] = useUserMedia(constraints, disabled)
  useEffect(() => {
    if (!stream) {
      return
    }
    const videoEl = document.createElement("video")
    videoEl.srcObject = stream
    videoEl.onloadedmetadata = () => {
      videoEl.play()
      setVideo(videoEl)
    }
  }, [stream])
  return [err, video]
}
