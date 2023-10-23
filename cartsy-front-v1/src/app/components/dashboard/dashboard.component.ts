import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../aplication/api/product';
import { ProductService } from '../../aplication/service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Pedidos } from './models/pedido.model';
import { PedidosService } from './models/pedidos.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {


    products!: Product[];

    pedidos!: Pedidos[];

    chartData: any;

    constructor(private productService: ProductService, public layoutService: LayoutService, public pedidoService: PedidosService) {
       this.chamarPedidos();
    }

    ngOnInit() {

    }

    chamarPedidos(){
        this.pedidos = this.pedidoService.pedir()
    }

}
