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
    { id: 1, nome: "Mouse Logitech", preco: 89, descricao: "Mouse Logitech sem fio", emEstoque: true },
    { id: 2, nome: "Teclado Logitech", preco: 150, descricao: "Teclado Logitech sem fio", emEstoque: false },
    { id: 3, nome: "Mouse Pad", preco: 39, descricao: "Mouse Pad em coro", emEstoque: true }
  ];

  constructor(private router: Router){}

  comprarProduto(id: number) {
    this.router.navigate(['/produto', id]);
  }
}
