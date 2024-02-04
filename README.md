## [ngx-skeleton-loader](https://www.npmjs.com/package/ngx-skeleton-loader)

This component is made in a transparent and easier way. Which is integrate skeleton-loader with additional tooling process. 

- Server-side rendering.
- Progressive rendering.

Quite easy to be integrated in order to improve the user experience 🎉

### Setup

`npm install ngx-skeleton-loader --save`

It is mandatory to add NgxSkeletonLoaderModule to your standalone component. 

To make `<ngx-skeleton-loader>` into components in your application.

. . . </br>
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'; </br>
. . .

![image](https://github.com/JoseMMorales/NgRx-Posts/assets/43299285/23d24650-8777-4a82-b3c4-c9b1434d2825)

### Theming

You can define different styles for the skeleton loader by passing an object with the css styles - in dashed case - into the component via [theme] attribute.

![image](https://github.com/JoseMMorales/NgRx-Posts/assets/43299285/fb426945-52cf-436f-91f6-11d702e73dd6)

### Overwriting Styles

By using :host and ::ng-deep styles can be overwritten in skeleton-loader.

![image](https://github.com/JoseMMorales/Angular-17SSR/assets/43299285/ad7159a7-c649-4085-917a-a8a0b787f12e)

### Author
JoseMMorales
