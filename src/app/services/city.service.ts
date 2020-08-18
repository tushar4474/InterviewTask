import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {




// apiUrl= 'https://api.postalpincode.in/postoffice/New Delhi';

 constructor(private http:HttpClient) { }

 students:any[] = [
  {id:1,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'},
  {id:2,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'},
  {id:3,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'},
  {id:4,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'},
  {id:5,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'},
  {id:6,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'},
  {id:7,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'},
  {id:8,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'},
  {id:9,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'},
  {id:10,city:'Delhi',Address:'Delhi',description:'bbdbdbvdjbvdhvkdvbdkjv',branch:'delhi dwarka'}

 ];


}

