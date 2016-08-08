// boilerplate ng2 imports - copy/paste as needed into other components/directives/etc.
import * as CORE from '@angular/core';        // Component, Directive, Pipe, Injectable, HostBinding, HostListener, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
// import * as ROUTER from "@angular/router";    // Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, provideRouter
// import * as RXJS from "rxjs/Rx";              // Observable
// import * as FORMS from "@angular/forms";      // FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES


@CORE.Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
