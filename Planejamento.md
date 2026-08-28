# Gerenciador Financeiro

## Problema

Muitas pessoas não conseguem acompanhar claramente quanto recebem e quanto gastam e em quais categorias o dinheiro está sendo utilizado.

## Objetivo

Desenvolver uma aplicação web que permita registrar receitas e despesas, organizar transações por categorias e acompanhar a situação financeira por meio de indicadores e gráficos.

## Público-alvo

Pessoas que desejam organizar suas finanças pessoais de maneira simples.

## Funcionalidades do MVP

- Cadastro e login de usúarios
- Cadastro de receitas e despesas
- Criação de categorias
- Listagem de transações
- Edição e exclusão de transações
- Filtros por período e categoria
- Resumo de saldo, receitas e despesas
- Gráfico de fluxo financeiro
- Escolha da aparência do dashboard

## Histórias de usúario

### Autenticação

- Como visitante, quero criar uma conta para utilizar o gerenciador financeiro.
- Como usuário, quero entrar com meu e-mail e senha para acessar meus dados.
- Como usuário, quero sair da minha conta para proteger minhas informações.

### Transações

- Como usuário, quero cadastrar uma receita para registrar o dinheiro recebido.
- Como usuário, quero cadastrar uma despesa para controlar meus gastos.
- Como usuário, quero editar uma transação para corrigir informações.
- Como usuário, quero excluir uma transação cadastrada incorretamente.
- Como usuário, quero consultar minhas transações para acompanhar minha movimentação financeira.

### Categorias

- Como usuário, quero criar categorias para organizar minhas transações.
- Como usuário, quero filtrar transações por categoria para entender onde gasto meu dinheiro.

### Dashboard

- Como usuário, quero visualizar meu saldo atual para conhecer minha situação financeira.
- Como usuário, quero visualizar o total de receitas e despesas do período.
- Como usuário, quero acompanhar um gráfico para comparar receitas e despesas.
- Como usuário, quero escolher a aparência do dashboard para personalizar a aplicação.
- Como usuário, quero visualizar minhas transações recentes para acompanhar rapidamente minhas últimas movimentações.
- Como usuário, quero preencher manualmente alguma transação.
- Como usuário, quero ter acesso a um relatório mensal das transações.

## Regras de negócio

1. Cada usuário deverá acessar somente os próprios dados.
2. O e-mail utilizado no cadastro deverá ser único.
3. Toda transação deverá possuir descrição, valor, tipo e data.
4. O valor de uma transação deverá ser maior que zero.
5. Uma transação poderá ser do tipo receita ou despesa.
6. Toda transação deverá estar associada a uma categoria.
7. O saldo será calculado pela soma das receitas menos a soma das despesas.
8. Os filtros deverão considerar somente as transações do usuário autenticado.
9. A aparência escolhida pelo usuário deverá permanecer salva.
10. A exclusão de uma categoria com transações associadas deverá ser impedida ou exigir a transferência das transações.

## Telas e rotas

### Rotas públicas

- `/login`: tela para o usuário entrar no sistema.
- `/cadastro`: tela para criação de uma nova conta.

### Rotas protegidas

- `/dashboard`: apresenta saldo, receitas, despesas, gráfico e transações recentes.
- `/transacoes`: permite listar, cadastrar, editar, excluir e filtrar transações.
- `/categorias`: permite criar e gerenciar categorias.
- `/configuracoes`: permite alterar dados pessoais e a aparência do dashboard.

## Fluxo de navegação

1. O visitante acessa a aplicação.
2. Se não estiver autenticado, será direcionado para a tela de login.
3. O visitante poderá entrar ou criar uma conta.
4. Após a autenticação, será direcionado para o dashboard.
5. Pelo menu lateral, poderá acessar transações, categorias e configurações.
6. Ao sair da conta, retornará para a tela de login.