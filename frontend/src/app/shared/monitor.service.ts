import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  constructor(private webRequestService:WebRequestService) { }
//get requests
  getMonitorTypes() {
    return this.webRequestService.get('api/monitor-types');
  }
  getMonitor() {
    return this.webRequestService.get('api/monitor');
  }
  getLegend() {
    return this.webRequestService.get('api/legend');
  }


  
}
