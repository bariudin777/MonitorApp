import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { element } from 'protractor';
import { MonitorService } from '../shared/monitor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any
  list_of_btn: Array<any> = [];
  monitorInfoByType: Array<any> = [];
  legendInfo: Array<any> = [];
  field: string
  showModal: boolean = false;
  legendId: string;

  @Input()
  selected: string = ''; 
  
  @Output()
  onClose = new EventEmitter();

  constructor(private monitorService: MonitorService) {}

  ngOnInit(): void {
    this.createMonitorTypesButtons();

  }
  /**
   * creates the first monitor type buttons
   * uses get request from monitorService
   * initializing list of monitor types for the button display
   */
  createMonitorTypesButtons() {
    this.monitorService.getMonitorTypes().subscribe((res: any) => {
      if (res) {
        res.forEach(element => {
          this.list_of_btn.push(element);
        });
      }
      else {
        console.log('There was a problem with res in create monitor buttons')
      }
      });
    
  }

  onClick(index: string) {
    this.field = index['Id']
    this.monitorInfoByType = [];
    this.displayMonitor(this.field);
    
  }
  /**
   * creates the monitor properties list
   * uses get request from monitor info
   * initializing list of monitor list with the chosen monitor type
   */
  displayMonitor(id:string) {
    this.monitorService.getMonitor().subscribe((res: any) => {
      if (res) {
        res.forEach(element => {
          if (element.MonitorTypeId == id) {
            this.monitorInfoByType.push(element);
          }
        });
        
      }
      else {
        console.log('There was a problem with res in create monitor buttons')
      }
    });
  }

  displayLegend(item: string) {
    this.field = '';
    this.field = item['MonitorTypeId'];//get monitor type id
    this.legendId = this.list_of_btn[this.field]['LegentId'];//you have here a typo
    this.showGetAndShowLegend();
    this.legendInfo = [];
    
  }
  /**
   * gets the legends properties for display
   * uses get request from monitorService
   * initializing list of legend tags for our display
   */
  showGetAndShowLegend() {
    this.monitorService.getLegend().subscribe((res: any) => {
      if (res) {
        res.forEach(element => {
          if (element.Id == this.legendId) {
            this.legendInfo.push(element.tags);
          }
        });

        this.legendInfo.forEach(element => {
        })
      }
      
      else {
        console.log('There was a problem with res in create monitor buttons')
      }
    });

  }


  selectItem() {
    this.showModal = true;
 }

  cancel() {
    this.onClose.emit(null);
    this.showModal= false;''
  }

  getLabel(legend: string) {
    return(legend['Label'])
  }

    
}
