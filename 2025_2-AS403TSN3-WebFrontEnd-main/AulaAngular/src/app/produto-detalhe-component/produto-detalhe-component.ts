import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe-component',
  standalone: false,
  templateUrl: './produto-detalhe-component.html',
  styleUrls: ['./produto-detalhe-component.css']
})
export class ProdutoDetalheComponent {
  produtoId!: number;
  produto: any;

  produtos = [
    { id: 1, nome: "Notebook Acer Nitro 5", preco: 3000, descricao: "Notebook Acer Nitro 5 I5 14°gen 16ram", emEstoque: true },
    { id: 2, nome: "Fone de ouvido JBL", preco: 150, descricao: "Fone de ouvido Bluetooth", emEstoque: true },
    { id: 3, nome: "Iphone 17 PRO MAX", preco: 1099, descricao: "Iphone 17 PRO MAX 256GB", emEstoque: false }
  ];

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    this.produtoId = Number(this.router.snapshot.paramMap.get('id'));

    this.produto = this.produtos.find(p => p.id === this.produtoId);
  }
}
