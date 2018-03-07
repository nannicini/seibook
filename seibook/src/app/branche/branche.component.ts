import { Component, OnInit } from '@angular/core';
import { Branca } from '../branca';
import { BrancaService } from '../branca.service';


@Component({
  selector: 'app-branche',
  templateUrl: './branche.component.html',
  styleUrls: ['./branche.component.css']
})
export class BrancheComponent implements OnInit {
  
  selectedBranca: Branca;
  branche: Branca[];
 constructor(private brancaService: BrancaService) { }
   ngOnInit() {
    this.getBranche();
  }

}
