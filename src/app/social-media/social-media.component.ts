import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/Tabrez-Khan",
    linkedin: "https://www.linkedin.com/in/khan-tabrez-64b87982/",
    gmail: "taki8192@gmail.com",
    instagram : "https://www.instagram.com/tabbyyyyy_007/",
    facebook: "https://www.facebook.com/profile.php?id=61550739001202"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
