#!/bin/bash

# Script para atualizar rodapés do projeto India Oasis

# Definir o rodapé melhorado
FOOTER_CONTENT='        <!-- ==== RODAPÉ ==== -->
        <footer
            class="bg-gradient-to-r from-secondary to-primary text-white mt-16 relative overflow-hidden"
        >
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
                <div class="paisley-decoration h-full w-full"></div>
            </div>

            <div
                class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
            >
                <!-- Main Footer Content -->
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8"
                >
                    <!-- Company Info -->
                    <div class="lg:col-span-2">
                        <div class="flex items-center mb-4">
                            <i
                                class="fas fa-seedling text-3xl text-accent mr-3"
                            ></i>
                            <h3 class="font-teko text-3xl text-accent">
                                India Oasis
                            </h3>
                        </div>
                        <p class="text-gray-200 mb-4 leading-relaxed">
                            Trazendo os autênticos sabores e aromas da Índia
                            diretamente para sua mesa. Especiarias premium, chás
                            tradicionais e ingredientes selecionados com amor e
                            tradição milenar.
                        </p>
                        <div class="flex items-center text-sm text-gray-300">
                            <i class="fas fa-shield-alt text-accent mr-2"></i>
                            <span>Produtos 100% naturais e certificados</span>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4
                            class="font-rajdhani text-xl font-semibold mb-4 text-accent"
                        >
                            <i class="fas fa-compass mr-2"></i>
                            Navegação
                        </h4>
                        <ul class="space-y-2">
                            <li>
                                <a
                                    href="index.html"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-home w-4 mr-2"></i>
                                    Início
                                </a>
                            </li>
                            <li>
                                <a
                                    href="products.html"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-box w-4 mr-2"></i>
                                    Produtos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="about.html"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-heart w-4 mr-2"></i>
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a
                                    href="contact.html"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-envelope w-4 mr-2"></i>
                                    Contato
                                </a>
                            </li>
                            <li>
                                <a
                                    href="cart.html"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i
                                        class="fas fa-shopping-cart w-4 mr-2"
                                    ></i>
                                    Carrinho
                                </a>
                            </li>
                            <li>
                                <a
                                    href="wishlist.html"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-star w-4 mr-2"></i>
                                    Lista de Desejos
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Categories -->
                    <div>
                        <h4
                            class="font-rajdhani text-xl font-semibold mb-4 text-accent"
                        >
                            <i class="fas fa-tags mr-2"></i>
                            Categorias
                        </h4>
                        <ul class="space-y-2">
                            <li>
                                <a
                                    href="products.html?category=temperos"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-pepper-hot w-4 mr-2"></i>
                                    Temperos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="products.html?category=chas"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-mug-hot w-4 mr-2"></i>
                                    Chás
                                </a>
                            </li>
                            <li>
                                <a
                                    href="products.html?category=graos"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-seedling w-4 mr-2"></i>
                                    Grãos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="products.html?category=oleos"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-tint w-4 mr-2"></i>
                                    Óleos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="products.html?category=combos"
                                    class="text-gray-200 hover:text-accent transition-colors text-sm flex items-center"
                                >
                                    <i class="fas fa-gift w-4 mr-2"></i>
                                    Combos
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4
                            class="font-rajdhani text-xl font-semibold mb-4 text-accent"
                        >
                            <i class="fas fa-headset mr-2"></i>
                            Fale Conosco
                        </h4>
                        <div class="space-y-3">
                            <!-- WhatsApp -->
                            <a
                                href="https://wa.me/5511987654321"
                                target="_blank"
                                class="flex items-center text-gray-200 hover:text-accent transition-colors text-sm group"
                            >
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg"
                                >
                                    <i
                                        class="fab fa-whatsapp text-white text-lg"
                                    ></i>
                                </div>
                                <div>
                                    <p class="font-semibold">(11) 98765-4321</p>
                                    <p class="text-xs text-gray-300">
                                        WhatsApp • 24h
                                    </p>
                                </div>
                            </a>

                            <!-- Phone -->
                            <a
                                href="tel:+55114003-2024"
                                class="flex items-center text-gray-200 hover:text-accent transition-colors text-sm group"
                            >
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg"
                                >
                                    <i class="fas fa-phone text-white"></i>
                                </div>
                                <div>
                                    <p class="font-semibold">4003-2024</p>
                                    <p class="text-xs text-gray-300">
                                        SAC • Seg à Sex, 8h às 20h
                                    </p>
                                </div>
                            </a>

                            <!-- Email Principal -->
                            <a
                                href="mailto:contato@indiaoasis.com.br"
                                class="flex items-center text-gray-200 hover:text-accent transition-colors text-sm group"
                            >
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg"
                                >
                                    <i class="fas fa-envelope text-white"></i>
                                </div>
                                <div>
                                    <p class="font-semibold">
                                        contato@indiaoasis.com.br
                                    </p>
                                    <p class="text-xs text-gray-300">
                                        Geral • Resposta em até 2h
                                    </p>
                                </div>
                            </a>

                            <!-- Email Vendas -->
                            <a
                                href="mailto:vendas@indiaoasis.com.br"
                                class="flex items-center text-gray-200 hover:text-accent transition-colors text-sm group"
                            >
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg"
                                >
                                    <i
                                        class="fas fa-shopping-bag text-white"
                                    ></i>
                                </div>
                                <div>
                                    <p class="font-semibold">
                                        vendas@indiaoasis.com.br
                                    </p>
                                    <p class="text-xs text-gray-300">
                                        Vendas • Pedidos especiais
                                    </p>
                                </div>
                            </a>

                            <!-- Telefone Vendas -->
                            <a
                                href="tel:+55113456-7890"
                                class="flex items-center text-gray-200 hover:text-accent transition-colors text-sm group"
                            >
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg"
                                >
                                    <i
                                        class="fas fa-phone-volume text-white"
                                    ></i>
                                </div>
                                <div>
                                    <p class="font-semibold">(11) 3456-7890</p>
                                    <p class="text-xs text-gray-300">
                                        Vendas • Seg à Sex, 9h às 18h
                                    </p>
                                </div>
                            </a>

                            <!-- Address -->
                            <div
                                class="flex items-center text-gray-200 text-sm pt-2 border-t border-white border-opacity-20"
                            >
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center mr-3 shadow-lg"
                                >
                                    <i
                                        class="fas fa-map-marker-alt text-white"
                                    ></i>
                                </div>
                                <div>
                                    <p class="font-semibold">
                                        Rua das Especiarias, 123
                                    </p>
                                    <p class="text-xs text-gray-300">
                                        Vila Madalena, São Paulo - SP
                                    </p>
                                    <p class="text-xs text-gray-300">
                                        CEP: 05433-000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Newsletter -->
                <div class="border-t border-white border-opacity-20 pt-8 mb-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h4
                            class="font-rajdhani text-2xl font-semibold mb-3 text-accent"
                        >
                            <i class="fas fa-bell mr-2"></i>
                            Receba Ofertas Especiais
                        </h4>
                        <p class="text-gray-200 mb-4">
                            Cadastre-se e seja o primeiro a saber sobre novos
                            produtos, receitas exclusivas e promoções
                            imperdíveis!
                        </p>
                        <div
                            class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                        >
                            <input
                                type="email"
                                placeholder="Seu melhor email"
                                class="flex-1 px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <button
                                class="btn bg-accent text-black hover:bg-yellow-400 px-6 py-2 rounded-lg font-medium transition-colors"
                            >
                                <i class="fas fa-paper-plane mr-2"></i>
                                Cadastrar
                            </button>
                        </div>
                        <p class="text-xs text-gray-300 mt-2">
                            <i class="fas fa-lock mr-1"></i>
                            Seus dados estão seguros conosco
                        </p>
                    </div>
                </div>

                <!-- Social Media & Payment -->
                <div class="border-t border-white border-opacity-20 pt-8 mb-8">
                    <div
                        class="flex flex-col lg:flex-row justify-between items-center gap-6"
                    >
                        <!-- Social Media -->
                        <div class="text-center lg:text-left">
                            <h5
                                class="font-rajdhani text-lg font-semibold mb-3 text-accent"
                            >
                                <i class="fas fa-share-alt mr-2"></i>
                                Siga-nos nas Redes
                            </h5>
                            <div
                                class="flex justify-center lg:justify-start space-x-4"
                            >
                                <a
                                    href="https://instagram.com/indiaoasis"
                                    target="_blank"
                                    class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <i class="fab fa-instagram text-white"></i>
                                </a>
                                <a
                                    href="https://facebook.com/indiaoasis"
                                    target="_blank"
                                    class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <i class="fab fa-facebook-f text-white"></i>
                                </a>
                                <a
                                    href="https://youtube.com/indiaoasis"
                                    target="_blank"
                                    class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <i class="fab fa-youtube text-white"></i>
                                </a>
                                <a
                                    href="https://tiktok.com/@indiaoasis"
                                    target="_blank"
                                    class="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <i class="fab fa-tiktok text-white"></i>
                                </a>
                                <a
                                    href="https://pinterest.com/indiaoasis"
                                    target="_blank"
                                    class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <i class="fab fa-pinterest text-white"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Payment Methods -->
                        <div class="text-center lg:text-right">
                            <h5
                                class="font-rajdhani text-lg font-semibold mb-3 text-accent"
                            >
                                <i class="fas fa-credit-card mr-2"></i>
                                Formas de Pagamento
                            </h5>
                            <div
                                class="flex justify-center lg:justify-end items-center space-x-3 flex-wrap gap-2"
                            >
                                <div class="bg-white rounded px-2 py-1">
                                    <i
                                        class="fab fa-cc-visa text-blue-600 text-xl"
                                    ></i>
                                </div>
                                <div class="bg-white rounded px-2 py-1">
                                    <i
                                        class="fab fa-cc-mastercard text-red-500 text-xl"
                                    ></i>
                                </div>
                                <div class="bg-white rounded px-2 py-1">
                                    <i
                                        class="fab fa-cc-amex text-blue-500 text-xl"
                                    ></i>
                                </div>
                                <div class="bg-green-500 rounded px-2 py-1">
                                    <span class="text-white font-bold text-xs"
                                        >PIX</span
                                    >
                                </div>
                                <div class="bg-orange-500 rounded px-2 py-1">
                                    <i class="fas fa-barcode text-white"></i>
                                </div>
                            </div>
                            <p class="text-xs text-gray-300 mt-2">
                                <i class="fas fa-shield-alt mr-1"></i>
                                Pagamentos 100% seguros
                            </p>
                        </div>

                        <!-- Certifications -->
                        <div class="text-center">
                            <h5
                                class="font-rajdhani text-lg font-semibold mb-3 text-accent"
                            >
                                <i class="fas fa-certificate mr-2"></i>
                                Certificações
                            </h5>
                            <div class="flex justify-center space-x-3">
                                <div
                                    class="bg-white rounded-full w-12 h-12 flex items-center justify-center"
                                >
                                    <i class="fas fa-leaf text-green-600"></i>
                                </div>
                                <div
                                    class="bg-white rounded-full w-12 h-12 flex items-center justify-center"
                                >
                                    <i class="fas fa-award text-yellow-600"></i>
                                </div>
                                <div
                                    class="bg-white rounded-full w-12 h-12 flex items-center justify-center"
                                >
                                    <i
                                        class="fas fa-shield-alt text-blue-600"
                                    ></i>
                                </div>
                            </div>
                            <p class="text-xs text-gray-300 mt-2">
                                Qualidade Certificada
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Bottom Footer -->
                <div class="border-t border-white border-opacity-20 pt-6">
                    <div
                        class="flex flex-col lg:flex-row justify-between items-center gap-4"
                    >
                        <div class="text-center lg:text-left">
                            <p class="text-sm text-gray-300">
                                &copy; 2024
                                <strong class="text-accent">India Oasis</strong>
                                - Todos os direitos reservados.
                            </p>
                            <p class="text-xs text-gray-400 mt-1">
                                CNPJ: 12.345.678/0001-90 | Razão Social: India
                                Oasis Comercio de Especiarias Ltda.
                            </p>
                        </div>

                        <div
                            class="flex flex-wrap justify-center gap-4 text-xs"
                        >
                            <a
                                href="#"
                                class="text-gray-300 hover:text-accent transition-colors"
                                >Política de Privacidade</a
                            >
                            <span class="text-gray-500">|</span>
                            <a
                                href="#"
                                class="text-gray-300 hover:text-accent transition-colors"
                                >Termos de Uso</a
                            >
                            <span class="text-gray-500">|</span>
                            <a
                                href="#"
                                class="text-gray-300 hover:text-accent transition-colors"
                                >Política de Entrega</a
                            >
                            <span class="text-gray-500">|</span>
                            <a
                                href="#"
                                class="text-gray-300 hover:text-accent transition-colors"
                                >Trocas e Devoluções</a
                            >
                        </div>
                    </div>
                </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                <i
                    class="fas fa-seedling text-8xl text-accent transform rotate-12"
                ></i>
            </div>
            <div class="absolute top-0 right-0 w-24 h-24 opacity-10">
                <i
                    class="fas fa-leaf text-6xl text-accent transform -rotate-45"
                ></i>
            </div>
        </footer>'

