import { Component } from '@angular/core'

@Component({
  selector: 'mixed-chart',
  template: require('./mixed-chart.component.html')
})
export class MixedChartComponent {

  chartType: string = 'bar'

  labels: Array<any> = ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'X10']

  datasets: Array<any> = [
    {
      type: 'bar',
      label: 'Decrease',
      data: [-10, -20, -30, -50, -50, -20, -40, -10, -20, -30]
    },
    {
      type: 'line',
      label: 'Difference (%)',
      data: [-30, -20, -10, -100, -30, -60, -70, -100, -50, -10]
    }
  ]

  options: any = {
    elements: {
      line: {
        tension: 0.2,
        fill: true
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}
