import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from './experience';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  providers: [ExperienceService],
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  experience: ExperienceModel[] = [];
  imagePaths: string[] = ['/assets/dribbble.png', '/assets/behancer.png'];
  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience(): void {
    this.experienceService
      .getExperience()
      .subscribe(experience => (this.experience = experience));
  }
}
