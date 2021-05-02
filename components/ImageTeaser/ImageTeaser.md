### Image Teaser

```jsx
<ImageTeaser
  imgUrl="https://source.unsplash.com/random"
  onShowDetails={() => console.log('clicked')}
  altText="Hello world"
  author={{ name: 'Harry Potter', gitHub: 'github.com/harrypotter' }}
/>
```

### Image Teaser flipped

```jsx
<ImageTeaser
  imgUrl="https://source.unsplash.com/random"
  onShowDetails={() => console.log('clicked')}
  altText="Hello world"
  flip
  author={{ name: 'Harry Potter', gitHub: 'github.com/harrypotter' }}
/>
```