echo "📦 Atualizando rodapés do projeto India Oasis..."
echo "=========================================="

# Lista de arquivos a serem atualizados (excluindo os já atualizados)
FILES_TO_UPDATE=(
    "cart.html"
    "product-detail.html"
    "wishlist.html"
)

# Fazer backup dos arquivos
echo "🔄 Criando backup dos arquivos..."
for file in "${FILES_TO_UPDATE[@]}"; do
    if [ -f "$file" ]; then
        cp "$file" "$file.backup"
        echo "   ✅ Backup criado: $file.backup"
    fi
done

echo ""
echo "🎨 Aplicando rodapé melhorado..."

# Função para substituir rodapé
replace_footer() {
    local file="$1"

    if [ ! -f "$file" ]; then
        echo "   ❌ Arquivo não encontrado: $file"
        return 1
    fi

    # Encontrar início do rodapé
    local start_line=$(grep -n "<!-- ==== RODAPÉ ====" "$file" | cut -d: -f1)

    if [ -z "$start_line" ]; then
        echo "   ❌ Rodapé não encontrado em: $file"
        return 1
    fi

    # Encontrar final do rodapé (próxima linha com modal ou fim do arquivo)
    local end_line=$(tail -n +$start_line "$file" | grep -n "<!-- ==== MODAL" | head -1 | cut -d: -f1)

    if [ -z "$end_line" ]; then
        # Se não encontrar modal, pega até o final da tag footer
        end_line=$(tail -n +$start_line "$file" | grep -n "</footer>" | head -1 | cut -d: -f1)
        if [ -n "$end_line" ]; then
            end_line=$((start_line + end_line))
        else
            echo "   ❌ Fim do rodapé não encontrado em: $file"
            return 1
        fi
    else
        end_line=$((start_line + end_line - 2))
    fi

    # Criar arquivo temporário
    local temp_file="$file.tmp"

    # Copiar conteúdo antes do rodapé
    head -n $((start_line - 1)) "$file" > "$temp_file"

    # Adicionar novo rodapé
    echo "$FOOTER_CONTENT" >> "$temp_file"

    # Adicionar conteúdo após o rodapé
    tail -n +$((end_line + 1)) "$file" >> "$temp_file"

    # Substituir arquivo original
    mv "$temp_file" "$file"

    echo "   ✅ Rodapé atualizado: $file"
}

# Atualizar cada arquivo
for file in "${FILES_TO_UPDATE[@]}"; do
    replace_footer "$file"
done

echo ""
echo "🎉 Processo concluído!"
echo "=========================================="
echo "📋 Resumo das atualizações:"
echo ""
echo "✨ Melhorias implementadas:"
echo "   • Seção de contato expandida com:"
echo "     - WhatsApp: (11) 98765-4321"
echo "     - SAC: 4003-2024"
echo "     - Email geral: contato@indiaoasis.com.br"
echo "     - Email vendas: vendas@indiaoasis.com.br"
echo "     - Telefone vendas: (11) 3456-7890"
echo "     - Endereço completo"
echo "   • Newsletter para ofertas especiais"
echo "   • Redes sociais com links diretos"
echo "   • Formas de pagamento (cartões, PIX, boleto)"
echo "   • Certificações de qualidade"
echo "   • Links para políticas e termos"
echo "   • Design responsivo com gradientes"
echo "   • Elementos decorativos"
echo ""
echo "🔧 Para reverter as alterações, use os arquivos .backup"
echo "💡 Teste o site para verificar se tudo está funcionando corretamente"
