import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "Energetic Full Stack Developer on a quest to explore diverse technology stacks with a passion for pushing boundaries.",
    skills: [
      "🖥️ C# .NET WPF: With a keen eye for desktop application development, I excel in utilizing C# .NET WPF to build rich, interactive applications. From designing intuitive user interfaces to implementing complex logic, I bring desktop solutions to life.",
      "🅰️ Angular Web Applications: Embrace the modern era of web development with my proficiency in Angular. I architect and develop dynamic, single-page web applications that deliver a responsive and engaging user interface.",
      "🌐 ASP.NET MVC: As an adept ASP.NET MVC developer, I specialize in creating robust and scalable web applications. My experience includes building responsive interfaces, handling server-side functionalities, and ensuring seamless user experiences.",
      "Exploration is at the core of my approach. I thrive on staying updated with the latest technologies and frameworks, ensuring that every project benefits from cutting-edge solutions.",
      "Let's embark on a journey of innovation and create exceptional software experiences together! 💻✨"
    
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
