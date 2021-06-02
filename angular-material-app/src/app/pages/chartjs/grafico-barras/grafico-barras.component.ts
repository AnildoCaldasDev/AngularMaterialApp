import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnInit {

  title = "Dashboard";
  barChart: any;
  lessThanOrGreaterThan = 'lessThan';
  filterLimit = 100;
  from = '0';
  toMonth = '7';

  formMatFilterSelect = new FormControl('0', [
    Validators.required,
    Validators.min(1)
  ]);

  months = [{ month: 'Jan', value: '0' },
  { month: 'Feb', value: '1' },
  { month: 'Mar', value: '2' },
  { month: 'Apr', value: '3' },
  { month: 'May', value: '4' },
  { month: 'Jun', value: '5' },
  { month: 'Jul', value: '6' },
  { month: 'Aug', value: '7' }];

  levelsArr = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'];

  chartData = {
    "dataSet1": [32, 89, 83, 30, 77, 84, 65, 36],
    "dataSet2": [99, 30, 77, 30, 90, 43, 54, 93].reverse(),
    "dataSet3": [65, 55, 32, 30, 78, 18, 32, 42].reverse(),
  };

  labelsSeries: string[] = ['1ª Série', '2ª Série', '3ª Série'];

  constructor() { }

  ngOnInit(): void {

    this.barChart = new Chart('bar',
      {
        type: 'bar',
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Gráfico de Aulas por Série'
          },
        },
        data: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
          datasets: [
            {
              type: 'bar',
              label: '1ª Série',
              //data: [32, 89, 83, 30, 77, 84, 65, 36],
              data: this.chartData.dataSet1,
              backgroundColor: 'red',
              borderColor: 'rgba(255,0,255,0.4)',
              fill: false,
            },
            {
              type: 'bar',
              label: '2ª Série',
              // data: [99, 30, 77, 30, 90, 43, 54, 93].reverse(),
              data: this.chartData.dataSet2,
              backgroundColor: 'blue',
              borderColor: 'rgba(0,0,255,0.4)',
              fill: false,
            },
            {
              type: 'bar',
              label: '3ª Série',
              //data: [65, 55, 32, 30, 78, 18, 32, 42].reverse(),
              data: this.chartData.dataSet3,
              backgroundColor: 'green',
              borderColor: 'rgba(0,0,255,0.4)',
              fill: false,
            }
          ]
        }
      });
  }


  changeSeries(event: MatCheckboxChange) {
    console.log(event.source.id);
    console.log(event.source.checked);





  }

  applyFilter(value) {
    //console.log(this.chartData.dataSet1);
    this.barChart.data.datasets[0].data = this.chartData.dataSet1;
    this.barChart.data.datasets[1].data = this.chartData.dataSet2;

    this.barChart.data.datasets.forEach((data, i) => {
      if (this.lessThanOrGreaterThan === 'greaterThan') {
        this.barChart.data.datasets[i].data = data.data.map(v => {
          if (v >= value) return v
          else return 0;
        });
        // console.log(">>>>>>>>", this.barChart.data.datasets[i].data);
      } else {
        this.barChart.data.datasets[i].data = data.data.map(v => {
          if (v <= value) return v;
          else return 0;
        });
        //console.log("?????????", this.barChart.data.datasets[i].data);
      }
    });
    this.barChart.update();
  }

  applyDateFilter() {
    this.barChart.data.labels = this.levelsArr.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
    this.barChart.update();
  }

}


// import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
// import { FormControl, Validators } from '@angular/forms';
// import { MatCheckboxChange } from '@angular/material/checkbox';


// @Component({
//   selector: 'app-grafico-barras',
//   templateUrl: './grafico-barras.component.html',
//   styleUrls: ['./grafico-barras.component.css']
// })
// export class GraficoBarrasComponent implements OnInit {

//   title = "Dashboard";
//   barChart: any;
//   lessThanOrGreaterThan = 'lessThan';
//   filterLimit = 100;
//   from = '0';
//   toMonth = '7';

