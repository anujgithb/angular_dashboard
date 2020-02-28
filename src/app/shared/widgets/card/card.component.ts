import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widgets-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label:string;
  @Input() total:string;
  @Input() percentage:string;
  @Input() data:[]
  chartOptions={};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth:0,
        margin:[2,2,2,2],
        height:60

    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },

    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        split: true,
        outside: true
    },
    legend: {
      enabled: false
    },
  
    xAxis: {
      lables: {
        enabled: false
      },
      title:{
        text: null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
    },
  
    yAxis: {
      lables: {
        enabled: false
      },
      title:{
        text: null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
    },

    series: [{
        data: this.data
    }]

    };

    HC_exporting(Highcharts);
    
    setTimeout(() => {
        window.dispatchEvent(
            new Event('resize')
        );
    }, 300);

  }

}
