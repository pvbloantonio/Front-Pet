import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PetService } from '../../services/pet.service';



@Component({
  selector: 'app-listpet',
  templateUrl: './listpet.component.html',
  styleUrls: ['./listpet.component.css']
})
export class ListpetComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'age', 'breed', 'color', 'weight', 'acciones'];
  dataSource = new MatTableDataSource<Pet>();
  loading: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _petService: PetService) {

  }

  ngOnInit(): void {
    this.getPets();

  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.data.length > 0) {

      this.paginator._intl.itemsPerPageLabel = 'Resultados por página';
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // getPets() {
  //   this.loading = true;
  //   this._petService.getPets().subscribe(data => {
  //     this.loading = false;
  //     this.dataSource.data = data;
  //   }, (error) => {
  //     this.loading = false;
  //     console.error(`Error: ${error}`);

  //   })

  // }
  getPets() {
    this.loading = true;
    this._petService.getPets().subscribe({
      next: (data) => {
        this.loading = false;
        this.dataSource.data = data
      },
      error: (e) => {
        this.loading = false;
        console.error(e);
      },
      complete: () => console.info('complete')
    })

  }

  deletePet(id: number) {
    this.loading = true;
    this._petService.getDelete(id).subscribe(() => {
      this.successMenssage();
      this.loading = false;
      this.getPets();
    });

  }

  successMenssage() {
    this._snackBar.open('Se ha eliminado.', 'OK', {
      duration: 3000,
      horizontalPosition: 'right'
    })

  }



}