//   formMatFilterSelect = new FormControl('0', [
//     Validators.required,
//     Validators.min(1)
//   ]);

//   seriesFilter = [{ month: '1ª Série', value: '0' }, { month: '2ª Série', value: '1' }, { month: '3ª Série', value: '2' }];

//   levelsArr = ['1ª Série', '2ª Série', '3ª Série'];

//   chartData = {
//     "dataSet1": [32, 89, 83,],
//     "dataSet2": [43, 54, 93],
//     "dataSet3": [52, 30, 78,],
//     "dataSet4": [75, 30, 78],
//     "dataSet5": [18, 32, 42],

//   };

//   labelsSeries: string[] = ['1ª Série', '2ª Série', '3ª Série'];

//   constructor() { }

//   ngOnInit(): void {

//     this.barChart = new Chart('bar',
//       {
//         type: 'bar',
//         options: {
//           responsive: true,
//           title: {
//             display: true,
//             text: 'Gráfico de Aulas por Série'
//           },
//         },
//         data: {
//           labels: ['1ª Série', '2ª Série', '3ª Série'],
//           datasets: [
//             {
//               type: 'bar',
//               label: 'Janeiro',
//               //data: [32, 89, 83, 30, 77, 84, 65, 36],
//               data: this.chartData.dataSet1,
//               backgroundColor: 'red',
//               borderColor: 'rgba(255,0,255,0.4)',
//               fill: false,
//             },
//             {
//               type: 'bar',
//               label: 'Fevereiro',
//               // data: [99, 30, 77, 30, 90, 43, 54, 93].reverse(),
//               data: this.chartData.dataSet2,
//               backgroundColor: 'blue',
//               borderColor: 'rgba(0,0,255,0.4)',
//               fill: false,
//             },
//             {
//               type: 'bar',
//               label: 'Março',
//               //data: [65, 55, 32, 30, 78, 18, 32, 42].reverse(),
//               data: this.chartData.dataSet3,
//               backgroundColor: 'green',
//               borderColor: 'rgba(0,0,255,0.4)',
//               fill: false,
//             },
//             {
//               type: 'bar',
//               label: 'Abril',
//               //data: [65, 55, 32, 30, 78, 18, 32, 42].reverse(),
//               data: this.chartData.dataSet4,
//               backgroundColor: 'green',
//               borderColor: 'rgba(0,0,255,0.4)',
//               fill: false,
//             },
//             {
//               type: 'bar',
//               label: 'Maio',
//               //data: [65, 55, 32, 30, 78, 18, 32, 42].reverse(),
//               data: this.chartData.dataSet5,
//               backgroundColor: 'green',
//               borderColor: 'rgba(0,0,255,0.4)',
//               fill: false,
//             }
//           ]
//         }
//       });
//   }


//   changeSeries(event: MatCheckboxChange) {
//     console.log(event.source.id);
//     console.log(event.source.checked);





//   }

//   applyFilter(value) {
//     //console.log(this.chartData.dataSet1);
//     this.barChart.data.datasets[0].data = this.chartData.dataSet1;
//     this.barChart.data.datasets[1].data = this.chartData.dataSet2;

//     this.barChart.data.datasets.forEach((data, i) => {
//       if (this.lessThanOrGreaterThan === 'greaterThan') {
//         this.barChart.data.datasets[i].data = data.data.map(v => {
//           if (v >= value) return v
//           else return 0;
//         });
//         // console.log(">>>>>>>>", this.barChart.data.datasets[i].data);
//       } else {
//         this.barChart.data.datasets[i].data = data.data.map(v => {
//           if (v <= value) return v;
//           else return 0;
//         });
//         //console.log("?????????", this.barChart.data.datasets[i].data);
//       }
//     });
//     this.barChart.update();
//   }

//   applyDateFilter() {
//     this.barChart.data.labels = this.levelsArr.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
//     this.barChart.update();
//   }

// }
