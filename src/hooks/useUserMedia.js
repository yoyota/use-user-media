import to from "await-to-js"
import { useState, useEffect } from "react"

export default function useUserMedia(
  constraints = { audio: true, video: true }
) {
  const [stream, setStream] = useState()
  const [error, setError] = useState()
  const constraintsString = JSON.stringify(constraints)

  useEffect(() => {
    const constraintsObject = JSON.parse(constraintsString)
    const { audio, video } = constraintsObject || {}
    if (!video && !audio) {
      return
    }

    const userMediaError = checkUserMediaError()
    if (userMediaError) {
      setError(userMediaError)
      return
    }

    async function setupCamera() {
      const [err, mediaStream] = await to(
        navigator.mediaDevices.getUserMedia(constraintsObject)
      )
      if (err) {
        setError(err)
        return
      }
      setStream(mediaStream)
    }
    setupCamera()
  }, [constraintsString])

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
