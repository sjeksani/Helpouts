import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  getData() {
    return [{ name: 'Test 1' }, { name: 'Test 2' }];
  }
}