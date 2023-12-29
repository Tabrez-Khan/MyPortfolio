import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: "Master of Computer Application",
      duration: "2016",
      subtitle: "Mumbai University",
      content: "🎓 Mastered the Code: MCA Graduate",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "bachelor of Science in Mathematics",
      duration: "2012",
      subtitle: "Mumbai University",
      content: "🎓 Graduated with a major in Mathematics in 2012.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2009",
      subtitle: "Maharashtra State Board",
      content: "🎓 Completed Higher Secondary Certificate (HSC) in 2009",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "SSC and HSC",
      duration: "2007",
      subtitle: "Maharashtra State Board",
      content: "🎓 Completed 10th Grade in 2007 and ",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
