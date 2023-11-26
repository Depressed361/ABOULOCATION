import { Component , OnInit } from '@angular/core';
import { Vehicules } from './mock.vehicule-list';
import { Vehicule } from './vehicule';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  vehiculesList:Vehicule[] = Vehicules;
 vehiculeSelected:Vehicule|undefined;

  ngOnInit(): void {
    console.table(this.vehiculesList);
 ;
  }

  selectVehicule(VehiculeId: string) {
    const id =+VehiculeId;}


   /* const vehicule: Vehicule|undefined = this.vehiculesList.find(vehicule => vehicule.id == +VehiculeId);
;

    if(vehicule){
      console.log(`vous avez cliqué sur  ${vehicule.model}`)
    this.vehiculeSelected = vehicule;}
    else{
      console.log(`vehicule non trouvé`);
      this.vehiculeSelected = vehicule;
    }
}*/
selectouVehicule(Vehicule : Vehicule ){
    console.log(`vous avez cliqué sur  ${Vehicule.model}`)
  this.vehiculeSelected = Vehicule;}

}

