-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27/03/2024 às 23:29
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `loja`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `cpf` varchar(20) DEFAULT NULL,
  `rg` varchar(20) DEFAULT NULL,
  `contato` varchar(20) DEFAULT NULL,
  `limite` double(11,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cliente`
--

INSERT INTO `cliente` (`id`, `nome`, `cpf`, `rg`, `contato`, `limite`) VALUES
(1, 'Alessandra', '999.999.000-66', '1111 spp-to', '(63)9999-6666', 5000.00),
(2, 'arthur', '999.888.999.77', '7654321', '(63)99285-0380', 2000.00),
(3, 'alisson', '999.888.999.77', '7654321', '(63)99285-0380', 7000.00),
(4, 'Livia', '999.888.999.77', '7654321', '(63)99285-0380', 1000.00),
(5, 'Felipe', '999.888.999.77', '7654321', '(63)99285-0380', 1000.00),
(6, 'Ian', '999.888.999.77', '7654321', '(63)99285-0380', 1000.00),
(7, 'Bleno', '999.888.999.77', '7654321', '(63)99285-0380', 1000.00),
(8, 'Alisson', '999.888.999.77', '7654321', '(63)99285-0380', 2000.00),
(9, 'Ian', '999.888.999.77', '7654321', '(63)99285-0380', 100000.00);

-- --------------------------------------------------------

--
-- Estrutura para tabela `fornecedor`
--

CREATE TABLE `fornecedor` (
  `id` int(11) NOT NULL,
  `razao_social` varchar(100) DEFAULT NULL,
  `nome_fantasia` varchar(100) DEFAULT NULL,
  `cnpj` varchar(20) DEFAULT NULL,
  `contato` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `fornecedor`
--

INSERT INTO `fornecedor` (`id`, `razao_social`, `nome_fantasia`, `cnpj`, `contato`) VALUES
(1, 'Fornecedor A LDTA', 'fornacA', '12.345.678/0001-00', '(74) 99999-1001'),
(2, 'Fornecedor B LDTA', 'fornacB', '12.345.678/0001-00', '(74) 99999-1001'),
(3, 'Fornecedor C LDTA', 'fornacC', '12.345.678/0001-00', '(74) 99999-1001'),
(4, 'Fornecedor D LDTA', 'fornacD', '12.345.678/0001-00', '(74) 99999-1001'),
(5, 'Fornecedor E LDTA', 'fornacE', '12.345.678/0001-00', '(74) 99999-1001');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `status` char(1) NOT NULL DEFAULT 'A',
  `descricao` varchar(60) NOT NULL,
  `valor_unitario` decimal(11,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`id`, `status`, `descricao`, `valor_unitario`) VALUES
(1, 'A', 'Sal Mineral iodado', 50.00),
(2, 'A', 'Sal Mineral rosa do imalaia', 90.00),
(3, 'A', 'Sal Mineral branco', 50.00),
(4, 'A', 'Sal Mineral refinado', 50.00);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  `senha` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `senha`) VALUES
(1, 'Alisson', 'alisson123@gmail.com', '12345'),
(2, 'Ian', 'ian@gmail.com', '4356786'),
(3, 'Tony', 'tony@gmail.com', '1232442');

-- --------------------------------------------------------

--
-- Estrutura para tabela `vendas`
--

CREATE TABLE `vendas` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) DEFAULT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `valor_unitario` decimal(11,2) DEFAULT 0.00,
  `data_venda` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `vendas`
--

INSERT INTO `vendas` (`id`, `id_produto`, `id_cliente`, `id_usuario`, `quantidade`, `valor_unitario`, `data_venda`) VALUES
(1, 4, 3, 1, 12, 12.00, '2024-03-26'),
(2, 4, 3, 1, 12, 12.00, '2024-03-26'),
(3, 3, 1, 3, 90, 13.00, '2024-03-27'),
(4, 3, 9, 2, 90, 13.00, '2024-03-27'),
(5, 3, 7, 2, 31, 12.00, '2024-03-27');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `vendas`
--
ALTER TABLE `vendas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cliente` (`id_cliente`),
  ADD KEY `fk_produto` (`id_produto`),
  ADD KEY `fk_usuario` (`id_usuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `vendas`
--
ALTER TABLE `vendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `vendas`
--
ALTER TABLE `vendas`
  ADD CONSTRAINT `fk_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`),
  ADD CONSTRAINT `fk_produto` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`id`),
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
