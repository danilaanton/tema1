import { Component } from '@angular/core';
import { Service } from '../../models/service';
import { City } from '../../models/city';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  services:Service[] = [
    {
      name: 'Travel',
      article: 'Article Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Travel Arrangmenets',
      article: 'Article Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Our Professional Guide',
      article: 'Article Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Activities',
      article: 'Article Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Service',
      article: 'Article Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ];

  cities:City[] = [
    {
      name: 'Belakhum',
      image: 'https://www.lrbtravelteam.com/wp-content/uploads/2020/03/debotakhum-bandarban.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Sajek Valley',
      image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogZ0l0jH86lLizQsqRGUJkeJf-dNjfy-nT.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Sarighat',
      image: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe293ee70-0678-11eb-9364-66fa8aae4c3f.jpg?crop=5913%2C3942%2C0%2C0',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'The City',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'The City',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'The City',
      image: 'https://cdn.britannica.com/48/179448-138-40EABF32/Overview-New-York-City.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'The City',
      image: 'https://media.istockphoto.com/id/1287538714/photo/main-street-running-through-small-ohio-town-aerial.jpg?s=612x612&w=0&k=20&c=piFX_nP3qKfc4iA5KdEGeK-3WZiOoGkPmqV_01IaCVw=',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'The City',
      image: 'https://media.istockphoto.com/id/1281556334/photo/sunset-over-the-small-american-town-in-mountains.jpg?s=612x612&w=0&k=20&c=J8C05W_L72YiqJAFPEFAtE1QKPMvsD2qdifcITrbrRE=',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ];
}
