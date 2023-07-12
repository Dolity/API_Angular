import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  code:any;
  product:any;
  pName:any;
  pLine:any;
  pDescription:any;
  pStock:any;
  pPrice:any;

  constructor(private router : ActivatedRoute, private http: HttpClient) {

    this.code = router.snapshot.params['code'];
    console.log(this.code);
    this.http.get('http://202.28.34.250/webdev/product/'+ this.code)
      .subscribe((data:any) =>{

        this.product = data;
        this.pName = data.productName;
        this.pLine = data.productLine;
        this.pDescription = data.productDescription;
        this.pStock = data.quantityInStock;
        this.pPrice = data.buyPrice;

        console.log(data);
      }, error => {

      });
  }

  ngOnInit() {
  }

  saveData(){
    let json = {
      productCode: this.code,
      productName: this.pName,
      productDescription: this.pDescription,
      quantityInStock: this.pStock,
      buyPrice: this.pPrice


    }
    console.log(JSON.stringify(json));
    this.http.post('http://202.28.34.250/webdev/product/'+ this.code, JSON.stringify(json))
      .subscribe(data => {
        console.log(data);
      }, error =>{
        console.log(error);
      });
  }


}
