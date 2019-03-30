-- USERS 
INSERT INTO users (first_name, last_name, email, password)
values ('Momo', 'Villasana', 'momo@momomomomo.com', 'abc123');
INSERT INTO users (first_name, last_name, email, password)
values ('Eevee', 'Garcia', 'eevee@eevee.com', 'abc12345');
INSERT INTO users (first_name, last_name, email, password)
values ('Jason', 'Shmidth', 'suhdude@suh.com', '12345');
INSERT INTO users (first_name, last_name, email, password)
values ('Vincent', 'Staples', 'stapleson@ezpz.com', 'abcde');

-- ORDERS
INSERT INTO orders (order_name, size, user_id)
values('Raspberry Frappe', 'LargeAf', 1);
INSERT INTO orders (order_name, size, user_id)
values('Mochachino Surprise', 'smol', 1);
INSERT INTO orders (order_name, size, user_id)
values('Cheesecake Latte', 'smooth', 2);
INSERT INTO orders (order_name, size, user_id)
values('Pineapple apple', 'apple', 2);
INSERT INTO orders (order_name, size, user_id)
values('Pina Colada', 'Grande', 2);
INSERT INTO orders (order_name, size, user_id)
values('Raspberry Pizza', 'Meteor', 3);
INSERT INTO orders (order_name, size, user_id)
values('Red Eye', 'LargeAf', 3);
INSERT INTO orders (order_name, size, user_id)
values('Pizza Frappe', 'smolado', 4);
INSERT INTO orders (order_name, size, user_id)
values('Starwberry Mango cheesecake', 'Smedium', 4);
INSERT INTO orders (order_name, size, user_id)
values('Snowflake Donut ', 'cronut', 1);
