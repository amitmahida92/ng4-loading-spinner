# ng4-loading-spinner 
Angular 4 custom async loading spinner with two simple methods for your asychronous calls.
Custom loading template & loading text inputs are also available.

> Your stars on this git repo can make others happy! :-) 

## Default Spinner Example

[Open Plunker](https://plnkr.co/edit/I3MoLhxz1NO9PVtMTiaH?p=preview)

## Custom Template Example

[Open Plunker](https://plnkr.co/edit/gX8uvP2hb7DiE8Hs0a1R?p=preview)

## Installation

`npm i ng4-loading-spinner --save`

## Description 	
    
> *You can override the css for your customized spinner.*
> *You can also configure your own threshold to show spinner only for more expensive processes!*

## Usage 

> Import module to your application master module

```javascript
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
```

> Make an import entry as shown below

```javascript

imports: [ Ng4LoadingSpinnerModule ]

```

> Include spinner component to your root level component.

```html

<app-spinner> </app-spinner>

```

> Import `Ng4LoadingSpinnerService` to the component where you want to show the spinner.

```javascript

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

```

> Inject dependancy 

```javascript

    constructor(
        private spinnerService: Ng4LoadingSpinnerService
    ) { }

```

> Use `show()` method to display the loading spinner.

```javascript

this.spinnerService.show();

```

> Use `hide()` method to hide the loading spinner once the processing is done.

```javascript

this.spinnerService.hide();

```

## Example

```javascript

    this.spinnerService.show();     
    this.http.get(GLOBAL['CONFIG_URL'])
        .subscribe(data => {
            this.spinnerService.hide();
        });

```

## Custom template

> *Inputs* :

> *[template]* : Accepts HTML which generates the loading spinner. You can apply additional css to design your own spinner, or can just pass *.gif image to show the loading spinner.

> *[loadingText]* : Accepts a string to display the text while the loading process.

> *[threshold]* : Accepts time in milliseconds for threshold through which you can conditionally show the spinner only for expensive calls. *Default is 500 ms.*

> default *[loadingText]* text would be blank.

> app.component.html : both are optional if not provided default would be shown.        

```html    

<app-spinner [threshold]="2000" [template]="template" [loadingText]="'Please wait...'"></app-spinner>

```    
> [threshold]="2000" : This will show the loading bar for the only processes which will take time more 2 secs.

> app.component.ts    

```javascript

template: string =`<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`

```
        
