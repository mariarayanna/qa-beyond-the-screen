# 🚀 QA Beyond the Screen - Advanced Software Quality Engineering

Bem-vindo ao repositório **QA Beyond the Screen**! Este projeto foi desenvolvido por Maria Rayanna para demonstrar a esteira completa de engenharia e garantia de qualidade (QA), indo além dos testes manuais funcionais para explorar **Performance, Segurança (DAST), APIs e Estratégia de Testes**.

---

## 📁 Estrutura do Repositório

```text
qa-beyond-the-screen/
│
├── 01-manual-and-exploratory/      # Estratégia de testes manuais, casos de teste e cenários BDD
├── 02-api-testing-postman/          # Suíte de testes de API REST e validações de contrato
├── 03-database-sql/                 # Validações de integridade de dados via SQL
├── 04-automation-multitool/         # Automação E2E (Cypress, Playwright e Robot Framework)
├── 05-performance-k6/               # Testes de Carga, Estresse e SLA com k6
│   └── performance-reports/         # Relatórios e evidências do k6 (JSON e HTML Interativo)
├── 06-security-dast/                # Testes de Segurança Dinâmicos (SQL Injection e XSS)
└── 07-qa-strategies/                # Estratégia e Governança de Testes (Smoke, Sanity, UAT)
```
---

## 🛠️ Tecnologias e Ferramentas

* **Aplicação em Teste:** OWASP Juice Shop (Ambiente Dockerizado)
* **Performance:** Grafana k6 (JavaScript) & k6-reporter
* **Infraestrutura:** Docker / VS Code
* **Gestão Ágil:** Trello (Kanban)
* **Versionamento:** Git & GitHub

---

## 📌 Gestão de Testes, Rastreabilidade & Fluxo Kanban (Trello)

A governança deste projeto e o acompanhamento do ciclo de vida das falhas seguem o fluxo Kanban em uma esteira ágil de desenvolvimento. 

* 🔗 **Quadro Oficial do Projeto:** 
[Acessar Board no Trello - QA Beyond the Screen]
(https://trello.com/invite/b/6ab3f2311c4c9dc1ada4b55f/ATTI37026504c7fb24f0f6706eac439eef13FF1579DA/mray-qa-beyond-the-screen)

### 📊 Fluxo da Esteira e Rastreabilidade de Bugs

```text
[ Product Backlog ] ➔ [ To Do ] ➔ [ In Progress ] ➔ [ Code Review ] 
                                                            │
[ Done ] ⇇ [ Client Review ] ⇇ [ In Testing ] ⇇ [ Ready for Testing ]
                                       │
                                (Gargalo/Bug)
                                       ↓
                             [ Card de Bug criado em To Do ]