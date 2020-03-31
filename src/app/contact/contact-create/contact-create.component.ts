//component is more than just logic, it needs a template

import { Component } from '@angular/core';/*4. Import to use Component. @angular/core is one of the ng package
The package includes core feature like that component decorator.*/
//?import { create } from 'domain';

/*1. Create a component by simply creating a new class
Class is a ts feature. It is a blueprint for an obj.
We never create that component obj, we give it to angular to
instantiate it and create it. */

@Component({ //2. Add a decorator to turn it into an component that ng understand
  selector:'app-contact-create', /*2b. Allows us to this component as our own html tag. Starts with app- to avoid clashes with normal html element names.*/
  templateUrl: './contact-create.component.html'/* 2a. html code or path to longer files*/

})
export class ContactCreateComponent{ /*3. Define a class. Attach package to class*/
  newContact = 'NO ONE'; /*Need to set content and store that content. It can also be referred to from the template */
  onAddContact(){/*5. Add a method fof this class. */
    alert('Contact Sent!');//no work!!!
    this.newContact = 'The user\'s post';
  }

}
