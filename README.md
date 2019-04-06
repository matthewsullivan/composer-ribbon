# Polymer 3.0 Element \<composer-ribbon\>

`composer-ribbon` is a ribbon to display composer, author or contributor information. The ribbon accepts an image, name, url, and social icons.

### Serving

`$ npm install`
`$ polymer serve`

Basic Example:

```html
<composer-ribbon name='Matthew Sullivan'></composer-ribbon>
```

Advanced Example:

```html
<composer-ribbon colour='#E65100' height='60px'; name='Matthew Sullivan' image='https://tinyurl.com/yczquxhc' url="https://www.matthewsullivan.media/" social='[{"icon":"github", "link":"https://www.github.com/matthew-sullivan/"},{"icon":"linkedin", "link":"https://www.linkedin.com/in/matthew-sullivan/"}]'></composer-ribbon>
```

### Styling

The following custom properties are available:

| Custom property | Description | Default / Usage |
| --- | --- | --- |
| `name` | The composer name that will be displayed | `Composer Name` |
| `image` | A path to an image of the composer | `../assets/img/defualt-icon.png` |
| `url` | A url to link out to when the composer name is clicked | `#` |
| `social` | A JSON style array that contains two keys. 1). the icon to be used. 2). The url to navigate to when the icon is clicked | `[{"icon":"github", "link":"https://www.github.com/matthew-sullivan/"},{"icon":"linkedin", "link":"https://www.linkedin.com/in/matthew-sullivan/"}]` |
| `colour` | The colour of the composer-ribbon | `#555` |
| `height` | The height of the composer-ribbon | `40px` |

### Available Style Updates
- colour
- height

### Available Social Icons
- dribble
- facebook
- github
- googleplus
- instagram
- lastfm
- linkedin
- medium
- quora
- rss
- skype
- twitter
- vimeo
- vimeo
- vine
- youtube
