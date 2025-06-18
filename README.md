# India Oasis - Temperos e Sabores da Índia

Um e-commerce moderno e responsivo especializado em temperos e especiarias indianas, desenvolvido com HTML, CSS e JavaScript vanilla.

## 🌟 Funcionalidades

- **Catálogo de Produtos**: Navegação por diferentes categorias de temperos
- **Carrinho de Compras**: Adicione, remova e gerencie produtos
- **Lista de Desejos**: Salve seus produtos favoritos
- **Sistema de Avaliações**: Veja e adicione avaliações dos produtos
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Interface Intuitiva**: Navegação fácil com menu lateral retrátil

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos customizados + Tailwind CSS
- **JavaScript**: Funcionalidades interativas (Vanilla JS)
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Teko, Lato)

## 🚀 Como Executar Localmente

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd india_oasis_temp
```

2. Abra o arquivo `index.html` em um servidor local:
   - **Opção 1 - Python**: `python3 -m http.server 8000`
   - **Opção 2 - Node.js**: `npx serve .`
   - **Opção 3 - Live Server**: Use a extensão Live Server no VS Code

3. Acesse `http://localhost:8000` no navegador

## 📦 Deploy no Render

Este projeto está configurado para deploy automático no Render como site estático:

### Passos para Deploy:

1. **Conecte seu repositório**:
   - Acesse [render.com](https://render.com)
   - Crie uma conta ou faça login
   - Clique em "New +" → "Static Site"
   - Conecte seu repositório GitHub

2. **Configurações de Deploy**:
   - **Build Command**: `echo "No build step required"`
   - **Publish Directory**: `.` (root)
   - **Auto-Deploy**: Sim

3. **Arquivos de Configuração Incluídos**:
   - `render.yaml`: Configuração específica do Render
   - `package.json`: Metadados do projeto
   - `_redirects`: Redirecionamentos para SPA

### URL de Acesso:
Após o deploy, seu site estará disponível em: `https://[nome-do-projeto].onrender.com`

## 📁 Estrutura do Projeto

```
india_oasis_temp/
├── index.html          # Página principal
├── styles.css          # Estilos customizados
├── script.js           # Lógica da aplicação
├── package.json        # Configuração do projeto
├── render.yaml         # Configuração do Render
├── _redirects          # Redirecionamentos
└── README.md           # Documentação
```

## 🎯 Funcionalidades Detalhadas

### Navegação
- Menu lateral retrátil com categorias
- Barra de busca integrada
- Navegação por abas (Início, Produtos, Avaliações)

### Carrinho de Compras
- Adicionar/remover produtos
- Atualizar quantidades
- Cálculo automático do total
- Contador visual no ícone

### Lista de Desejos
- Salvar produtos favoritos
- Toggle de adicionar/remover
- Contador visual

### Sistema de Avaliações
- Exibição de avaliações em estrelas
- Comentários de clientes
- Formulário para novas avaliações

## 🎨 Paleta de Cores

- **Primária**: #D84315 (Laranja Açafrão)
- **Secundária**: #00695C (Verde Especiarias)
- **Accent**: #FFC107 (Dourado)
- **Background**: #FFF8E1 (Creme Suave)

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Personalização

Para personalizar o projeto:
1. Modifique as cores no arquivo `styles.css`
2. Adicione novos produtos no array `products` em `script.js`
3. Ajuste o layout modificando as classes Tailwind no `index.html`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do GitHub Issues.