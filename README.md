# \<composer-ribbon\>

`composer-ribbon` is a ribbon to display composer, author or contributer information. The ribbon accepts and image, name, url, and social icons.

Basic Example:

```html
<composer-ribbon name='Matthew Sullivan'></composer-ribbon>
```

Advanced Example:

```html
<composer-ribbon colour='#E65100' height='60px'; name='Matthew Sullivan' image='https://tinyurl.com/yczquxhc' url="https://www.matthewsullivan.media/" social='[{"icon":"instagram", "link":"https://www.instagram.com/matthewjamesthefirst/"},{"icon":"linkedin", "link":"https://www.linkedin.com/in/matthew-sullivan/"}]'></composer-ribbon>
```

### Styling

The following custom properties available on composer-ribbon:

| Custom property | Description | Default / Usage |
| --- | --- | --- |
| `name` | The composer name that will be displayed | `Composer Name` |
| `image` | A path to an image of the composer | `../assets/img/defualt-icon.png` |
| `url` | A url to link out to when the composer name is clicked | `#` |
| `social` | A JSON style array that contains two keys. 1). the icon to be use. 2). The url to navigate to when the icon is clicked | `{[{"icon":"instagram", "link":"https://www.instagram.com/matthewjamesthefirst/"},{"icon":"linkedin", "link":"https://www.linkedin.com/in/matthew-sullivan/"}]}` |
| `colour` | The colour of the composer-ribbon | `#55555` |
| `height` | The height of the composer-ribbon | `40px` |

### Available Style Updates
- colour
- height

### Available icons
- twitter
- github
- facebook
- instagram
- linkedin
- youtube
- rss
- vimeo
- google +
