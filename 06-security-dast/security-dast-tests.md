# 🛡️ Módulo 06: Testes de Segurança Dinâmicos (DAST)

Este módulo documenta a execução de testes de segurança dinâmicos (DAST - Dynamic Application Security Testing) realizados na aplicação **OWASP Juice Shop**, focando em vulnerabilidades críticas catalogadas no **OWASP Top 10**.

---

## 📌 Teste 01: Bypass de Autenticação via SQL Injection (SQLi)

* **Vulnerabilidade:** A03:2021 – Injection (OWASP Top 10)
* **Severidade:** 🔴 Crítica (CVSS 9.8)
* **Vetor de Ataque:** Endpoint de Autenticação (`POST /rest/user/login`)
* **Ferramenta de Diagnóstico:** Navegador / Burp Suite / OWASP ZAP

### 📋 Descrição do Cenário
A aplicação não realiza a higienização adequada das entradas do usuário no formulário de login antes de construir as queries SQL de consulta no banco de dados SQLite. Isso permite que um atacante manipule a lógica da instrução SQL para autenticar-se como administrador sem credenciais válidas.

### 🧪 Steps to Reproduce (Passos para Reprodução)
1. Navegar até a página de login da aplicação (`http://localhost:3000/#/login`).
2. No campo **Email**, inserir o seguinte payload:
   ```text
   ' OR 1=1--
3. No campo **Password**, inserir qualquer texto arbitrário (ex: 12345).
4. Clicar no botão **Log in**.

### 📊 Resultado Esperado vs. Obtido
Resultado Esperado (Seguro): A aplicação deve recusar a autenticação, sanitizar a entrada e retornar um erro HTTP 401 Unauthorized.

Resultado Obtido (Vulnerável): A aplicação autentica o usuário com sucesso como admin@juice-sh.op e retorna um token JWT de sessão na resposta da API.