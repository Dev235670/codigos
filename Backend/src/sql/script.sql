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