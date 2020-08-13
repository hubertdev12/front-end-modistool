import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DonneeServiceService } from './../../services/donneeService.service';
import { Donnee } from './../../model/donnee';


@Component({
  selector: 'app-donnee',
  templateUrl: './donnee.component.html',
  styleUrls: ['./donnee.component.css']
})
export class DonneeComponent implements OnInit {

  dones: Donnee[] = [];

  constructor(private donneeService: DonneeServiceService) { }


  ngOnInit() {

    this.list();
    new Highcharts.Chart('graph', this.options);
  }

  list(){
    this.donneeService.findAll().subscribe(result => {
      this.dones = result;
    });
  }

  public options: any = {
    Chart: {
      type: 'area',
      height: 800
    },
    title: {
      text: 'Données historiques et projections'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet' , 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
      tickmarkPlacement : 'on',
      title: {
        enabled: false
      }
    },
    series: [{
      name: 'Historique',
      data: [502, 635, 809, 947, 1402, 3634, 5268, 502, 635, 809, 947, 1402]
  }, {
      name: 'Projection',
      data: [163, 203, 276, 408, 547, 729, 628, 163, 203, 276, 408, 547]
  }]
  }
}
