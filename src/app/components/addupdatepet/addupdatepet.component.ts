import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../../interfaces/pet';
import { PetService } from '../../services/pet.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addupdatepet',
  templateUrl: './addupdatepet.component.html',
  styleUrls: ['./addupdatepet.component.css']
})
export class AddupdatepetComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;
  isTextAddorUpdate: string = 'Agregar';

  constructor(private fb: FormBuilder, private _petService: PetService, private _snackBar: MatSnackBar,
    private router: Router, private aRoute: ActivatedRoute) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      color: ['', Validators.required],
      age: ['', Validators.required],
      weight: ['', Validators.required],
    });

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.isTextAddorUpdate = 'Actualizar';
      this.getPet(this.id);
    }
  }

  getPet(id: number) {
    this.loading = true;
    this._petService.getPet(id).subscribe(data => {
      this.form.setValue({
        name: data.name,
        breed: data.breed,
        age: data.age,
        color: data.color,
        weight: data.weight
      })
      this.loading = false;
    });
  }

  addUpdatePet() {

    // Armamos el Objeto
    const pet: Pet = {
      name: this.form.value.name,
      breed: this.form.value.breed,
      age: this.form.value.age,
      color: this.form.value.color,
      weight: this.form.value.weight
    }

    if (this.id != 0) {
      pet.id = this.id;
      this.updatePet(this.id, pet);
    } else {
      this.addPet(pet);
    }



  }

  updatePet(id: number, pet: Pet) {
    this.loading = true;
    this._petService.updatePet(id, pet).subscribe(() => {
      this.loading = false;
      this.successMenssage('actualizado')
      this.router.navigate(['/listpet'])
    });
  }

  addPet(pet: Pet) {
    this._petService.addPet(pet).subscribe(() => {
      this.successMenssage('creado');
      this.router.navigate(['/listpet'])
    })
  }

  successMenssage(text: string) {
    this._snackBar.open(`Se ha ${text} correctamente.`, 'OK', {
      duration: 3000,
      horizontalPosition: 'right'
    })
  }
}
