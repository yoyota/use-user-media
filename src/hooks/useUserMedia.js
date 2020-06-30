import to from "await-to-js"
import { useState, useEffect } from "react"

export default function useUserMedia() {
  const [stream, setStream] = useState()
  const [error, setError] = useState()

  useEffect((constraints = { audio: true, video: true }) => {
    const userMediaError = checkUserMediaError()
    if (userMediaError) {
      setError(userMediaError)
      return
    }
    const constraintsString = JSON.stringify(constraints)
    async function setupCamera() {
      const [err, mediaStream] = await to(
        navigator.mediaDevices.getUserMedia(JSON.parse(constraintsString))
      )
      if (err) {
        setError(err)
        return
      }
      setStream(mediaStream)
    }
    setupCamera()
  }, [])

  useEffect(() => {
    return () => {
      if (!stream) {
        return
      }
      stream.getTracks().forEach(track => track.stop())
    }
  }, [stream])
  return [error, stream]
}

function checkUserMediaError() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return new Error(
      "Browser API navigator.mediaDevices.getUserMedia not available"
    )
  }
  return null
}
