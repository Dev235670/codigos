-- QUERY PARA CRIAR BANCOS
CREATE DATABASE meu_banco2;

-- QUERY PARA USAR BANCOS
USE meu_banco2;

CREATE TABLE tabela_pessoa (
    nome VARCHAR(500)
);

CREATE TABLE tabela_pessoa2 (
    nome VARCHAR(900),
    idade INT,
    data_de_nascimento DATE
);

-- QUERY PARA REMOÇÃO DE TABELAS
DROP TABLE tabela_pessoa2;
-- QUERY PARA CRIAÇÃO DE TABELAS
CREATE TABLE dados_jogador (
    username VARCHAR(20),
    endereço_ip INT(16),
    robux INT
);

-- QUERY PARA MUDANÇAS EM TABELAS E O QUE ADICIONAR BEM COMO O TIPO DE VALOR ADICIONADO
ALTER TABLE dados_jogador ADD COLUMN data_nascimento DATE;

--        CRUD          -
--                      -
-- C - CREATE -> INSERT -
-- R - READ -> SELECT   -
-- U - UPDATE -> UPDATE -
-- D - DELETE -> DELETE -

-- QUERY PARA LER TODOS OS ELEMENTOS DO BANCO [SE APLICA PARA NOMES E ETC..]
SELECT * FROM dados_jogador;

-- QUERY PARA CRIAR ELEMENTOS EM UMA TABELA
INSERT INTO dados_jogador(idade, data_nascimento, nome_real)

-- QUERY PARA DEFINIÇÃO DOS VALORES DA TABELA MODIFICADA
VALUES (20, "2005-02-04")

-- QUERY ADICIONAL PARA SELECIONAR APENAS DADOS ESPECIFICOS DO BANCO
SELECT * FROM tabela_nova
WHERE idade = 28;

-- UPDATES SEM TRAVAR
SELECT * FROM tabela_nova;
SET SQL_SAFE_UPDATES = 0; -- DESABILITAÇÃO DA TRAVA DE SEGURANÇA
UPDATE tabela_nova SET idade = 40 WHERE nome_real = "Pedro"; 
-- UPDATE MUDA A TABELA;
-- SET FAZ A MUDANÇA SETANDO NOVO VALOR;
-- ONDE TAL NOME COM TAL VALOR RECEBE ESSA MUDANÇA;

-- QUERY PARA REMOVER ELEMENTOS DA TABELA ESPECIFICANDO UM DADO EXISTENTE DENTRO DO BANCO
DELETE FROM tabela_nova WHERE nome_real = "Pedro";

-- CONTRAINTS [CONFIG DO SQL]
CREATE TABLE tabela_nova_3 (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, -- PRIMARY KEY, AUTO_INCREMENT E NOT NULL SÃO
                                                -- CONSTRAINTS [CONFIGS DO SQL]
    nome VARCHAR (255),
    profissao VARCHAR (255),
    idade INT (100),
);

-- CONSTRAINTS RELAÇÃO CHAVE ESTRANGEIRA
CREATE TABLE enderecos (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    rua VARCHAR (255),
    nomes VARCHAR (10),
    pessoa_id INT NOT NULL, -- dado, tipo do dado, constraint = chave estrangeira;
    FOREIGN KEY (pessoa_id) REFERENCES pessoa (id) -- declaração dessa chave pela "variável" referenciando a pessoa pelo seu id;
);

-- AGREGATION FUNCTIONS [COUNT E SUM];
-- ALIAS [DEFINIÇÕES PARA NOMES SOBRE AQUILO QUE ESTAMOS FAZENDO SEM QUE O SQL DEFINA COMO SERÁ CHAMADO O ELEMENTO DA TABELA SQL];
-- GROUP BY [AGRUPA TODA A CONTAGEM POR UM ELEMENTO ESPECÍFICO DA TABELA SQL];
-- CONCAT [JUNTA VÁRIOS CARACTERES];
-- DAY MONTH E YEAR [FUNÇÕES DO SQL PARA EXTRAIR E SEPERAR DADOS DE UMA DATA DE NASCIMENTO]

SELECT SUM(idades) AS idades_somadas FROM pessoa;
SELECT COUNT(*) AS conexôes_do_banco FROM pessoa;
SELECT COUNT (*) AS desenvolvedores_ativos FROM pessoa WHERE nomes = "Paulo";
SELECT nomes, COUNT (*) AS nomes_existentes FROM pessoa GROUP BY (nomes);
SELECT CONCAT("olá me chamo ", nomes, " tenho ", idades, " anos e eu nasci em: ", data_nascimento) AS textos_criados FROM pessoa;
SELECT YEAR(data_nascimento) AS ano_de_nascimento, MONTH(data_nascimento) AS mês_de_nascimento, DAY(data_nascimento) AS dia_de_nascimento FROM pessoa;