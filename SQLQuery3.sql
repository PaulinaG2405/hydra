create database plantillas
use plantillas

-- comenzamos con la que no tiene mucha relacions entre ellas 
create table Usuario (
IDUsuario int primary key ,
nombre varchar  (20),
Apeliido varchar (20),
CorreoEletronico varchar (50),
Contraseña varchar (50) ,
tipoDeUsuario_admistrador_comprador  varchar(40),
FechaRegistro date ,
);
 create table Plantilla (
 IDPlantilla bigint primary key,
 NombrePlantilla varchar (50),
 Descripcion varchar (100),
 Catedoria varchar (50),
 Presio float ,
 Imagen varbinary(max),
 Archivo varbinary(max)
 );
 create table compra (
 IDcompra bigint Primary key,
 IDUsuario int ,
 IDPlantilla bigint,
 FechaCompra date,
 Monto float ,
 EstadoCompra varchar(20),
 constraint FK_USU foreign key  (IDUsuario) references Usuario (IDUsuario),
 constraint FK_Pla foreign key  (IDPlantilla) references Plantilla (IDPlantilla)
 ); 
 create table Transacciones (
 IDTransaciones bigint primary key ,
 IDcompra bigint ,
 FechaTransacion date ,
 Monto float ,
 EstadoTransaccion varchar (20),
 constraint FK_com foreign key  (IDcompra) references compra (IDcompra)
 );
 create table soporte(
 IDSoporte bigint primary key ,
 IDUsuario int,
 Asunto varchar (50),
 descricion varchar (50),
 EstadoSoporte varchar (50),
 constraint FK_USU1 foreign key  (IDUsuario) references Usuario (IDUsuario)
 )
  create table notifiaciones (
  IDNotificaciones bigint primary key,
  IDUsuario int,
  Asunto varchar (50),
  Mensaje varchar (50),
  FechaCreacion date ,
  EstadNotificacion varchar (50),
  constraint FK_USU2 foreign key  (IDUsuario) references Usuario (IDUsuario)
  );
  create table categoria (
  IDCategoria bigint primary key,
  IDplantilla bigint ,
  NombreCategoria varchar (50),
  Descripcion Varchar (50),
  constraint FK_Pla1 foreign key  (IDPlantilla) references plantilla (IDPlantilla)
  );