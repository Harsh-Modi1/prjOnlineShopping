create database Dbonlineshopping
use Dbonlineshopping
--1
create table Categories(CategoryID int primary key identity,CategoryName varchar(50)not null unique)
--2
create table Images(ImageID int primary key identity,Images image not null)
alter table Images alter column Images image null
alter table Images alter column Images VARBINARY(MAX)
insert into Images(Images) Select Bulkcolumn from openrowset(bulk N'D:\Project Online Shopping\Images\OppoFront1.jpeg',Single_blob) image;
select * from Images
insert into Images(Images) Select Bulkcolumn from openrowset(bulk N'D:\Project Online Shopping\Images\OppoFront2.jpeg',Single_blob) image;
insert into Images(Images) Select Bulkcolumn from openrowset(bulk N'D:\Project Online Shopping\Images\OppoFront3.jpeg',Single_blob) image;
insert into Images(Images) Select Bulkcolumn from openrowset(bulk N'D:\Project Online Shopping\Images\OppoFront4.jpeg',Single_blob) image;
alter table Images add ImageName nvarchar(20)
update Images set ImageName='Oppo.jpeg' where ImageID=1
update Images set ImageName='Oppo.jpeg' where ImageID=2
update Images set ImageName='Oppo.jpeg' where ImageID=3
update Images set ImageName='Oppo.jpeg' where ImageID=4
sp_rename 'Images.Images','ImageCaption','COLUMN'
alter table Images alter column ImageCaption nvarchar(50)
alter table Images drop column ImageCaption
alter table Images add ImageCaption nvarchar(50)

select * from Product
update Product set ImageID=1 where ProductID =1
update Product set ImageID=2 where ProductID =2
update Product set ImageID=3 where ProductID =3
update Product set ImageID=4 where ProductID =4
update Product set ImageID=4 where ProductID =5




--3
create table AddressTable(AddressID int primary key identity,AddressLine1 varchar(100),AddressLine2 varchar(100),
City varchar(30),State varchar(20),Country varchar(20),ZipCode int)
--4
create table UserTable(UserID int primary key identity,FirstName varchar(20) not null,LastName varchar(20),
Email varchar(50) unique not null,MobileNumber nvarchar(15) unique not null,Password varchar(20) not null,
CreatedOn datetime,IsAdmin bit not null,AddressID int references AddressTable(AddressID)) 

--5
create table RetailerTable(RetailerID int primary key identity,FirstName varchar(20) not null,LastName varchar(20),
Email varchar(50) unique not null,MobileNumber nvarchar(15) unique not null,Password varchar(20) not null,
CreatedOn datetime,AddressID int references AddressTable(AddressID)) 
--6
create table Product(ProductID int primary key identity,ProductCode nvarchar(20) unique not null ,ProductName varchar(50) not null,
ProductDescription varchar(400),Brand varchar(20) not null,Quantity int not null,ProductPrice float(10) not null,InStock bit not null,
UserID int references UserTable(UserID),RetailerID int references RetailerTable(RetailerID),ImageID int references Images(ImageID))

alter table Product drop constraint FK__Product__UserID__47DBAE45
alter table Product drop column UserID
sp_help 'Product'
alter table Product add CategoryID int references Categories(CategoryID)
--7
create table WishList(WishListID int primary key identity,ProductID int references Product(ProductID),UserID int references UserTable(UserID))
--8
create table OTP(ID int primary key identity,OTP varchar(6) not null,UserID int references UserTable(UserID))
--9
create table NotificationTable(ID int primary key identity,AdminID int references UserTable(UserID),
RetailerID int references RetailerTable(RetailerID),ProductID int references Product(ProductID),RetailerStatus bit not null)
--10
create table Cart(CartID int primary key identity,ProductID int references Product(ProductID),TotalPrice float not null,Quantity int not null)
--11
create table OrderTable(OrderID int primary key identity,OrderDate datetime not null,
CartID int references Cart(CartID),AddressID int references AddressTable(AddressID),UserID int references UserTable(UserID))
---insert--
--1
insert into Categories (CategoryName)values ('SmartPhones'),('BasicPhones')
select * from Categories
--2
--insert into Images values 
--3
insert into RetailerTable(FirstName,LastName,
Email,MobileNumber,Password) values ('Sandy','Lanka','Sandy@gmail.com','7894561231','Sand12'),
('Andy','Shah','Andy@gmail.com','9994561231','Andy12')
select * from RetailerTable

--3
insert into Product (ProductCode,ProductName,ProductDescription,Brand,Quantity,ProductPrice
,InStock,RetailerID,CategoryID) values ('123-456','Samsung Galaxy M51','The phone has a 6.7 in sAMOLED Plus display, a 64 MP quad-camera setup, and a 7000 mAh battery.',
'Samsung',10,20000,1,1,1),('321-456','Samsung Galaxy A51','The phone has a 6.1 in sAMOLED Plus display, a 64 MP quad-camera setup, and a 6200 mAh battery.',
'Samsung',12,15000,1,2,1)
insert into Product (ProductCode,ProductName,ProductDescription,Brand,Quantity,ProductPrice
,InStock,RetailerID,CategoryID) values ('321-789','Nokia 105','The Phone is a slim, basic GSM phone',
'Nokia',20,1200,1,1,2),('311-789','Karbonn 205','The Phone is a slim, basic GSM phone with 5Mp Camera',
'Karbonn',12,1500,1,2,2)

select * from Product