import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "UI / UX [WPF, Angular, ASP MVC]",
        progressPercentage: "75%"
      },
      {
        Stack: "Backend [C# .NET]",
        progressPercentage: "60%"
      },
      {
        Stack: "Analytical / Logic",
        progressPercentage: "70%"
      },
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
