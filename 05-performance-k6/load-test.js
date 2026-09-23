import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// 1. CONFIGURACAO DO CENARIO DE TESTE (Options)
export const options = {
  stages: [
    { duration: '10s', target: 20 },  // Carga leve: 20 usuarios virtuais em 10s
    { duration: '20s', target: 100 }, // Estresse: 100 usuarios simultaneos
    { duration: '10s', target: 0 },   // Recuperacao do servidor
  ],
  thresholds: {
    // Criterio de Aceite (SLA): 95% das requisicoes devem responder em menos de 500ms
    http_req_duration: ['p(95)<500'],
  },
};

// 2. FUNCAO PRINCIPAL (Executada por cada usuario virtual)
export default function () {
  // Consulta a API de produtos do Juice Shop rodando no Docker
  const res = http.get('http://localhost:3000/rest/products/search?q=');
  
  // Validacao: checa se o status da resposta foi 200 OK
  check(res, { 'status is 200': (r) => r.status === 200 });
  
  sleep(1);
}

// 3. EXPORTACAO DO RELATORIO HTML E JSON
export function handleSummary(data) {
  return {
    "05-performance-k6/performance-reports/summary.html": htmlReport(data),
  };
}