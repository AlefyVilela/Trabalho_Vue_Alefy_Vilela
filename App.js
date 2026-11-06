const { createApp, ref, computed } = Vue;

const App = {
  components: {
    'product-card': ProductCard
  },
  
  setup() {
    const contadorCarrinho = ref(0);
    const busca = ref('');

    const listaProdutos = ref([
      { id: 1, nome: 'Camiseta', preco: 50.00, imagem: 'https://via.placeholder.com/100/42b983/ffffff?text=Camiseta' },
      { id: 2, nome: 'Bone', preco: 25.00, imagem: 'https://via.placeholder.com/100/35495e/ffffff?text=Bone' },
      { id: 3, nome: 'Calça', preco: 10.00, imagem: 'https://via.placeholder.com/100/41b883/ffffff?text=Calça' },
      { id: 4, nome: 'Tênis', preco: 180.00, imagem: 'https://via.placeholder.com/100/2c3e50/ffffff?text=Tenis' },
      { id: 5, nome: 'Cinto', preco: 45.00, imagem: 'https://via.placeholder.com/100/8e44ad/ffffff?text=Cinto' },
      { id: 6, nome: 'Óculos', preco: 90.00, imagem: 'https://via.placeholder.com/100/f39c12/ffffff?text=Oculos' },
      { id: 7, nome: 'Meias', preco: 15.00, imagem: 'https://via.placeholder.com/100/e74c3c/ffffff?text=Meias' },
      { id: 8, nome: 'Cueca', preco: 25.00, imagem: 'https://via.placeholder.com/100/3498db/ffffff?text=Cueca' },
      { id: 9, nome: 'Toca', preco: 250.00, imagem: 'https://via.placeholder.com/100/16a085/ffffff?text=Toca' }
    ]);

    const somarCarrinho = () => {
      contadorCarrinho.value++;
    };

    const produtosFiltrados = computed(() => {
      return listaProdutos.value.filter(produto => 
        produto.nome.toLowerCase().includes(busca.value.toLowerCase())
      );
    });

    return {
      contadorCarrinho,
      busca,
      produtosFiltrados,
      somarCarrinho
    };
  },

  template: `
    <div>
      <h1>LTC LOJA</h1>
     
      <div class="carrinho-box">
        Itens no carrinho: {{ contadorCarrinho }}
      </div>
      <div>
        <input 
          type="text" 
          v-model="busca" 
          placeholder="Pesquisar produto (ex: tênis, relógio...)" 
          class="busca-input"
        >
      </div>

      <div class="produtos-grid">
        <product-card 
          v-for="p in produtosFiltrados" 
          :key="p.id"
          :nome="p.nome"
          :preco="p.preco"
          :imagem="p.imagem"
          @adicionar="somarCarrinho"
        ></product-card>
      </div>
      <p v-if="produtosFiltrados.length === 0" class="mensagem-erro">
        Nenhum produto encontrado.
      </p>
    </div>
  `
};

createApp(App).mount('#app');