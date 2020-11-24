# React use-user-media

![lint](https://github.com/yoyota/use-user-media/workflows/lint/badge.svg) ![github pages](https://github.com/yoyota/use-user-media/workflows/github%20pages/badge.svg) ![release](https://github.com/yoyota/use-user-media/workflows/release/badge.svg) ![npm publish](https://github.com/yoyota/use-user-media/workflows/npm%20publish/badge.svg)

Get stream from media devices using react hook
## Demo
https://use-user-media.yoyota.dev/#/useUserMedia

## Documentation

## Installation

```bash
npm install --save use-user-media
```

### Usage

#### useUserMedia

```js
import { useUserMedia } from "use-user-media"

const constraints = { video: true, audio: true }
// eslint-disable-next-line no-unused-vars
const [err, stream] = useUserMedia(constraints)
```

#### useUserMediaVideo

```js
import { useUserMediaVideo } from "use-user-media"

const constraints = { video: true, audio: true }
// eslint-disable-next-line no-unused-vars
const [err, videoElement] = useUserMediaVideo(constraints)
```
