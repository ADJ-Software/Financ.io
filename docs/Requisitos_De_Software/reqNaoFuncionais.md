---
sidebar_position: 2
---

# Requisitos Não Funcionais (RNF)

Os requisitos não funcionais especificam critérios de qualidade, desempenho e segurança técnica do sistema.

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

| **RNF-01 — Segurança e Dados** | VN | CT |
| --- | --- | --- |
| **RNF-01.1:** Armazenar senhas utilizando algoritmos de hash forte (BCrypt ou Argon2) e proteger endpoints com autenticação via Token. | 0 | 0 |
| **RNF-01.2:** Garantir conformidade com a LGPD no armazenamento e tratamento de dados sensíveis dos usuários. | 0 | 0 |

---

| **RNF-02 — Desempenho e Confiabilidade** | VN | CT |
| --- | --- | --- |
| **RNF-02.1:** Garantir tempo de resposta visual inferior a 1 segundo para registros manuais e inferior a 2 segundos para carregamento do Dashboard. | 0 | 0 |
| **RNF-02.2:** Utilizar tipos de dados de alta precisão (DECIMAL/NUMERIC) no banco de dados para evitar erros de arredondamento financeiro. | 0 | 0 |
| **RNF-02.3:** O sistema de OCR deve identificar data e valor com precisão mínima de 80% em documentos legíveis. | 0 | 0 |

---

| **RNF-03 — Arquitetura e Suportabilidade** | VN | CT |
| --- | --- | --- |
| **RNF-03.1:** Processar uploads pesados e OCR de forma assíncrona (Background Workers) para não bloquear a navegação do usuário. | 0 | 0 |
| **RNF-03.2:** O sistema deve ser responsivo, suportando navegadores desktop e dispositivos móveis (Android/iOS). | 0 | 0 |