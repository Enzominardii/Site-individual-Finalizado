
CREATE DATABASE BeachLife;

USE BeachLife;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

 select * from usuario;
 


CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);
-- select * from aviso;


create table quiz(
idQuiz int primary key,
nomeQuiz varchar(45), 
qtdPerguntas int);

create table quiz2(
idQuiz int primary key,
nomeQuiz varchar(45), 
qtdPerguntas int);


insert into quiz value
(1, 'Quiz sobre Beach Tennis', 8);

insert into quiz2 value
(2, 'Quiz Marcas de Beach Tennis', 8);



create table pontuacao(
idPontuacao int primary key auto_increment,
qtdAcertos int,
fkUsuario int,
foreign key (fkUsuario) references usuario(id),
fkQuiz int,
foreign key (fkQuiz) references quiz(idQuiz)
);

create table pontuacaoranking(
idPontuacao int primary key auto_increment,
qtdAcertos int,
fkUsuario int,
foreign key (fkUsuario) references usuario(id),
fkQuiz2 int,
foreign key (fkQuiz2) references quiz2(idQuiz)
);
