const ProductCard = {

  props: ['nome', 'preco', 'imagem'],
  template: `
    <div class="product-card">
      <img :src="imagem" alt="Produto" class="product-image">
      <h3>{{ nome }}</h3>
      <p>R$ {{ preco.toFixed(2) }}</p>
      <button @click="$emit('adicionar')" class="btn-comprar">
        Adicionar ao Carrinho
      </button>
    </div>
  `
};