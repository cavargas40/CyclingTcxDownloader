import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MapMyRydeService {

  public urlToTXC: string = 'http://www.mapmyride.com/workout/export/$(workout_id)/tcx';

  constructor(private http: Http) { }

  getWorkOut(numberWorkout: number) {
    // return this.http
    //   .get(this.urlToTXC.replace('$(workout_id)', String(numberWorkout)));
    return this.urlToTXC.replace('$(workout_id)', String(numberWorkout));
  }

}
