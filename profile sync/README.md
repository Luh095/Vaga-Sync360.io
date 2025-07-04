# User Profile App

### 🧱 Tecnologias
- Frontend: React + TailwindCSS
- Backend: Node.js + Express
- Banco: MySQL

### 🚀 Rodando o projeto

1. Crie o banco no MySQL com o script fornecido:
```sql
CREATE DATABASE user_profile;

USE user_profile;

CREATE TABLE users (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  rua VARCHAR(100),
  bairro VARCHAR(100),
  estado VARCHAR(50),
  biografia TEXT,
  imagem_url TEXT
);

INSERT INTO users VALUES (
  1,
  'João Silva',
  30,
  'Rua das Flores',
  'Centro',
  'SP',
  'Desenvolvedor apaixonado por tecnologia.',
  'https://via.placeholder.com/150'
);
```

2. Backend:
```bash
cd backend
npm install
node server.js
```

3. Frontend:
```bash
cd frontend
npm install
npm start
```

### Acesse:
Frontend: http://localhost:3000  
Backend: http://localhost:3001/usuario