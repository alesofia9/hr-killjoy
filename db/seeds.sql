-- Insert data into department table
INSERT INTO department (name) 
    VALUES
('Customer Care'),
('Finance'),
('Project Management'),
('Human Resources'),
('Marketing'),
('Administration');

-- Insert data into role table
INSERT INTO role (id, title, salary, department_id) 
    VALUES
(125, 'Customer Support Representative', 50000, 1),
(284, 'Accountant', 65000, 2),
(372, 'Project Manager', 70000, 3),
(422, 'HR Manager', 75000, 4),
(560, 'Marketing Coordinator', 60000, 5),
(698, 'Admin Lead', 85000, 6);

-- Insert data in to employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
('Harry', 'Potter', 125, NULL),
('Ash', 'Ketchum', 284, 1),
('Oprah', 'Winfrey', 372, 1),
('Snoop', 'Dogg', 422, 2),
('Olivia', 'Wild', 560, 3),
('Chris', 'Pratt', 698, 3),
('Henry', 'Ford', 125, 4),
('Sailor', 'Moon', 284, 4),
('Britney', 'Spears', 372, 5),
('Cilian', 'Murphy', 422, 5),
('Fidel', 'Calderon', 560, 6),
('Jackie', 'Chan', 698, 6),
('Jorge', 'Lopez', 125, 7),
('Xiao', 'Ming', 284, 7),
('Sofia', 'Tres', 372, 8);