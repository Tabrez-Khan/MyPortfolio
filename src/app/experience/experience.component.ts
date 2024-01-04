import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Manager | SE",
        company: "Morgan Stanley",
        color: "#3781c2",
        companylogo: "/Tabrez_Portfolio/assets/images/morgan.jpg",
        date: "Current",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Responsible for maintaining, strategic planning, and continuous development of sophisticated codes",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Software Engineer",
        company: "Baker Huges by General Electric",
        color: "#3f703f",
        companylogo: "/Tabrez_Portfolio/assets/images/baker.jpg",
        date: "2 years",
        desc: "Responsible for exposing the real world sensitive data using the OPCDA/OPCUA protocol.",
      },
      {
        role: "Software Engineer",
        company: "Finoux Solution",
        color: "#054470",
        companylogo: "/Tabrez_Portfolio/assets/images/finoux.jpeg",
        date: "1.5 Years",
        desc: "Roles and responsibility includes developing a trading website catering to both equity and mutual funds.",
      },
      {
        role: "Software Developer",
        company: "Xtreme Media",
        color: "#7A1F00",
        companylogo: "/Tabrez_Portfolio/assets/images/xm.jpg",
        date: "3 Years",
        desc: "In charge of creating windows touch application.",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
