CREATE TABLE User (
    Nome VARCHAR(70) not null,
    CPF VARCHAR(15) not null PRIMARY KEY,
    email VARCHAR(100) not null,
    password VARCHAR(30) not null
);

CREATE TABLE Category (
    Id_category SERIAL PRIMARY KEY,
    category_name VARCHAR(50)
);

CREATE TABLE Address (
    id_address SERIAL unique PRIMARY KEY,
    street VARCHAR(100),
    number VARCHAR(5),
    district VARCHAR(20),
    city VARCHAR(30),
    Coordinates VARCHAR(50)
);

CREATE TABLE Report (
    Id_report serial PRIMARY KEY,
    Title VARCHAR(100),
    Description VARCHAR(256),
    fk_User_CPF VARCHAR(15),
    fk_Category_id_category INT,
    fk_Address_id_address INT,
	FOREIGN KEY (fk_User_CPF)
      REFERENCES User(CPF),
	FOREIGN KEY (fk_Category_id_category)
      REFERENCES Category(Id_category),
	FOREIGN KEY (fk_Address_id_address)
      REFERENCES Address(id_address)
);

CREATE TABLE Image (
    Id_image SERIAL PRIMARY KEY,
    image_directory VARCHAR(256)
);

CREATE TABLE report_image (
    fk_Report_Id_report INT,
    fk_Image_Id_image INT,
	FOREIGN KEY (fk_Report_Id_report)
      REFERENCES Report(Id_report),
	FOREIGN KEY (fk_Image_Id_image)
      REFERENCES Image(Id_image)
	
);
