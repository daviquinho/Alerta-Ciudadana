import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs/Observable';

import { Incident } from './../incident/incident';
import { IncidentService } from './../incident/incident.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number = -17.774040;
  longitude: number = -63.180234;
  zoom: number = 8;
  minZoom: number = 8;
  incidents: Observable<any[]>;
  constructor(private incidentService: IncidentService) {}

  ngOnInit() {
    this.incidents = this.incidentService.getIncidents();
    console.log(this.incidents);
  }

  clickedMarker(incident: Incident) {
    console.log(`clicked the marker: ${incident.title}`);
  }

}