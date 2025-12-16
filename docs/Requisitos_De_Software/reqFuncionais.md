---
sidebar_position: 1
---

# Requisitos Funcionais (RF)

## Definição das Escalas de Classificação (1 a 5)

Para classificar os requisitos, as seguintes escalas de 1 a 5 foram utilizadas:

**1. Valor de Negócio (VN)**  
Mede o impacto do requisito para o sucesso do projeto e do negócio.

- **5 (Crítico):** Requisito essencial para o Produto Mínimo Viável (MVP). Sua ausência inviabiliza o projeto ou causa falha crítica no funcionamento básico da solução.

- **4 (Alto):** Resolve um problema primário da solução proposta, é altamente recomendado que não hajam atrasos ou impedimentos, considerado como prioritário para a satisfação do cliente.

- **3 (Médio):** Agrega valor significativo as funcionalidades principais do projeto, atrasos no ciclo de vida desenvolvimento devem ser evitados.

- **2 (Baixo):** Sua entrega é recomendada, mas pode ser postergada para o final do sprint ou para uma iteração futura.

- **1 (Desejável):** Requisito de "Nice to have" (aprimoramento estético, pequeno ajuste). Representa escopo para a próxima versão do produto.

**2. Custo Técnico (CT)**  
Estima o esforço da equipe, a complexidade técnica (envolvendo React, Node.js, PostgreSQL) e o risco inerente, dado o cronograma de 3 meses.

- **5 (Muito Alto):** Exige estudo ou envolve a integração complexa de ferramentas que a equipe possui pouca familiaridade. Alto risco de falha ou atraso do sprint.

- **4 (Alto):** Requer múltiplas camadas de desenvolvimento (Front-End/React, Back-End/Node.js e Banco de Dados/PostgreSQL). Deve ser testado e verificado rigorosamente para a aprovação.

- **3 (Médio):** Trabalho padrão que consome no mínimo 4 dias da sprint. Poderá envolver testes rigorosos (TDD/XP) e lógica de negócios moderada.

- **2 (Baixo):** Implementação utilizando componentes e padrões já definidos. Permite uso de programação em pares (XP) para ser concluído rapidamente.

- **1 (Muito Baixo):** Correção de bugs mínimos, ajuste de texto ou pequenas alterações de UI/UX que não afetam a lógica de negócios. Ideal para ser encaixado em um sprint com alto esforço.

---

| **RF-01 — Gerenciamento de Identidade e Acesso** | VN | CT |
| --- | --- | --- |
| **RF-01.1:** Permitir que novos usuários se cadastrem utilizando e-mail e senha, garantindo unicidade do e-mail no banco de dados. | 0 | 0 |
| **RF-01.2:** Disponibilizar tela de login que retorne um Token de Autenticação (JWT) para acesso seguro aos dados. | 0 | 0 |

---

| **RF-02 — Gestão de Transações (Operações Básicas)** | VN | CT |
| --- | --- | --- |
| **RF-02.1:** Permitir o registro manual de receitas e despesas informando valor, data, categoria, tipo e conta de origem. | 0 | 0 |
| **RF-02.2:** Permitir a edição de valor, data ou categoria de transações já lançadas, com recálculo imediato do saldo. | 0 | 0 |
| **RF-02.3:** Permitir a exclusão de transações, estornando o valor correspondente do saldo total. | 0 | 0 |
| **RF-02.4:** Permitir o cadastro de transações recorrentes (fixas/assinaturas) com periodicidade automática (mensal, semanal, anual). | 0 | 0 |

---

| **RF-03 — Importação Automática e Processamento (OCR)** | VN | CT |
| --- | --- | --- |
| **RF-03.1:** Permitir o upload de imagens (notas fiscais), PDFs (boletos) e arquivos OFX bancários. | 0 | 0 |
| **RF-03.2:** Processar arquivos via OCR/Regex para extrair data e valor, apresentando os dados para revisão obrigatória do usuário antes da efetivação. | 0 | 0 |

---

| **RF-04 — Organização e Planejamento Financeiro** | VN | CT |
| --- | --- | --- |
| **RF-04.1:** Permitir a criação, edição (nome e cor) e exclusão de categorias personalizadas. | 0 | 0 |
| **RF-04.2:** Permitir a definição de tetos de gastos (orçamento/budget) mensais por categoria, com visualização de progresso. | 0 | 0 |

---

| **RF-05 — Visualização, Relatórios e Dashboard** | VN | CT |
| --- | --- | --- |
| **RF-05.1:** Exibir Dashboard principal com Saldo Atual consolidado e resumo de Receitas vs. Despesas do mês corrente. | 0 | 0 |
| **RF-05.2:** Listar extrato completo de transações com filtros dinâmicos por intervalo de datas, categoria e tipo de movimentação. | 0 | 0 |
| **RF-05.3:** Gerar relatório gráfico (tipo Pizza/Donut) demonstrando a distribuição percentual dos gastos por categoria. | 0 | 0 |

---

| **RF-06 — Gestão de Cartão de Crédito** | VN | CT |
| --- | --- | --- |
| **RF-06.1:** Permitir o registro de despesas no cartão de crédito, diferenciando o impacto no saldo imediato vs. saldo projetado (vencimento da fatura). | 0 | 0 |

---
