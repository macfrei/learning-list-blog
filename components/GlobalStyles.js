import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

:root {
  --primary-400: hsl(342,93%,71%);
  --secondary-400: hsl(51,99%,62%)
}

body {
    font-family: sans-serif;
    font-size: 1.125rem;
    margin: 0;
    padding: 2rem;
}

h1, h2, h3 {
    margin: 0;
}
`
