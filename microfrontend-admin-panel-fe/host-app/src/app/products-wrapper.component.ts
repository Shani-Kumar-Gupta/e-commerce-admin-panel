import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { loadRemoteModule } from '@angular-architects/module-federation';
// import('mfeProducts/ProductsApp');

@Component({
  selector: 'app-products-wrapper',
  template: '<div id="mfe-products-root"></div>',
})
export class ProductsWrapperComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private host: ElementRef, private router: Router) { }

  async ngOnInit() {
    // Dynamically load the remote web component via Module Federation
    await loadRemoteModule({
      remoteName: 'mfeProducts',
      exposedModule: './ProductsApp'
    });
    const element = document.createElement('products-element');
    element.setAttribute('initialPath', encodeURI(this.router.url));
    this.host.nativeElement.querySelector('#mfe-products-root').appendChild(element);
  }

  ngOnDestroy() {
    const root = this.host.nativeElement.querySelector('#mfe-products-root');
    if (root) {
      root.innerHTML = '';
    }
  }
}
