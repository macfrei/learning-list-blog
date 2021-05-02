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
    margin: 0;
    padding: 2rem;
    font-size: 1.125rem;
    font-family: sans-serif;
}

h1, h2, h3 {
    margin: 0;
}
`
