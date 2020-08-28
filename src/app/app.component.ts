import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ValueTransformer } from '@angular/compiler/src/util';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = `https://nagios.nutricash.com.br/Colaboradores1.json`;
  items = [];
  dados = [];
  listas = [];
  totalAngularPackages;
  

  constructor(private http: HttpClient) { }

    ngOnInit() {      
        // Simple GET request with response type <any>
        const headers = { 'Authorization': 'Basic bmFnaW9zYWRtaW46c2VuaGE=', 'content-type': 'application/json' }
        this.http.get('http://nagios.nutricash.com.br/nagios/cgi-bin/statusjson.cgi?query=servicelist', { headers }).subscribe(data => {
         // this.totalAngularPackages = data;
          this.totalAngularPackages = data.data.servicelist;
         // console.log(data.data.servicelist);
         // console.log(data);
         console.log(data.data.servicelist);
         console.log("Resultado: " + data.result.query);
         this.dados.push(data.result.query);
         console.log(this.dados);
        

         
         // Bloco novo
        
         //FIM BLOCO NOVO
         for (let key in data.data.servicelist)
          if (data.data.servicelist.hasOwnProperty(key))
            this.items.push(data.data.servicelist);
        // Jeito Correto
         for (var chaveiro in data.data.servicelist)
          console.log( data.data.servicelist[chaveiro])
          console.log("chaveiro: ")
        
        // for(var chaveiro in data.data.servicelist)
         // console.log(chaveiro)
         const array1 = ['a', 'b', 'c'];
         console.log(array1)
         array1.forEach(element => console.log(element))
         const array2 = this.dados[0]
         console.log(array2)
         
         

        })
    }                                                                                                                                                                                                                                 
}               
