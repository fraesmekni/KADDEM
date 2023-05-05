import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EquipeService } from 'src/app/Services/equipe.service';
import { PartenaireService } from 'src/app/Services/partenaire.service';
declare var google:any ;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('pieChart') pieChart!: ElementRef;

  J=0;
  S=0;
  E=0;

  drawChart = () => {

    const data = google.visualization.arrayToDataTable([
      ['Equipe', 'equipe by Niveau'],
      ['JUNIOR', this.J.valueOf() ],
      ['SENIOR', this.S.valueOf() ],
      ['EXPERT', this.E.valueOf() ]
    ]);

    const options = {
      title: 'Equipe par  Niveau' ,
      titleColor: 'white',
      legend: 'none',
      backgroundColor: '#1a2035',
      pieSliceText: 'label',
      slices: {
        0: { color: '#88339f' },
        1: { color: '#cbbbc7' },
        2: { color: '#62a6ad' },
       
      },
      
is3D: true,


    };

    const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

    chart.draw(data, options);

    var percent = 0;
// start the animation loop
var handler = setInterval(function(){
    // values increment
    percent += 1;
    // apply new values
    data.setValue(0, 1, percent);
    data.setValue(1, 1, 100 - percent);
    // update the pie
    chart.draw(data, options);
    // check if we have reached the desired value
    if (percent > 74)
        // stop the loop
        clearInterval(handler);
}, 30);


  }

  constructor(private equipeservice:EquipeService) { }

  stats !: any;
  ngOnInit(): void {
    this.equipeservice.stats().subscribe((d)=>{
      //console.log(d);
      this.stats=d;
      this.J=this.stats.Matériel?? 0;
      this.S=this.stats.Financier?? 0;
      this.E=this.stats.Juridique?? 0;
    })

  }


  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);

  }


}
