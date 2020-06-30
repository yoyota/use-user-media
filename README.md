# React use-user-media

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
