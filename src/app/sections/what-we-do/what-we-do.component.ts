import { Component, OnInit } from '@angular/core';
import { Service } from './service';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  providers: [ServicesService],
  styleUrls: ['./what-we-do.component.scss'],
})
export class WhatWeDoComponent implements OnInit {
  services: Service[] = [];
  imagesPaths: string[] = [
    '/assets/full-responsive.png',
    '/assets/ui-ux-designer.png',
    '/assets/support.png',
  ];

  constructor(private commentsService: ServicesService) {}

  ngOnInit(): void {
    this.getWhatWeDo();
  }

  getWhatWeDo(): void {
    this.commentsService
      .getServices()
      .subscribe(services => (this.services = services));
  }
}
