## CNBC React Carbon template

CNBC campaign template for React.

# CNBC Wildcard Campaign Template

### Getting Started

Clone The repository from comand line go to a folder inside your Documents or any other desire location.

```
git clone git@bitbucket.org:cnbc-catalyst/react-template.git
```

This will create a folder react-template. Enter into this directorty and install

```
cd cnbc-carbon-wildcard
npm install
```

### Comands

**1. Start Dev server**

```
npm run start
```

**2. Build Campaign to upload to Carbon**

From Master Branch run:

```
npm run build
```

**3. Story book documentation**

```
npm run storybook
```

**4. Responsive Images**
To generate responsive versions of images for mobile desktop and tablet we can add images **(JPG only)** into the folder public/images/responsive/origin and run the command below:

```
npm run build:images
```

This will generate 3 images on the folder public/images/responsive/output/ the following images: imagename-tablet.jpg, imagename-mobile.jpg and imagename-desktop.jpg

T

### Notes

On src/index.html you will find the base temaplte for the campaign page. This repo will only allow you to create 1 page. Do not add more index.html files beacause will not be process. This index.html file will have text keywords that if changed will cause failures on the build process. Please make sure that the following keywords are allways present.

```
<!-- APP_BUNDLE_CSS -->
```

This one will get replace with the build CSS from the source.

```
<!-- APP_BUNDLE_JS -->
```

The CDN versions of react 16 with the JS bundle

```
{{RENDERED_APP}}
```

This will get replace by the SSR(Server Side Render) version of the app.

#### Notes:

- Images

Images or any other asset from the public folder has to be declare in absolute url format to the root of the dev server example:

```
<img src="http://localhost:8080/images/test.jpg"/>
```

The build pipeline will replace http://localhost:8080/ to the correspondent deployment enviroment.

- AWS Root:

Please make sure that the value on package.json aws_root is formated without a tail slash at the end like the one below

**YES**`"aws_root": "https://content.cnbccatalyst.com/advertorial"`

**NO** `"aws_root": "https://content.cnbccatalyst.com/advertorial/"`

## Deployed URL

https://uk-catalyst-studio-demos.s3-eu-west-1.amazonaws.com/advertorial/catalyst-carbon-react-template/index.html

## Demo

https://www.cnbc.com/preview/106570981
