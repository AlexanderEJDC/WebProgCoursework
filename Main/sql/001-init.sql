-- Up 

CREATE TABLE Messages (
  id   CHAR(36) PRIMARY KEY,
  dateDone  TEXT    NOT NULL,
  work  TEXT    NOT NULL,
  xp    TEXT    NOT NULL, 
  competencies  TEXT    NOT NULL
);

INSERT INTO Messages (id, dateDone, work, xp, competencies) VALUES 
(
    '01',
    '10/05/2023',
    'Built the database',
    'basic SQL skill',
    'A1'
),
(
    '02',
    '09/05/2023',
    'Enabled Editing',
    'basic js',
    'A2'
),
(
    '03',
    '08/05/2023',
    'Basic memeory handling',
    'basic js skill',
    'A1'
);

-- Down 

DROP TABLE Messages; 