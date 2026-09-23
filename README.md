# 🚀 QA Beyond the Screen - Advanced Software Quality Engineering

[![Security DAST Pipeline](https://github.com/mariarayanna/qa-beyond-the-screen/actions/workflows/security-pipeline.yml/badge.svg)](https://github.com/mariarayanna/qa-beyond-the-screen/actions/workflows/security-pipeline.yml)

Bem-vindo ao repositório **QA Beyond the Screen**! Este projeto foi desenvolvido por Maria Rayanna para demonstrar a esteira completa de engenharia e garantia de qualidade (QA), indo além dos testes manuais funcionais para explorar Performance, Segurança (DAST), CI/CD, APIs e Estratégia de Testes.

---

## 📌 Visão Geral da Estrutura de Testes

| Módulo | Tipo de Teste | Ferramenta / Tech | Status / Evidência |
| :--- | :--- | :--- | :--- |
| **01** | Manual & Exploratório | Markdown / Trello | ⏳ Planejado |
| **02** | Testes de API | Postman / Newman | ⏳ Planejado |
| **03** | Banco de Dados & SQL | SQLite / DBeaver | ⏳ Planejado |
| **04** | Automação Web / API | Cypress / Playwright | ⏳ Planejado |
| **05** | Performance & Carga | k6 (JavaScript) | ✅ `load-test.js` (Relatórios JSON/HTML) |
| **06** | Segurança Dinâmica (DAST) | k6 / Docker / OWASP ZAP | ✅ `sqli-test.js` & `security-dast-tests.md` |
| **07** | Estratégia & Planos de Teste | BDD / Mapas Mentais | ⏳ Planejado |

---

## ⚙️ Esteira DevSecOps & CI/CD (GitHub Actions)

O projeto conta com uma pipeline automatizada de **Segurança Dinâmica (DAST)** configurada em `.github/workflows/security-pipeline.yml`. A cada novo `push` ou `pull_request` na branch `main`:

1. Um container Docker com a aplicação **OWASP Juice Shop** é provisionado no ambiente do GitHub Actions.
2. O runner do **k6** executa o script de segurança `06-security-dast/sqli-test.js`.
3. O resultado da chamada HTTP é validado contra padrões de vulnerabilidade (ex: verificação do bypass de autenticação por SQL Injection).

---

## 📋 Gestão Ágil e Acompanhamento

Todo o fluxo de desenvolvimento de casos de teste, automações e registros de bugs é gerenciado publicamente no Trello:

* 📌 **Board no Trello:** [Acessar Quadro do Projeto](https://trello.com) *(Substitua pelo seu link público do Trello)*

---

## 🚀 Como Executar os Testes Localmente

### Pré-requisitos
* Node.js instalado
* Docker instalado e em execução
* k6 instalado

### 1. Subir a Aplicação Alvo (OWASP Juice Shop)
```bash
docker run -d -p 3000:3000 bkimminich/juice-shop