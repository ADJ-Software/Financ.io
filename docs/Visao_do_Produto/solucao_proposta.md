---
sidebar_position: 2
---

# Solução Proposta

## 2.1 Objetivos do Produto

O objetivo do Financ.io é criar uma plataforma unificada de gerenciamento de finanças. Espera-se entregar uma solução que não apenas evidencie para onde o dinheiro do usuário está indo, através de processamento inteligente de dados, mas também atue ativamente na economia de recursos, auxiliando na decisão de compra com comparativos de preços e índices de confiabilidade de lojas.

## 2.2 Características da Solução

As principais características (features) planejadas para a solução são:

- **Log de Despesas Multimodal:** Registro de gastos via reconhecimento de caracteres (OCR) de extratos, notas e boletos, além de entrada manual.
- **Categorização e Análise:** Processamento de dados para evidenciar padrões de gasto, divisão por áreas (ex: alimentação, transporte) e controle de tempo dos gastos.
- **Relatórios e Gamificação:** Geração de relatórios de perfil de consumo e uso de elementos de jogos (conquistas, metas) para incentivar o uso contínuo.
- **Ajudante de Compras (Price Scanner):** Funcionalidade para escanear a internet em busca de produtos iguais ou similares com preços menores.
- **Indicadores de Confiança:** Exibição de métricas de confiabilidade dos sites de vendas sugeridos.

## 2.3 Tecnologias a Serem Utilizadas

- **Frontend:** Será utilizado o framework Angular em conjunto com TypeScript, para garantir acesso em múltiplas plataformas.
- **Backend:** Será utilizado como base principal o framework Quarkus que tem como base principal o Java.
- **Banco de Dados:** O PostgresSQL será utilizado como fonte principal de informações em conjunto com o Docker para melhor gerenciamento.
- **IA/OCR:** _(A ser definido)_.

## 2.4 Pesquisa de Mercado e Análise Competitiva

O mercado possui concorrentes consolidados em nichos separados:

- **Gestão Financeira:** Apps como Mobills e Organizze focam no controle, mas dependem muito de input manual ou integração bancária direta (Open Finance), sem foco em "ajuda na compra".
- **Comparadores de Preço:** Sites como Buscapé e Zoom focam no produto, mas não consideram o orçamento atual do usuário.
- **Diferencial do Financ.io:** A integração das duas pontas. O sistema sabe quanto você pode gastar (pelo controle de despesas) e ajuda você a gastar melhor (pelo ajudante de compras), tudo em um único ambiente.

## 2.5 Análise de Viabilidade

A viabilidade técnica é moderada a alta, a equipe não tem experiência com OCR, exigindo esforço concentrado nos algoritmos de captura de dados (Web Scraping). Financeiramente, o projeto é viável devido ao potencial de monetização via modelos _freemium_ ou comissões de afiliados (CPA) geradas pelo direcionamento de compras no módulo "Ajudante de Compras". O prazo de desenvolvimento deve considerar uma fase inicial de MVP focada no registro de despesas antes da implementação completa do motor de busca de preços.

## 2.6 Impacto da Solução

Espera-se que o Financ.io impacte positivamente a saúde financeira dos usuários, permitindo uma visão clara de seus orçamentos e promovendo uma redução real de despesas tanto pelo corte de gastos supérfluos (identificados nos relatórios) quanto pela compra mais inteligente de produtos necessários (via comparador). Para o negócio, o impacto será a criação de uma base de dados rica sobre comportamento de consumo, permitindo personalização extrema e fidelização.
