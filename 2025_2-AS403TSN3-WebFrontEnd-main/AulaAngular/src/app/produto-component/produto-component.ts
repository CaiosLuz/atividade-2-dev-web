import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-component',
  standalone: false,
  templateUrl: './produto-component.html',
  styleUrls: ['./produto-component.css']
})
export class ProdutoComponent {
  produtos = [
    { id: 1, nome: "Notebook Acer Nitro 5", preco: 3000, descricao: "Notebook Acer Nitro 5 I5 14°gen 16ram", emEstoque: true },
    { id: 2, nome: "Fone de ouvido JBL", preco: 150, descricao: "Fone de ouvido Bluetooth", emEstoque: true },
    { id: 3, nome: "Iphone 17 PRO MAX", preco: 1099, descricao: "Iphone 17 PRO MAX 256GB", emEstoque: false }
  ];

  constructor(private router: Router){}

  comprarProduto(id: number) {
    this.router.navigate(['/produto', id]);
  }
}
