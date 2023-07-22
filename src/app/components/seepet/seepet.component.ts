import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/interfaces/pet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seepet',
  templateUrl: './seepet.component.html',
  styleUrls: ['./seepet.component.css']
})
export class SeepetComponent implements OnInit {
  id: number;
  pet!: Pet;
  loading: Boolean = false;

  // pet$: Observable<Pet>;

  constructor(private _petService: PetService, private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    // this.pet$ = this._petService.getPet(this.id);
    this.getPet();
  }

  getPet() {
    this.loading = true;
    this._petService.getPet(this.id).subscribe(data => {
      this.pet = data;
      this.loading = false;
    })
  }

}
