-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    
    select 
        productName,
        categoryName
    from category as c
    join product as p 
        on c.id = p.categoryId;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
    
    select 
        o.id,
        o.orderDate,
        s.companyName
    from [order] as o
    left join shipper as s
        on o.shipVia = s.id
    WHERE o.orderDate < date('2012-08-09');

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

    select 
        p.productName,
        o.quantity
    from orderDetail as o
    join product as p
        on o.productId = p.id
    where o.orderId = 10251
    order by p.productName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

    select 
        o.id,
        c.companyName,
        (e.firstName || ' ' || e.lastName) as employee_name
    from [order] as o
    join customer as c
        on o.customerId = c.id
    join employee as e
        on o.employeeId = e.id;

