import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1,
  duration: '5s',
};

export default function () {
  const url = 'http://localhost:3000/rest/user/login';
  
  // Payload de SQL Injection no e-mail
  const payload = JSON.stringify({
    email: "' OR 1=1--",
    password: "123"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  // Validação do teste de segurança:
  // Se o sistema for seguro, deve responder 401 (Unauthorized)
  check(res, {
    'Sistema bloqueou SQL Injection (esperado 401)': (r) => r.status === 401,
  });
}